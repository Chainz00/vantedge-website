const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", () => {
    const note = contactForm.querySelector(".form-note");
    if (note) {
      note.textContent = "Opening your email client with the message details.";
    }
  });
}

const pinChatbaseWidget = () => {
  const placements = [
    ["chatbase-bubble-button", "24px"],
    ["chatbase-message-bubbles", "24px"],
    ["chatbase-bubble-window", "92px"]
  ];

  placements.forEach(([id, bottom]) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.style.position = "fixed";
    element.style.right = "24px";
    element.style.bottom = bottom;
    element.style.zIndex = "2147483647";
  });
};

window.addEventListener("load", () => {
  pinChatbaseWidget();
  window.setInterval(pinChatbaseWidget, 1200);
});
