"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const script = fs.readFileSync(path.join(root, "js", "coregenshin-builds-nav.js"), "utf8");

function classList(initial = []) {
  const values = new Set(initial);
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

function element(id, startingClasses = []) {
  const listeners = {};
  return {
    id,
    attributes: { "aria-expanded": "false", "aria-label": "Open navigation", "aria-pressed": "false" },
    classList: classList(startingClasses),
    listeners,
    addEventListener(type, callback) { (listeners[type] ||= []).push(callback); },
    setAttribute(name, value) { this.attributes[name] = String(value); },
    getAttribute(name) { return this.attributes[name] ?? null; },
    focus() { this.focused = true; },
    scrollIntoView(options) { this.scrollOptions = options; },
    emit(type, event = {}) { for (const callback of listeners[type] || []) callback(event); },
    click() { this.emit("click", { target: this }); }
  };
}

function makePage(hash = "") {
  const toggle = element("cgMenuToggle");
  const nav = element("cgPrimaryNav");
  const materialsPanel = element("materialsExperience", ["hidden"]);
  const materialsButton = element("materialsNavBtn");
  const archiveIntro = element("archiveIntro");
  const elements = new Map([
    [toggle.id, toggle], [nav.id, nav], [materialsPanel.id, materialsPanel],
    [materialsButton.id, materialsButton], [archiveIntro.id, archiveIntro]
  ]);
  const docListeners = {};
  const windowListeners = {};
  const location = { hash, pathname: "/coregenshin-builds", search: "" };
  const calls = { opened: [], closed: 0 };
  const history = {
    lastUrl: "",
    replaceState(_state, _title, url) {
      this.lastUrl = url;
      location.hash = url.includes("#") ? url.slice(url.indexOf("#")) : "";
    }
  };
  materialsButton.addEventListener("click", () => {
    const shouldShow = materialsPanel.classList.contains("hidden");
    materialsPanel.classList.toggle("hidden", !shouldShow);
    materialsButton.setAttribute("aria-pressed", String(shouldShow));
  });
  const document = {
    documentElement: { classList: classList() },
    getElementById(id) { return elements.get(id) || null; },
    addEventListener(type, callback) { (docListeners[type] ||= []).push(callback); }
  };
  const window = {
    addEventListener(type, callback) { (windowListeners[type] ||= []).push(callback); },
    matchMedia() { return { matches: false }; }
  };
  const context = vm.createContext({
    document, window, navigator: {}, location, history, URL, decodeURIComponent,
    matchMedia: () => ({ matches: false }),
    characters: [{ name: "Columbina" }],
    openModal: (character) => calls.opened.push(character.name),
    closeModal: () => { calls.closed += 1; }
  });
  vm.runInContext(script, context, { filename: "coregenshin-builds-nav.js" });
  return { toggle, nav, materialsPanel, materialsButton, archiveIntro, document, windowListeners, docListeners, location, history, calls };
}

const menuPage = makePage();
assert.equal(menuPage.toggle.getAttribute("aria-expanded"), "false");
menuPage.toggle.click();
assert.equal(menuPage.toggle.getAttribute("aria-expanded"), "true");
assert.equal(menuPage.nav.classList.contains("is-open"), true);
menuPage.docListeners.keydown[0]({ key: "Escape" });
assert.equal(menuPage.nav.classList.contains("is-open"), false);
assert.equal(menuPage.toggle.focused, true);
menuPage.toggle.click();
menuPage.nav.emit("click", { target: { closest: (selector) => selector === "a" ? {} : null } });
assert.equal(menuPage.toggle.getAttribute("aria-expanded"), "false");

const materialsPage = makePage("#materials");
assert.equal(materialsPage.materialsPanel.classList.contains("hidden"), false);
assert.equal(materialsPage.materialsButton.getAttribute("aria-pressed"), "true");
assert.ok(materialsPage.history.lastUrl.endsWith("#materials"));
assert.ok(materialsPage.materialsPanel.scrollOptions);
materialsPage.location.hash = "#character=Columbina";
materialsPage.windowListeners.hashchange[0]();
assert.deepEqual(materialsPage.calls.opened, ["Columbina"]);
assert.equal(materialsPage.materialsPanel.classList.contains("hidden"), true);

console.log("CoreGenshin navigation smoke checks passed: menu, Escape, link close, materials route, and character hash.");
