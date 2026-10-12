# SEO and canonical domain

## Verified on 12 October 2026

This repository is the ecological landing at **https://eco.glavgeocom.ru/**,
not the main corporate website at https://glavgeocom.ru/ (`denplen/glavgeocom-site`).
The public domain is recorded in `AGENTS.md` and confirmed by the live Nginx
`server_name eco.glavgeocom.ru` configuration and its HTTP 200 response.

Before this change, the live ecological landing had no canonical, its OG URL
pointed to `https://eco-landing-five.vercel.app/`, and `/robots.txt` and
`/sitemap.xml` returned 404. The Vercel alias also returned an indexable 200 page.
This proves configuration gaps, not a search engine indexing incident.

The main corporate site already returns its own canonical URLs, robots and
sitemap; `new.glavgeocom.ru` returns a 301 to `https://glavgeocom.ru/`.
No changes to that separate repository or the live server are part of this PR.

## Policy

- `src/lib/site.ts` is the source of truth for the public origin. Do not derive
  canonical URLs from request headers, preview URLs or UTM parameters.
- Root `metadataBase` resolves Open Graph and Twitter image URLs on the public
  domain. The homepage has a page-scoped canonical; it is not inherited by 404s.
- `/success` is a utility page: self-canonical, `noindex, follow` in metadata
  and the HTTP response, and absent from the sitemap. Its UI and lead handling
  are unchanged.
- The sitemap contains only the homepage. Page sections (`#anchors`) are not
  separate pages. No invented or build-time `lastmod` is emitted.
- `robots.txt` permits public content and blocks `/api/`. It deliberately does
  **not** block `/success` or technical hosts from crawling: crawlers must fetch
  those responses to discover `noindex`.
- Every host except `eco.glavgeocom.ru` receives `X-Robots-Tag: noindex, follow`
  via host-scoped Next.js response headers. This includes Vercel production
  aliases, preview aliases, IP addresses and local copies, even when built in
  production mode. They stay usable for QA without forced redirects.
- The same artifact can serve multiple hosts: its sitemap and canonical URLs
  always identify the public domain, never a technical host. The technical
  host's sitemap/robots responses themselves also carry `noindex`.
- Nginx currently preserves `Host` (`proxy_set_header Host $host`). Preserve
  this configuration when deploying; otherwise the public site will safely
  receive `noindex` as an unknown host. Do not rewrite a preview's Host to the
  public domain. Existing HTTP-to-HTTPS redirects remain the server's concern.

`noindex` is an indexing directive, not access control or a promise of immediate
removal from search. Prefer deployment protection for private previews. The
existing Vercel copy is only fixed once the updated build is deployed there too.
Do not block it in robots before crawlers can see the exclusion signal.

## Verification

```sh
npm ci
npm run lint
npm run build
npm run typecheck
```

Start the standalone server used by the production container. Do not load
production CRM/Telegram secrets. The following commands use a POSIX shell:

```sh
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
HOSTNAME=127.0.0.1 PORT=3107 node .next/standalone/server.js
```

On PowerShell, use `Copy-Item -Recurse` for the two copies and set
`$env:HOSTNAME = '127.0.0.1'` and `$env:PORT = '3107'` before starting Node.
In a separate terminal, run:

```sh
npm run verify:seo
```

The dependency-free HTTP verifier uses a local production server with simulated
Host headers. It checks rendered metadata, absolute image URLs, UTM canonical
normalization, technical hosts and spoofed forwarding headers, sitemap contents,
robots policy, success and 404 pages, and a read-only GET to the lead API. It
never submits forms or contacts analytics, Telegram or amoCRM.

Validated on 12 October 2026 with Node.js 24.16.0 and Next.js 16.2.7:
`npm ci`, ESLint, the production build and TypeScript all passed. All 19 HTTP
checks passed against both the local Next.js server and the standalone output.
The build was run in an isolated checkout to prevent this repository's temporary
nesting inside another Next.js project from affecting workspace-root discovery.
No production deployment or live form submission was performed.

After separately approving and deploying the PR on the VPS and the Vercel copy,
check both hosts again and submit the canonical sitemap in the relevant search
console. The repository's old Vercel homepage setting is administrative metadata;
it can be updated to `https://eco.glavgeocom.ru/` separately, not by this PR.

References: [Next.js metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata),
[Next.js headers](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers),
[Google noindex requirements](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
