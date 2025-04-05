document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
  
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("open");
      const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
      menuToggle.setAttribute("aria-expanded", !expanded);
    });
  
    // Smooth Scroll for Nav Links
    document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
  
        // Close mobile nav after clicking
        navbar.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  
    // Dynamic Year in Footer
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
  