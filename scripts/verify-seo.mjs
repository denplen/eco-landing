import assert from "node:assert/strict";
import http from "node:http";

// Run against a local production build only. No forms, analytics or CRM calls.
const base = new URL(process.argv[2] || "http://127.0.0.1:3107");
assert.equal(base.protocol, "http:");
assert.ok(["127.0.0.1", "localhost", "[::1]"].includes(base.hostname));
const canonical = "https://eco.glavgeocom.ru";
const canonicalHost = new URL(canonical).host;
let checks = 0;

function get(path, host = canonicalHost, extraHeaders = {}) {
  return new Promise((resolve, reject) => {
    const request = http.get(new URL(path, base), {
      headers: { Host: host, "User-Agent": "Googlebot", ...extraHeaders },
      timeout: 15000,
    }, (response) => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => { body += chunk; });
      response.on("end", () => resolve({ status: response.statusCode, headers: response.headers, body }));
      response.on("error", reject);
    });
    request.on("timeout", () => request.destroy(new Error(`Timed out: ${host}${path}`)));
    request.on("error", reject);
  });
}

function meta(html, key) {
  return [...html.matchAll(/<meta\s[^>]*>/g)]
    .filter(([tag]) => tag.includes(`name="${key}"`) || tag.includes(`property="${key}"`))
    .map(([tag]) => tag.match(/content="([^"]*)"/)?.[1]);
}

function canonicalLinks(html) {
  return [...html.matchAll(/<link\s[^>]*>/g)]
    .filter(([tag]) => tag.includes('rel="canonical"'))
    .map(([tag]) => tag.match(/href="([^"]*)"/)?.[1]);
}

// Next.js can serialize the root URL without a trailing slash. Both forms
// identify the same absolute URL; relative or otherwise invalid URLs still fail.
function absoluteUrls(values) {
  return values.map((value) => new URL(value).href);
}

function assertHome(response, noindex) {
  assert.equal(response.status, 200);
  assert.deepEqual(absoluteUrls(canonicalLinks(response.body)), [`${canonical}/`]);
  assert.deepEqual(absoluteUrls(meta(response.body, "og:url")), [`${canonical}/`]);
  assert.deepEqual(meta(response.body, "og:image"), [`${canonical}/og-image.png`]);
  assert.deepEqual(meta(response.body, "twitter:image"), [`${canonical}/og-image.png`]);
  if (noindex) assert.match(response.headers["x-robots-tag"] || "", /\bnoindex\b/);
  else {
    assert.equal(response.headers["x-robots-tag"], undefined);
    assert.ok(meta(response.body, "robots").every((value) => !value.includes("noindex")));
    assert.ok(meta(response.body, "robots").some((value) => value.includes("index")));
  }
  checks += 1;
}

assertHome(await get("/"), false);
assertHome(await get("/?utm_source=seo-check&yclid=test"), false);

for (const host of [
  "eco-landing-five.vercel.app", "eco-landing-preview.vercel.app",
  "preview.example.test", "5.129.252.102", "localhost:3107",
  "eco.glavgeocom.ru.example.test", "eco-glavgeocom-ru",
]) {
  assertHome(await get("/", host), true);
}
assertHome(await get("/", "preview.example.test", { "X-Forwarded-Host": canonicalHost }), true);
// A cached response from a technical host must not noindex the public domain.
assertHome(await get("/"), false);

for (const host of [canonicalHost, "eco-landing-five.vercel.app"]) {
  const success = await get("/success", host);
  assert.equal(success.status, 200);
  assert.deepEqual(canonicalLinks(success.body), [`${canonical}/success`]);
  assert.deepEqual(meta(success.body, "og:url"), [`${canonical}/success`]);
  assert.ok(meta(success.body, "robots").some((value) => value.includes("noindex")));
  assert.match(success.headers["x-robots-tag"], /\bnoindex\b/);
  checks += 1;

  const robots = await get("/robots.txt", host);
  assert.equal(robots.status, 200);
  assert.match(robots.headers["content-type"], /text\/plain/);
  assert.match(robots.body, /^User-Agent: \*$/m);
  assert.match(robots.body, /^Allow: \/$/m);
  assert.match(robots.body, /^Disallow: \/api\/$/m);
  assert.ok(robots.body.includes(`Sitemap: ${canonical}/sitemap.xml`));
  assert.doesNotMatch(robots.body, /^Disallow: \/(?:success)?$/m);
  checks += 1;

  const sitemap = await get("/sitemap.xml", host);
  assert.equal(sitemap.status, 200);
  assert.match(sitemap.headers["content-type"], /xml/);
  assert.deepEqual([...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]), [`${canonical}/`]);
  assert.doesNotMatch(sitemap.body, /<lastmod>|\/success|vercel\.app|utm_|#/);
  if (host !== canonicalHost) {
    assert.match(robots.headers["x-robots-tag"], /\bnoindex\b/);
    assert.match(sitemap.headers["x-robots-tag"], /\bnoindex\b/);
  }
  checks += 1;
}

const notFound = await get("/missing-seo-test-page");
assert.equal(notFound.status, 404);
assert.ok(meta(notFound.body, "robots").some((value) => value.includes("noindex")));
assert.deepEqual(canonicalLinks(notFound.body), []);
checks += 1;

const api = await get("/api/lead");
assert.equal(api.status, 405); // GET cannot create a lead.
assert.match(api.headers["x-robots-tag"], /\bnoindex\b/);
checks += 1;

console.log(`SEO HTTP checks passed: ${checks}. Canonical domain: ${canonical}`);
