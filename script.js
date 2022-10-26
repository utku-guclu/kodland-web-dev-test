const toggle = document.querySelector(".burger");
const nav = document.querySelector(".pop-it-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("nav");
});
