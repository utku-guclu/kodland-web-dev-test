// burger
const burger = document.querySelector(".burger");
const nav = document.querySelector(".pop-it-nav");
const burgerBar = document.querySelectorAll(".bar");

burger.addEventListener("click", () => {
  burgerBar.forEach((bar) => {
    bar.classList.toggle("change");
  });
  nav.classList.toggle("nav");
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("footer").style.bottom = "-100px";
  } else {
    document.getElementById("footer").style.bottom = "0";
  }
  prevScrollpos = currentScrollPos;
};

// media queries
const carouselItem = document.querySelectorAll(".carousel-item");

function toggleStyle(x) {
  carouselItem.forEach((item) => {
    if (x.matches) {
      // If media query matches
      item.classList.remove("content");
    } else {
      item.classList.add("content");
    }
  });
}

// toggle style
const smallScreen = window.matchMedia("(max-width: 800px)");
toggleStyle(smallScreen); // Call listener function at run time
smallScreen.addEventListener("change", toggleStyle); // Attach listener function on state changes

// carousel
const slides = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-button-prev");
const nextBtn = document.querySelector(".carousel-button-next");

let position = 0;
let currentSlide = 0;

const nextSlide = () => {
  if (position === 0) {
    position = slides.length - 1;
  } else {
    position--;
  }
  carousel();
};

const prevSlide = () => {
  if (position === 0) {
    position = slides.length - 1;
  } else {
    position--;
  }
  carousel();
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function carousel() {
  // hide all items
  slides.forEach((slide) => {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  });
  // show item in position
  slides[position].classList.add("carousel-item-visible");
}

// auto slide // smallScreen
//=> unabled animations for carousel, because couldn't solve how to stop interval on desktop size
const autoSlide = setInterval(nextSlide, 3000);
