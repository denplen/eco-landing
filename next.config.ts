import type { NextConfig } from "next";
import { SITE_ORIGIN } from "./src/lib/site";

const canonicalHost = new URL(SITE_ORIGIN).hostname.replaceAll(".", "\\.");
const noindexHeaders = [{ key: "X-Robots-Tag", value: "noindex, follow" }];

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/:path*",
        // Host-based, so this also protects production Vercel aliases and future
        // preview domains, without depending on deployment environment variables.
        missing: [{ type: "host", value: canonicalHost }],
        headers: noindexHeaders,
      },
      { source: "/success/:path*", headers: noindexHeaders },
      { source: "/api/:path*", headers: noindexHeaders },
    ];
  },
};

export default nextConfig;
