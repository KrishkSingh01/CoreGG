"use strict";

const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const { site, entries } = require(path.join(root, "js", "lore-data.js"));
const expectedAds = new Set([
  "index.html",
  "coreminecraft.html",
  "coreminecraftbedrock.html",
  "coreminecraftpro.html",
  "minecraft-bedrock-professional.html"
]);
const exactAdTag = "<script>(function(s){s.dataset.zone='12252123',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>";
const failures = [];
const checks = { htmlPages: 0, indexablePages: 0, jsonLdBlocks: 0, localReferences: 0, adEnabledPages: 0, imageElements: 0, imagesWithDimensions: 0, cssUrls: 0 };
const imagesMissingDimensions = [];

function fail(message) { failures.push(message); }
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((item) => {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) return walk(file);
    return [file];
  });
}
function matches(text, expression) { return [...text.matchAll(expression)]; }
function pageRouteToFile(route) {
  const decoded = decodeURIComponent(route.split(/[?#]/, 1)[0]);
  if (!decoded || decoded === "/") return path.join(root, "index.html");
  const direct = path.resolve(root, "." + decoded);
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) return direct;
  if (!path.extname(direct) && fs.existsSync(direct + ".html")) return direct + ".html";
  if (!path.extname(direct) && fs.existsSync(path.join(direct, "index.html"))) return path.join(direct, "index.html");
  return null;
}
function localReferencePath(pageFile, value) {
  const reference = value.trim().replace(/&amp;/g, "&");
  if (!reference || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(reference)) return null;
  const pathname = decodeURIComponent(reference.split(/[?#]/, 1)[0]);
  if (!pathname) return null;
  const target = pathname.startsWith("/")
    ? path.resolve(root, "." + pathname)
    : path.resolve(path.dirname(pageFile), pathname);
  if (fs.existsSync(target)) return target;
  if (!path.extname(target) && fs.existsSync(target + ".html")) return target + ".html";
  if (!path.extname(target) && fs.existsSync(path.join(target, "index.html"))) return path.join(target, "index.html");
  return target;
}

const files = walk(root);
const htmlFiles = files.filter((file) => file.toLowerCase().endsWith(".html"));
const htmlByName = new Map(htmlFiles.map((file) => [path.relative(root, file).replace(/\\/g, "/"), file]));
const redirectTargets = new Set();
const redirectFile = path.join(root, "_redirects");
if (fs.existsSync(redirectFile)) {
  for (const line of fs.readFileSync(redirectFile, "utf8").split(/\r?\n/)) {
    const [source, destination] = line.trim().split(/\s+/);
    if (source && destination && !source.startsWith("#")) redirectTargets.add(destination.replace(/^\//, ""));
  }
}

const canonicals = new Set();
for (const file of htmlFiles) {
  const relative = path.relative(root, file).replace(/\\/g, "/");
  const html = fs.readFileSync(file, "utf8");
  checks.htmlPages += 1;

  const adMatches = matches(html, /<script>\(function\(s\)\{s\.dataset\.zone='12252123',s\.src='https:\/\/al5sm\.com\/tag\.min\.js'\}\)\(\[document\.documentElement, document\.body\]\.filter\(Boolean\)\.pop\(\)\.appendChild\(document\.createElement\('script'\)\)\)<\/script>/g);
  const shouldHaveAd = expectedAds.has(relative);
  if (shouldHaveAd) {
    checks.adEnabledPages += 1;
    if (adMatches.length !== 1 || !html.includes(exactAdTag)) fail(`${relative}: expected the exact ad tag once`);
  } else if (adMatches.length !== 0 || html.includes("al5sm.com/tag.min.js")) {
    fail(`${relative}: ad tag must not be present`);
  }

  if (/^google[0-9a-f]+\.html$/i.test(path.basename(file))) continue;
  checks.indexablePages += 1;
  const head = (html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i) || [])[1] || "";
  if (!/^\s*<!doctype\s+html\b/i.test(html)) fail(`${relative}: missing HTML5 doctype`);
  if (!/<html\b[^>]*\blang\s*=\s*['"]?en(?:['"\s>])/i.test(html)) fail(`${relative}: missing lang="en"`);
  if (matches(head, /<title\b[^>]*>[\s\S]*?<\/title>/gi).length !== 1) fail(`${relative}: expected one title in head`);
  if (matches(head, /<meta\b[^>]*\bname\s*=\s*['"]description['"][^>]*>/gi).length !== 1) fail(`${relative}: expected one meta description`);
  if (matches(head, /<meta\b[^>]*\bname\s*=\s*['"]robots['"][^>]*>/gi).length !== 1 || /\bnoindex\b/i.test(head)) fail(`${relative}: expected one indexable robots directive`);
  const canonicalMatches = matches(head, /<link\b[^>]*\brel\s*=\s*['"]canonical['"][^>]*\bhref\s*=\s*['"]([^'"]+)['"][^>]*>/gi);
  if (canonicalMatches.length !== 1) fail(`${relative}: expected one canonical URL`);
  else {
    const canonical = canonicalMatches[0][1];
    if (canonicals.has(canonical)) fail(`${relative}: duplicate canonical ${canonical}`);
    canonicals.add(canonical);
  }
  if (matches(html, /<h1\b/gi).length !== 1) fail(`${relative}: expected exactly one H1`);
  if (matches(html, /<main\b/gi).length !== 1) fail(`${relative}: expected exactly one main landmark`);
  const headingLevels = matches(html, /<h([1-6])\b[^>]*>/gi).map((match) => Number(match[1]));
  for (let index = 1; index < headingLevels.length; index += 1) {
    if (headingLevels[index] > headingLevels[index - 1] + 1) fail(`${relative}: heading level jumps from H${headingLevels[index - 1]} to H${headingLevels[index]}`);
  }
  for (const img of matches(html, /<img\b(?:(?:"[^"]*")|(?:'[^']*')|[^'">])*>/gi)) {
    checks.imageElements += 1;
    if (!/\balt\s*=/i.test(img[0])) fail(`${relative}: image is missing alt text`);
    if (/\bwidth\s*=/i.test(img[0]) && /\bheight\s*=/i.test(img[0])) checks.imagesWithDimensions += 1;
    else imagesMissingDimensions.push(`${relative}: ${img[0].slice(0, 150)}`);
  }

  for (const block of matches(html, /<script\b[^>]*\btype\s*=\s*['"]application\/ld\+json['"][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(block[1]); checks.jsonLdBlocks += 1; }
    catch { fail(`${relative}: invalid JSON-LD block`); }
  }

  for (const tag of matches(html, /<(?:a|area|img|script|link|source|video|audio|iframe)\b[^>]*>/gi)) {
    const attribute = /\b(?:href|src|poster)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi;
    for (const ref of matches(tag[0], attribute)) {
      const value = ref[1] || ref[2] || ref[3] || "";
      const target = localReferencePath(file, value);
      if (!target) continue;
      checks.localReferences += 1;
      if (fs.existsSync(target)) continue;
      const relativeTarget = path.relative(root, target).replace(/\\/g, "/");
      if (!redirectTargets.has(relativeTarget)) fail(`${relative}: missing local reference ${value}`);
    }
  }

  const ids = new Set(matches(html, /\bid\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))/gi).map((match) => match[1] || match[2] || match[3]));
  for (const anchor of matches(html, /<a\b[^>]*\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))[^>]*>/gi)) {
    const href = anchor[1] || anchor[2] || anchor[3] || "";
    const hash = href.indexOf("#");
    if (hash < 0) continue;
    const fragment = decodeURIComponent(href.slice(hash + 1));
    if (!fragment || /^(?:character=|materials$|builds$)/i.test(fragment)) continue;
    const pathPart = href.slice(0, hash);
    const target = pathPart ? localReferencePath(file, pathPart) : file;
    if (!target || !fs.existsSync(target) || !target.toLowerCase().endsWith(".html")) continue;
    const targetHtml = target === file ? html : fs.readFileSync(target, "utf8");
    const escapedId = fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (!new RegExp(`\\b(?:id|name)\\s*=\\s*(['"])${escapedId}\\1`, "i").test(targetHtml)) fail(`${relative}: missing fragment target ${href}`);
  }
}

for (const file of files.filter((item) => item.toLowerCase().endsWith(".css"))) {
  const css = fs.readFileSync(file, "utf8");
  for (const match of matches(css, /url\(\s*(['"]?)(.*?)\1\s*\)/gi)) {
    const value = match[2].trim();
    if (!value || /^var\(/i.test(value)) continue;
    const target = localReferencePath(file, value);
    if (!target) continue;
    checks.cssUrls += 1;
    if (!fs.existsSync(target)) fail(`${path.relative(root, file)}: missing CSS asset ${value}`);
  }
}

for (const file of files.filter((item) => item.toLowerCase().endsWith(".json"))) {
  try { JSON.parse(fs.readFileSync(file, "utf8")); }
  catch { fail(`${path.relative(root, file)}: invalid JSON`); }
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
if (!/<urlset\b[^>]*xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/i.test(sitemap)) fail("sitemap.xml: missing sitemap namespace");
const sitemapUrls = matches(sitemap, /<loc>([^<]+)<\/loc>/g).map((match) => match[1].trim());
const sitemapSet = new Set(sitemapUrls);
if (sitemapSet.size !== sitemapUrls.length) fail("sitemap.xml: duplicate loc values");
if (sitemapUrls.length !== canonicals.size) fail(`sitemap.xml: expected ${canonicals.size} URLs, found ${sitemapUrls.length}`);
for (const canonical of canonicals) if (!sitemapSet.has(canonical)) fail(`sitemap.xml: missing canonical ${canonical}`);
for (const url of sitemapUrls) {
  if (!url.startsWith(site.baseUrl)) { fail(`sitemap.xml: URL outside ${site.baseUrl}: ${url}`); continue; }
  const file = pageRouteToFile(url.slice(site.baseUrl.length));
  if (!file || !htmlByName.has(path.relative(root, file).replace(/\\/g, "/"))) fail(`sitemap.xml: target does not resolve to HTML: ${url}`);
}
if (entries.length !== 198) fail(`Lore data: expected 198 entries, found ${entries.length}`);
const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
if (!/^User-agent:\s*\*\s*$/mi.test(robots) || !/^Allow:\s*\/\s*$/mi.test(robots)) fail("robots.txt: public crawl allow rules are missing");
if (!new RegExp(`^Sitemap:\\s*${site.baseUrl.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}/sitemap\\.xml\\s*$`, "mi").test(robots)) fail("robots.txt: sitemap directive does not match the site");
if (expectedAds.size !== checks.adEnabledPages) fail("Ad pages: expected ad tag set does not match the five authorized pages");
if (!htmlByName.has("coregenshin.html") || !htmlByName.has("coregenshin-builds.html")) fail("CoreGenshin header pages are missing");
for (const relative of ["coregenshin.html", "coregenshin-builds.html"]) {
  const html = fs.readFileSync(htmlByName.get(relative), "utf8");
  if (!/<header\b[^>]*class="cg-header"/.test(html) || !/<a\b[^>]*class="cg-brand"/.test(html) || !/<nav\b[^>]*class="cg-nav"/.test(html)) fail(`${relative}: shared CoreGenshin header is missing`);
}
if (!/class="lore-header"/.test(fs.readFileSync(path.join(root, "lore.html"), "utf8"))) fail("Lore page must keep its separate header");

const report = { ...checks, sitemapUrls: sitemapUrls.length, loreEntries: entries.length, errors: failures.length };
console.log(JSON.stringify(report, null, 2));
if (imagesMissingDimensions.length) {
  console.log(`Images without explicit width and height: ${imagesMissingDimensions.length}`);
  console.log(imagesMissingDimensions.slice(0, 30).join("\n"));
}
if (failures.length) {
  console.error(failures.slice(0, 80).join("\n"));
  process.exitCode = 1;
} else {
  console.log("Static site audit passed.");
}
