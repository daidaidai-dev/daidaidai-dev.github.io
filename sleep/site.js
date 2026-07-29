(() => {
  const root = document.documentElement;
  const storageKey = "nemumoko-theme";
  const themeButton = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const deviceButtons = document.querySelectorAll("[data-device]");
  const screenshotGrid = document.querySelector(".screenshot-grid");
  const screenshotImages = document.querySelectorAll(".screenshot-card img[data-iphone][data-ipad]");

  const preferredTheme = () => {
    const saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const applyTheme = (theme, persist = false) => {
    root.dataset.theme = theme;
    if (persist) {
      localStorage.setItem(storageKey, theme);
    }

    if (themeButton && themeIcon) {
      const nextThemeLabel = theme === "dark" ? "ライトモード" : "ダークモード";
      themeButton.setAttribute("aria-label", `${nextThemeLabel}に切り替える`);
      themeIcon.textContent = theme === "dark" ? "☀" : "☾";
    }
  };

  applyTheme(preferredTheme());

  themeButton?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
  });

  const closeMenu = () => {
    if (!navToggle || !siteNav) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "メニューを開く");
    siteNav.classList.remove("is-open");
  };

  navToggle?.addEventListener("click", () => {
    if (!siteNav) return;
    const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(willOpen));
    navToggle.setAttribute("aria-label", willOpen ? "メニューを閉じる" : "メニューを開く");
    siteNav.classList.toggle("is-open", willOpen);
  });

  siteNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  const switchScreenshots = (device) => {
    if (!screenshotGrid || (device !== "iphone" && device !== "ipad")) return;
    screenshotGrid.classList.add("is-switching");

    screenshotImages.forEach((image) => {
      const source = image.dataset[device];
      if (source) {
        image.src = source;
        image.width = device === "ipad" ? 960 : 720;
        image.height = device === "ipad" ? 1280 : 1564;
      }
    });

    screenshotGrid.dataset.currentDevice = device;
    deviceButtons.forEach((button) => {
      const isActive = button.dataset.device === device;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    window.setTimeout(() => {
      screenshotGrid.classList.remove("is-switching");
    }, 160);
  };

  deviceButtons.forEach((button) => {
    button.addEventListener("click", () => switchScreenshots(button.dataset.device));
  });

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }
})();
