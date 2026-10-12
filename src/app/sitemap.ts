import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // One indexable page. Fragment sections, APIs and the thank-you page are omitted.
  // Do not claim a lastModified timestamp without a real content update date.
  return [{ url: `${SITE_ORIGIN}/` }];
}
