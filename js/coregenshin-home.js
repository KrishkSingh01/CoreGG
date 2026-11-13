(function () {
  "use strict";

  const root = document.documentElement;
  root.classList.add("cg-js");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lowPowerDevice = window.matchMedia("(max-width: 720px)").matches
    || (typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4)
    || Boolean(navigator.connection && navigator.connection.saveData);

  if (lowPowerDevice || reducedMotion) root.classList.add("cg-lite-fx");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      registrations.forEach(function (registration) {
        const worker = registration.active || registration.waiting || registration.installing;
        if (!worker) return;
        try {
          const workerUrl = new URL(worker.scriptURL);
          if (workerUrl.origin === location.origin && workerUrl.pathname.endsWith("/sw.js")) {
            registration.unregister();
          }
        } catch (error) {
          // Ignore registrations with an unreadable script URL.
        }
      });
    }).catch(function () {});
  }

  const menuToggle = document.getElementById("cgMenuToggle");
  const nav = document.getElementById("cgPrimaryNav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.classList.toggle("is-open", open);
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.focus();
      }
    });
  }

  if ("IntersectionObserver" in window && !reducedMotion) {
    root.classList.add("has-reveal");
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.08 });
    document.querySelectorAll("[data-reveal]").forEach(function (item) {
      revealObserver.observe(item);
    });

    const hero = document.querySelector(".cg-hero");
    if (hero) {
      const heroObserver = new IntersectionObserver(function (entries) {
        hero.classList.toggle("is-in-view", entries[0].isIntersecting);
      }, { threshold: 0.05 });
      heroObserver.observe(hero);
    }
  } else {
    document.querySelectorAll("[data-reveal]").forEach(function (item) {
      item.classList.add("is-visible");
    });
    const hero = document.querySelector(".cg-hero");
    if (hero && !reducedMotion && !lowPowerDevice) hero.classList.add("is-in-view");
  }

  const featuredNames = ["Columbina", "Furina", "Raiden Shogun"];
  const elementColors = {
    Pyro: "236, 111, 87",
    Hydro: "100, 217, 239",
    Anemo: "120, 214, 186",
    Geo: "233, 188, 91",
    Electro: "192, 154, 255",
    Dendro: "148, 210, 124",
    Cryo: "155, 216, 255"
  };

  const elementPicker = document.getElementById("elementPicker");
  const elementPanel = document.getElementById("elementPanel");
  const elementHeading = document.getElementById("elementHeading");
  const elementCount = document.getElementById("elementCount");
  const characterList = document.getElementById("elementCharacterList");
  const showcaseImage = document.getElementById("showcaseImage");
  const showcaseFallback = document.getElementById("showcaseFallback");
  const showcaseName = document.getElementById("showcaseName");
  const showcaseElement = document.getElementById("showcaseElement");
  const showcaseRole = document.getElementById("showcaseRole");
  const showcasePosition = document.getElementById("showcasePosition");
  const showcaseBuildLink = document.getElementById("showcaseBuildLink");
  const previousButton = document.getElementById("showcasePrevious");
  const nextButton = document.getElementById("showcaseNext");
  const swipeArea = document.getElementById("showcaseSwipeArea");

  document.querySelectorAll(".cg-element-choice img, .cg-showcase-element").forEach(function (icon) {
    icon.addEventListener("error", function () {
      icon.hidden = true;
    }, { once: true });
  });

  // This small home-page index is projected from the build roster; full build data stays in coregenshin.js.
  function buildHref(characterName) {
    return "./coregenshin-builds.html#character=" + encodeURIComponent(characterName);
  }

  function renderCharactersFor(element, roster) {
    const matches = roster.filter(function (character) {
      return character.element === element;
    });
    elementHeading.textContent = element + " characters";
    elementCount.textContent = matches.length + (matches.length === 1 ? " guide" : " guides");
    elementPanel.dataset.element = element;
    elementPanel.style.setProperty("--element-rgb", elementColors[element] || "204, 165, 116");
    root.style.setProperty("--cg-element-rgb", elementColors[element] || "204, 165, 116");
    characterList.replaceChildren();

    if (matches.length === 0) {
      const empty = document.createElement("p");
      empty.className = "cg-empty-state";
      empty.textContent = "There are no character profiles for " + element + " in the archive yet.";
      characterList.appendChild(empty);
      return;
    }

    matches.forEach(function (character) {
      const link = document.createElement("a");
      link.className = "cg-character-chip";
      link.href = buildHref(character.name);

      const name = document.createElement("span");
      name.textContent = character.name;
      const role = document.createElement("small");
      role.textContent = character.role || (character.rarity + "-star");
      link.append(name, role);
      characterList.appendChild(link);
    });
  }

  function setupShowcase(roster) {
    const featured = featuredNames.map(function (name) {
      return roster.find(function (character) { return character.name === name; });
    }).filter(Boolean);
    const characterChoices = featured.length ? featured : roster.slice(0, 3);
    let currentIndex = 0;

    if (!characterChoices.length) {
      showcaseFallback.hidden = false;
      showcaseFallback.textContent = "The character showcase will appear when profiles are available.";
      previousButton.disabled = true;
      nextButton.disabled = true;
      return;
    }

    function showCharacter(index) {
      currentIndex = (index + characterChoices.length) % characterChoices.length;
      const character = characterChoices[currentIndex];
      showcaseName.textContent = character.name;
      showcaseElement.textContent = character.element + " · " + character.rarity + "-star";
      showcaseRole.textContent = character.role || "Open the profile for build details.";
      showcasePosition.textContent = String(currentIndex + 1).padStart(2, "0")
        + " / " + String(characterChoices.length).padStart(2, "0");
      showcaseBuildLink.href = buildHref(character.name);
      showcaseFallback.hidden = true;
      showcaseImage.classList.add("is-changing");
      showcaseImage.classList.remove("is-missing");
      showcaseImage.hidden = false;
      showcaseImage.alt = character.name + " character artwork";

      const imageReady = function () {
        showcaseImage.classList.remove("is-changing");
        showcaseFallback.hidden = true;
        showcaseImage.hidden = false;
      };
      const imageFailed = function () {
        showcaseImage.classList.remove("is-changing");
        showcaseImage.classList.add("is-missing");
        showcaseFallback.hidden = false;
      };
      showcaseImage.addEventListener("load", imageReady, { once: true });
      showcaseImage.addEventListener("error", imageFailed, { once: true });
      if (showcaseImage.src !== new URL(character.image, location.href).href) {
        showcaseImage.src = character.image;
      } else if (showcaseImage.complete && showcaseImage.naturalWidth > 0) {
        imageReady();
      } else if (showcaseImage.complete) {
        imageFailed();
      }
    }

    previousButton.addEventListener("click", function () { showCharacter(currentIndex - 1); });
    nextButton.addEventListener("click", function () { showCharacter(currentIndex + 1); });

    let pointerStart = null;
    swipeArea.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      pointerStart = { x: event.clientX, y: event.clientY };
    });
    swipeArea.addEventListener("pointerup", function (event) {
      if (!pointerStart) return;
      const deltaX = event.clientX - pointerStart.x;
      const deltaY = event.clientY - pointerStart.y;
      pointerStart = null;
      if (Math.abs(deltaX) < 42 || Math.abs(deltaY) > 70) return;
      showCharacter(currentIndex + (deltaX < 0 ? 1 : -1));
    });
    swipeArea.addEventListener("pointercancel", function () { pointerStart = null; });
    showCharacter(0);
  }

  if (elementPicker && elementPanel && characterList) {
    const roster = window.CoreGenshinHomeRoster;

    if (Array.isArray(roster) && roster.length) {
        renderCharactersFor("Hydro", roster);
        setupShowcase(roster);
        elementPicker.addEventListener("click", function (event) {
          const button = event.target.closest("[data-element]");
          if (!button) return;
          const element = button.dataset.element;
          elementPicker.querySelectorAll("[data-element]").forEach(function (choice) {
            const selected = choice === button;
            choice.classList.toggle("is-selected", selected);
            choice.setAttribute("aria-pressed", String(selected));
          });
          renderCharactersFor(element, roster);
        });
    } else {
      elementHeading.textContent = "Character archive";
      elementCount.textContent = "Unavailable";
      characterList.replaceChildren();
      const empty = document.createElement("p");
      empty.className = "cg-empty-state";
      empty.textContent = "Open Builds to browse the full character archive.";
      characterList.appendChild(empty);
      previousButton.disabled = true;
      nextButton.disabled = true;
    }
  }
}());
