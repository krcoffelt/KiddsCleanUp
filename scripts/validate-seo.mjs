const baseUrl = (process.env.SEO_BASE_URL || "http://127.0.0.1:3007").replace(/\/$/, "");
const siteUrl = "https://kiddscleanup.com";
const allowedMissingFromSitemap = new Set(["/thank-you"]);
const priorityTargets = [
  ["demolition company kansas city", "/services/demolition", "kansas city demolition company"],
  ["residential demolition kansas city", "/services/residential", "residential demolition in kansas city"],
  ["commercial demolition kansas city", "/services/commercial", "commercial demolition"],
  ["house demolition kansas city", "/services/house-demolition", "kansas city house demolition"],
  ["interior demolition kansas city", "/services/interior-demolition", "kansas city interior demolition"],
  ["garage demolition kansas city", "/services/garage-demolition", "garage demolition in kansas city"],
  ["shed demolition kansas city", "/services/shed-demolition", "kansas city shed demolition"],
  ["deck removal kansas city", "/services/deck-removal", "kansas city deck removal"],
  ["concrete removal kansas city", "/services/concrete-removal", "concrete removal in kansas city"],
  ["junk removal kansas city", "/services/junk-removal", "kansas city junk removal"],
  ["furniture removal kansas city", "/services/furniture-removal", "furniture removal in kansas city"],
  ["mattress removal kansas city", "/services/mattress-removal", "mattress removal in kansas city"],
  ["trash removal kansas city", "/services/trash-removal", "trash removal in kansas city"],
  ["bulk trash pickup kansas city", "/services/bulk-trash-pickup", "bulk trash pickup in kansas city"],
  ["cleanout services kansas city", "/services/cleanouts", "kansas city cleanout services"],
  ["basement cleanout kansas city", "/services/basement-cleanouts", "kansas city basement cleanout"],
  ["hoarder cleanout kansas city", "/services/hoarder-cleanouts", "kansas city hoarder cleanout services"],
  ["water mitigation kansas city", "/services/water-mitigation", "kansas city water mitigation"],
  ["burst pipe cleanup kansas city", "/services/burst-pipe-cleanup", "burst pipe cleanup in kansas city"],
  ["lead safe demolition kansas city", "/services/lead-safe", "kansas city lead-safe removal"],
  ["junk removal overland park", "/junk-removal/overland-park", "overland park, ks junk removal"],
  ["junk removal olathe", "/junk-removal/olathe", "olathe, ks junk removal"],
  ["junk removal shawnee ks", "/junk-removal/shawnee-ks", "shawnee, ks junk removal"],
  ["junk removal lenexa", "/junk-removal/lenexa", "lenexa, ks junk removal"],
  ["demolition overland park", "/demolition/overland-park", "overland park, ks demolition"],
  ["demolition olathe", "/demolition/olathe", "olathe, ks demolition"],
  ["demolition shawnee ks", "/demolition/shawnee-ks", "shawnee, ks demolition"],
  ["demolition lenexa", "/demolition/lenexa", "lenexa, ks demolition"],
];
const requiredLeadSources = [
  "https://www.epa.gov/lead/lead-renovation-repair-and-painting-program",
  "https://www.epa.gov/large-scale-residential-demolition/lead-based-paint-and-demolition",
];

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
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1];
  const h1s = [...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/g)];
  const jsonLdCount = (html.match(/application\/ld\+json/g) || []).length;

  if (!title || decodeHtml(title).trim().length < 10) {
    errors.push("missing or weak title");
  } else if (decodeHtml(title).trim().length > 65) {
    errors.push(`title exceeds 65 characters: ${decodeHtml(title).trim().length}`);
  }

  if (!description || decodeHtml(description).trim().length < 40) {
    errors.push("missing or weak meta description");
  } else if (decodeHtml(description).trim().length > 165) {
    errors.push(`meta description exceeds 165 characters: ${decodeHtml(description).trim().length}`);
  }

  if (!canonical) {
    errors.push("missing canonical");
  }

  if (canonical && !canonical.startsWith(siteUrl)) {
    errors.push(`canonical must use ${siteUrl}: ${canonical}`);
  }

  if (canonical && stripSiteOrigin(canonical) !== path) {
    errors.push(`canonical mismatch: ${canonical}`);
  }

  if (robots && /noindex/i.test(robots)) {
    errors.push(`unexpected noindex directive: ${robots}`);
  }

  if (h1s.length !== 1) {
    errors.push(`expected one h1, found ${h1s.length}`);
  }

  if (jsonLdCount === 0) {
    errors.push("missing JSON-LD");
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try {
      JSON.parse(match[1]);
    } catch {
      errors.push("invalid JSON-LD");
    }
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

const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const sitemapPathList = sitemapUrls.map(stripSiteOrigin).filter((path) => path.startsWith("/"));
const sitemapPaths = new Set(sitemapPathList);

const failures = [];
const pageHtml = new Map();
const inboundLinks = new Map(sitemapPathList.map((path) => [path, 0]));
const titles = new Map();

if (sitemapUrls.some((url) => !url.startsWith(siteUrl))) {
  failures.push(`sitemap URLs must use ${siteUrl}`);
}

if (sitemapPathList.length !== sitemapPaths.size) {
  failures.push("sitemap contains duplicate URLs");
}

const { response: robotsResponse, text: robotsText } = await fetchText(`${baseUrl}/robots.txt`);

if (!robotsResponse.ok) {
  failures.push(`robots.txt status ${robotsResponse.status}`);
} else if (!robotsText.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
  failures.push("robots.txt does not advertise the canonical sitemap URL");
}

for (const path of sitemapPaths) {
  const url = toLocalUrl(path);
  const { response, text } = await fetchText(url);

  if (!response.ok) {
    failures.push(`${path}: status ${response.status}`);
    continue;
  }

  pageHtml.set(path, text);

  const title = decodeHtml(text.match(/<title>(.*?)<\/title>/s)?.[1] ?? "").trim().toLowerCase();
  if (title) {
    titles.set(title, [...(titles.get(title) ?? []), path]);
  }

  for (const link of new Set(extractLinks(text))) {
    if (inboundLinks.has(link)) {
      inboundLinks.set(link, inboundLinks.get(link) + 1);
    }
  }

  const errors = pageChecks(path, text, sitemapPaths);

  for (const error of errors) {
    failures.push(`${path}: ${error}`);
  }
}

for (const [title, paths] of titles) {
  if (paths.length > 1) {
    failures.push(`duplicate title "${title}": ${paths.join(", ")}`);
  }
}

for (const [path, count] of inboundLinks) {
  if (path !== "/" && count < 2) {
    failures.push(`${path}: weak internal-link support (${count} linking pages)`);
  }
}

for (const [query, path, answerText] of priorityTargets) {
  const html = pageHtml.get(path);
  if (!html) {
    failures.push(`priority query "${query}" maps to missing sitemap page: ${path}`);
    continue;
  }

  const visibleText = decodeHtml(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  if (!visibleText.includes(answerText)) {
    failures.push(`priority query "${query}" lacks answer-ready text "${answerText}" on ${path}`);
  }
}

const leadSafeHtml = pageHtml.get("/services/lead-safe") ?? "";
for (const source of requiredLeadSources) {
  if (!leadSafeHtml.includes(`href="${source}"`)) {
    failures.push(`/services/lead-safe: missing primary source citation ${source}`);
  }
}

if (failures.length > 0) {
  console.error(`SEO validation failed for ${baseUrl}`);
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`SEO validation passed for ${sitemapPaths.size} sitemap URLs and ${priorityTargets.length} priority query mappings at ${baseUrl}`);
