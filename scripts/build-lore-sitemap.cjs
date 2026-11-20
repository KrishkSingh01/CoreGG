"use strict";
const fs = require("node:fs");
const path = require("node:path");
const root = fs.existsSync(path.join(__dirname, "js", "lore-data.js")) ? __dirname : path.resolve(__dirname, "..");
const data = require(path.join(root, "js/lore-data.js"));
const baseUrl = data.site.baseUrl;
const xmlPath = path.join(root, "sitemap.xml");
const staticEntries = new Map();
const fileDate = (relative) => {
  const file = path.join(root, relative);
  if (!fs.existsSync(file)) throw new Error(`Sitemap target is missing: ${relative}`);
  return new Date(fs.statSync(file).mtimeMs).toISOString().slice(0, 10);
};
const staticPages = [
  { file: "index.html", route: "/", priority: 1.0 },
  { file: "coregenshin.html", route: "/coregenshin", priority: 0.8 },
  { file: "coregenshin-builds.html", route: "/coregenshin-builds", priority: 0.8 },
  { file: "coreminecraft.html", route: "/coreminecraft", priority: 0.6 },
  { file: "coreminecraftbedrock.html", route: "/coreminecraftbedrock", priority: 0.6 },
  { file: "coreminecraftpro.html", route: "/coreminecraftpro", priority: 0.6 },
  { file: "minecraft-bedrock-professional.html", route: "/minecraft-bedrock-professional", priority: 0.6 },
  { file: "privacy.html", route: "/privacy", priority: 0.4 }
];
for (const page of staticPages) {
  const loc = baseUrl + page.route;
  staticEntries.set(loc, { loc, lastmod: fileDate(page.file), changefreq: "monthly", priority: page.priority });
}
for (let index = 0; index < data.entries.length; index += 1) {
  const entry = data.entries[index];
  const folder = "lore-entries-" + String(Math.floor(index / 66) + 1).padStart(2, "0");
  const relativePath = path.join(folder, entry.slug + ".html");
  const loc = baseUrl + "/" + relativePath.split(path.sep).join("/");
  staticEntries.set(loc, {
    loc,
    lastmod: fileDate(relativePath),
    changefreq: "monthly",
    priority: 0.5
  });
}
staticEntries.set(`${baseUrl}/lore`, { loc: `${baseUrl}/lore`, lastmod: fileDate("lore.html"), changefreq: "monthly", priority: 0.8 });
const entries = [...staticEntries.values()].sort((a, b) => b.priority - a.priority || b.lastmod.localeCompare(a.lastmod) || a.loc.localeCompare(b.loc));
if (entries.length > 50000) throw new Error("This sitemap needs an index and multiple child files.");
const xmlEscape = (value) => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
const instruction = `<!-- Google Search Console submission steps:\n1. Select the https://coregg.pages.dev/ property in Google Search Console.\n2. Open Indexing > Sitemaps.\n3. Enter sitemap.xml and click Submit.\n-->`;
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n${instruction}\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map((entry) => `  <url>\n    <loc>${xmlEscape(entry.loc)}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority.toFixed(1)}</priority>\n  </url>`).join("\n")}\n</urlset>\n`;
fs.writeFileSync(xmlPath, xml, "utf8");
fs.writeFileSync(path.join(root, "sitemap.txt"), entries.map((entry) => entry.loc).join("\n") + "\n", "utf8");
console.log(JSON.stringify({ totalUrls: entries.length, loreEntries: data.entries.length, outputBytes: Buffer.byteLength(xml), first: entries.slice(0, 4), last: entries.at(-1) }, null, 2));
