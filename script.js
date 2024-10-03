let lastScrollY = window.scrollY;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY === 0) {
    // At the top of the page, show the default menu
    nav.classList.remove("hidden");
    nav.classList.remove("scrolled");
  } else if (currentScrollY < lastScrollY) {
    // Scrolling up
    nav.classList.remove("hidden");
    nav.classList.add("scrolled");
  } else {
    // Scrolling down
    nav.classList.add("hidden");
    nav.classList.remove("scrolled");
  }

  lastScrollY = currentScrollY;
});

// Mobile Menu

document.addEventListener("DOMContentLoaded", function () {
  function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.toggle("active");
    } else {
      console.error("Menu element not found");
    }
  }

  const menuButton = document.querySelector(".menu-button");
  if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
  }
});
