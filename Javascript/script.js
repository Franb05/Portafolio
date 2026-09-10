document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector("#menu-toggle");
  const mainNav = document.querySelector("#main-nav");

  hamburgerButton.addEventListener("click", () => {
    const isExpanded = hamburgerButton.getAttribute("aria-expanded") === "true";

    hamburgerButton.setAttribute("aria-expanded", !isExpanded);
    mainNav.classList.toggle("nav-open");
  });

  // Cierra el menú al hacer clic fuera de él
  document.addEventListener("click", (event) => {
    if (
      !mainNav.contains(event.target) &&
      !hamburgerButton.contains(event.target) &&
      mainNav.classList.contains("nav-open")
    ) {
      hamburgerButton.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("nav-open");
    }
  });

  // Cierra el menú al pasar a una pantalla grande
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      mainNav.classList.remove("nav-open");
      hamburgerButton.setAttribute("aria-expanded", "false");
    }
  });
});
