"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const dataSource = fs.readFileSync(path.join(root, "js", "lore-data.js"), "utf8");
const appSource = fs.readFileSync(path.join(root, "js", "lore.js"), "utf8");
const dataWindow = {};
vm.runInNewContext(dataSource, { window: dataWindow }, { filename: "lore-data.js" });
const data = dataWindow.COREGG_LORE_DATA;
assert.ok(data && Array.isArray(data.entries), "browser script should publish archive data");
assert.equal(data.entries.length, 198, "the browser archive should contain all 198 records");
assert.equal(require(path.join(root, "js", "lore-data.js")).entries.length, data.entries.length,
  "the same data must remain available to Node page builders");

function makeClassList() {
  const values = new Set();
  return {
    add(value) { values.add(value); },
    remove(value) { values.delete(value); },
    contains(value) { return values.has(value); },
    toggle(value, force) {
      const next = force === undefined ? !values.has(value) : Boolean(force);
      if (next) values.add(value); else values.delete(value);
      return next;
    }
  };
}

function makeElement(id = "") {
  const listeners = {};
  return {
    id, listeners, attributes: {}, dataset: {}, style: { setProperty() {}, removeProperty() {} },
    classList: makeClassList(), children: [], hidden: false, value: "", textContent: "", innerHTML: "",
    addEventListener(type, callback) { (listeners[type] ||= []).push(callback); },
    emit(type, event = {}) { for (const callback of listeners[type] || []) callback(event); },
    click() { this.emit("click", { target: this, currentTarget: this }); },
    setAttribute(name, value) { this.attributes[name] = String(value); },
    getAttribute(name) { return this.attributes[name] ?? null; },
    appendChild(child) { this.children.push(child); return child; },
    append(...children) { this.children.push(...children); },
    prepend(child) { this.children.unshift(child); },
    insertBefore(child, before) { const index = this.children.indexOf(before); this.children.splice(index < 0 ? 0 : index, 0, child); },
    replaceChildren(...children) { this.children = children; },
    focus() { document.activeElement = this; },
    scrollIntoView() {},
    querySelector() { return null; },
    querySelectorAll() { return []; }
  };
}

const ids = [
  "lore-interface-picker", "lore-picker-cancel", "lore-interface-switch", "lore-regions",
  "lore-categories", "lore-cards", "lore-load-more", "lore-recent-grid", "lore-search",
  "lore-results-status", "lore-empty-state", "lore-live-region", "lore-progress-count",
  "lore-progress-detail", "lore-current-region", "lore-current-collection",
  "lore-archive-description", "lore-search-form", "lore-recent-button", "lore-random-button",
  "lore-clear-filters", "archive"
];
const elements = new Map(ids.map(id => [id, makeElement(id)]));
const document = {
  body: makeElement("body"), activeElement: null,
  getElementById(id) { return elements.get(id) || null; },
  querySelector() { return null; },
  createElement() { return makeElement(); }
};
const picker = elements.get("lore-interface-picker");
const firstChoice = makeElement("archive-choice");
firstChoice.setAttribute("data-interface-choice", "archive");
picker.querySelector = selector => selector === "[data-interface-choice]" ? firstChoice : null;
picker.querySelectorAll = selector => selector === "button:not([hidden])" ? [firstChoice] : [];

const regionButtons = [{ dataset: { region: data.regions[0].id }, setAttribute() {} }, { dataset: { region: "all" }, setAttribute() {} }];
const categoryButtons = [{ dataset: { category: data.categories[0].id }, setAttribute() {} }, { dataset: { category: "all" }, setAttribute() {} }];
elements.get("lore-regions").querySelectorAll = selector => selector === "[data-region]" ? regionButtons : [];
elements.get("lore-categories").querySelectorAll = selector => selector === "[data-category]" ? categoryButtons : [];
const siteShell = makeElement("site-shell");
document.querySelector = selector => selector === ".lore-site-shell" ? siteShell : null;

const localStorage = new Map();
const window = {
  COREGG_LORE_DATA: data,
  localStorage: { getItem(key) { return localStorage.get(key) || null; }, setItem(key, value) { localStorage.set(key, value); } },
  matchMedia() { return { matches: false }; },
  location: { search: "", href: "" }
};
const context = vm.createContext({ document, window, navigator: {}, URLSearchParams, Date });
vm.runInContext(appSource, context, { filename: "lore.js" });

assert.equal(elements.get("lore-cards").children.length, 24, "initial archive cards should render");
assert.equal(elements.get("lore-recent-grid").children.length, 4, "recent records should render");
assert.match(elements.get("lore-regions").innerHTML, /All regions/);
assert.match(elements.get("lore-categories").innerHTML, /All records/);
assert.equal(picker.hidden, false, "first visit should open the interface picker");

picker.emit("click", { target: { closest: selector => selector === "[data-interface-choice]" ? firstChoice : null } });
assert.equal(document.body.attributes["data-lore-interface"], "archive");
assert.equal(picker.hidden, true, "selecting an interface should close the picker");
elements.get("lore-interface-switch").click();
assert.equal(picker.hidden, false, "the Interface button should reopen the picker");

const regionButton = { dataset: { region: data.regions[0].id }, setAttribute() {} };
elements.get("lore-regions").emit("click", { target: { closest: selector => selector === "[data-region]" ? regionButton : null } });
assert.equal(elements.get("lore-current-region").textContent, data.regions[0].name);
assert.ok(elements.get("lore-cards").children.length > 0, "region selection should show records");

elements.get("lore-search").value = data.entries[0].title;
elements.get("lore-search").emit("input");
assert.ok(elements.get("lore-cards").children.length > 0, "search should keep matching records visible");
elements.get("lore-clear-filters").click();
assert.equal(elements.get("lore-cards").children.length, 24, "clear filters should restore the archive list");
elements.get("lore-load-more").click();
assert.equal(elements.get("lore-cards").children.length, 48, "show more should append the next page of cards");

const html = fs.readFileSync(path.join(root, "lore.html"), "utf8");
assert.ok(html.includes('<a href="./coregenshin.html">Home</a>') && fs.existsSync(path.join(root, "coregenshin.html")),
  "the Lore Home link should open the CoreGenshin home page");
const homePage = fs.readFileSync(path.join(root, "coregenshin.html"), "utf8");
const buildsPage = fs.readFileSync(path.join(root, "coregenshin-builds.html"), "utf8");
for (const [index, entry] of data.entries.entries()) {
  const folder = `lore-entries-${String(Math.floor(index / 66) + 1).padStart(2, "0")}`;
  const page = fs.readFileSync(path.join(root, folder, `${entry.slug}.html`), "utf8");
  assert.equal((page.match(/class="lore-reader-back" href="\.\.\/lore\.html#archive"/g) || []).length, 2,
    `${entry.slug} should have a top and bottom back-to-selection link`);
}
for (const [name, page] of [["CoreGenshin home", homePage], ["CoreGenshin builds", buildsPage]]) {
  assert.ok(page.includes("https://www.buymeacoffee.com/otaku_krishna"), `${name} header should include Support`);
  assert.ok(page.includes("https://www.instagram.com/otaku_krishna1/"), `${name} header should include Feedback`);
}
assert.match(fs.readFileSync(path.join(root, "css", "coregenshin-header.css"), "utf8"), /justify-content:\s*flex-end/,
  "CoreGenshin header navigation should align to the right");

console.log("Lore browser runtime checks passed: 198 records, archive render, interface picker, region/search filters, load more, Home target, and CoreGenshin header actions.");
