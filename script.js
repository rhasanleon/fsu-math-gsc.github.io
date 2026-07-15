const menuButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.alert(
      "Add the official FSU Mathematics GSC Instagram URL to this link in index.html."
    );
  });
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

/* ============================================================
   APPEARANCE: LIGHT / DARK / SYSTEM
   ============================================================ */

const themeSelectors = [...document.querySelectorAll("#theme-select")];
const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
const validThemes = new Set(["system", "light", "dark"]);

function readThemePreference() {
  try {
    const stored = localStorage.getItem("gsc-theme");
    return validThemes.has(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

let selectedTheme = readThemePreference();

function resolveTheme(theme) {
  if (theme === "system") {
    return systemDarkMode.matches ? "dark" : "light";
  }

  return theme;
}

function updateThemeColor(resolvedTheme) {
  const themeColor = document.querySelector('meta[name="theme-color"]');

  if (themeColor) {
    themeColor.content = resolvedTheme === "dark" ? "#151214" : "#782f40";
  }
}

function applyTheme(theme, animate = false) {
  const normalizedTheme = validThemes.has(theme) ? theme : "system";
  const resolvedTheme = resolveTheme(normalizedTheme);

  selectedTheme = normalizedTheme;

  if (animate) {
    document.documentElement.classList.add("theme-transition");

    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 260);
  }

  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.dataset.themePreference = normalizedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;

  try {
    localStorage.setItem("gsc-theme", normalizedTheme);
  } catch {
    // The theme still works for the current page if storage is unavailable.
  }

  themeSelectors.forEach((selector) => {
    selector.value = normalizedTheme;
  });

  updateThemeColor(resolvedTheme);
}

applyTheme(selectedTheme);

themeSelectors.forEach((selector) => {
  selector.addEventListener("change", (event) => {
    applyTheme(event.target.value, true);
  });
});

function handleSystemAppearanceChange() {
  if (selectedTheme === "system") {
    applyTheme("system", true);
  }
}

if (typeof systemDarkMode.addEventListener === "function") {
  systemDarkMode.addEventListener("change", handleSystemAppearanceChange);
} else if (typeof systemDarkMode.addListener === "function") {
  systemDarkMode.addListener(handleSystemAppearanceChange);
}
