document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  // Toggle nav menu
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "bx bx-x" : "bx bx-menu");
  });

  // Close menu on link click
  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "bx bx-menu");
  });

  // ScrollReveal configuration
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  // Apply ScrollReveal to various elements
  ScrollReveal().reveal(".container__left h1", scrollRevealOption);
  ScrollReveal().reveal(".container__left .container__btn", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".container__right h4", {
    ...scrollRevealOption,
    delay: 2000,
  });
  ScrollReveal().reveal(".container__right h2", {
    ...scrollRevealOption,
    delay: 2500,
  });
  ScrollReveal().reveal(".container__right h3", {
    ...scrollRevealOption,
    delay: 3000,
  });
  ScrollReveal().reveal(".container__right p", {
    ...scrollRevealOption,
    delay: 3500,
  });
  ScrollReveal().reveal(".container__right .tent-1", {
    duration: 1000,
    delay: 4000,
  });
  ScrollReveal().reveal(".container__right .tent-2", {
    duration: 1000,
    delay: 4500,
  });
 
});
