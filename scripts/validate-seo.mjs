const baseUrl = (process.env.SEO_BASE_URL || "http://127.0.0.1:3007").replace(/\/$/, "");
const siteUrl = "https://kiddscleanup.com";
const allowedMissingFromSitemap = new Set(["/thank-you"]);

function stripSiteOrigin(url) {
  if (url.startsWith(siteUrl)) {
    return url.slice(siteUrl.length) || "/";
  }

  if (url.startsWith(baseUrl)) {
    return url.slice(baseUrl.length) || "/";
  }

  return url;
}

function toLocalUrl(pathOrUrl) {
  const path = stripSiteOrigin(pathOrUrl);
  return path.startsWith("http") ? path : `${baseUrl}${path}`;
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function unique(values) {
  return [...new Set(values)];
}

async function fetchText(url) {
  const response = await fetch(url);
  const text = await response.text();

  return { response, text };
}

function extractLinks(html) {
  return unique(
    [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)]
      .map((match) => decodeHtml(match[1]))
      .filter((href) => href.startsWith("/") || href.startsWith(siteUrl) || href.startsWith(baseUrl))
      .map(stripSiteOrigin)
      .map((href) => href.split("#")[0].split("?")[0])
      .filter((href) => href && href !== "/")
  );
}

function pageChecks(path, html, sitemapPaths) {
  const errors = [];
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const h1s = [...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/g)];
  const jsonLdCount = (html.match(/application\/ld\+json/g) || []).length;

  if (!title || decodeHtml(title).trim().length < 10) {
    errors.push("missing or weak title");
  }

  if (!description || decodeHtml(description).trim().length < 40) {
    errors.push("missing or weak meta description");
  }

  if (!canonical) {
    errors.push("missing canonical");
  }

  if (canonical && stripSiteOrigin(canonical) !== path) {
    errors.push(`canonical mismatch: ${canonical}`);
  }

  if (h1s.length !== 1) {
    errors.push(`expected one h1, found ${h1s.length}`);
  }

  if (jsonLdCount === 0) {
    errors.push("missing JSON-LD");
  }

  for (const link of extractLinks(html)) {
    if (!sitemapPaths.has(link) && !allowedMissingFromSitemap.has(link)) {
      errors.push(`internal link missing from sitemap: ${link}`);
    }
  }

  return errors;
}

const sitemapUrl = `${baseUrl}/sitemap.xml`;
const { response: sitemapResponse, text: sitemapXml } = await fetchText(sitemapUrl);

if (!sitemapResponse.ok) {
  throw new Error(`Sitemap fetch failed: ${sitemapResponse.status} ${sitemapUrl}`);
}

const sitemapPaths = new Set(
  [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => stripSiteOrigin(match[1]))
    .filter((path) => path.startsWith("/"))
);

const failures = [];

for (const path of sitemapPaths) {
  const url = toLocalUrl(path);
  const { response, text } = await fetchText(url);

  if (!response.ok) {
    failures.push(`${path}: status ${response.status}`);
    continue;
  }

  const errors = pageChecks(path, text, sitemapPaths);

  for (const error of errors) {
    failures.push(`${path}: ${error}`);
  }
}

if (failures.length > 0) {
  console.error(`SEO validation failed for ${baseUrl}`);
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`SEO validation passed for ${sitemapPaths.size} sitemap URLs at ${baseUrl}`);

