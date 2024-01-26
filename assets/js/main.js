/*SEEN*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/* REMOVE MENU MOBILE*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(
  ".home__data, .about__img, .skills__subtitle,.my_resume, .skills__text",
  {}
);
sr.reveal(
  ".home__img, .about__subtitle, .about__text,.resume__img, .skills__img",
  { delay: 200 }
);
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 100 });

function redirectToEmail() {
  // Replace 'mailto:' with the recipient email address
  var email = "recipient@example.com";

  // Create a mailto link
  var mailtoLink = "mailto:" + email;

  // Open the default email client with the mailto link
  window.location.href = mailtoLink;
}
