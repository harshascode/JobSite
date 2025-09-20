document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryMenu = document.getElementById("primary-menu");

  if (menuToggle && primaryMenu) {
    menuToggle.addEventListener("click", function () {
      primaryMenu.classList.toggle("active");
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
    });
  }

  // Back to Top button functionality
  const backToTopButton = document.querySelector(".back-to-top");

  if (backToTopButton) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        // Show button after scrolling 300px
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });

    backToTopButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});