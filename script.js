const hamburger = document.querySelector("#menuicon");
const nav = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
