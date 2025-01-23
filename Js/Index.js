"use strict";
// Start Slider //

const imgsSlidEl = document.querySelectorAll(".sliderImg");
const prevSlidEl = document.querySelector(".prev-slider");
const nextSlidEl = document.querySelector(".next-slider");
let activeSlider = 0;

const nextSlidFunc = () => {
  imgsSlidEl[activeSlider].classList.remove("show");
  activeSlider++;
  if (activeSlider === imgsSlidEl.length - 1) activeSlider = 0;
  imgsSlidEl[activeSlider].classList.add("show");
};

setInterval(nextSlidFunc, 4000);

nextSlidEl.addEventListener("click", nextSlidFunc);

prevSlidEl.addEventListener("click", () => {
  imgsSlidEl[activeSlider].classList.remove("show");
  activeSlider--;
  if (activeSlider === -1) activeSlider = imgsSlidEl.length - 1;
  imgsSlidEl[activeSlider].classList.add("show");
});

// Finish Slider
// start modal offer //

const modal = document.querySelector(".modal");

window.onload = () => {
  modal.classList.add("active");
};
setTimeout(() => {
  modal.classList.remove("active");
}, 5000);
window.onclick = (e) => {
  if (e.target !== modal) {
    modal.classList.remove("active");
  }
};

// finish modal offer //
// Start Cart Next

// Get the arrow buttons and cart container

const nextCardSlidEl = document.querySelector(".nextCart");
const prevCardSlidEl = document.querySelector(".prevCart");

function handleScrollNext(direction) {
  const cards = document.querySelector(".carts");
  cards.scrollLeft = cards.scrollLeft +=
    window.innerWidth / 2 > 600
      ? window.innerWidth / 2
      : window.innerWidth - 100;
}

function handleScrollPrev(direction) {
  const cards = document.querySelector(".carts");
  cards.scrollLeft = cards.scrollLeft -=
    window.innerWidth / 2 > 600
      ? window.innerWidth / 2
      : window.innerWidth - 100;
}

nextCardSlidEl.addEventListener("click", handleScrollNext);
prevCardSlidEl.addEventListener("click", handleScrollPrev);

// Finish Cart Next

//Start Zoom Slider

const divZomSlidEl = document.querySelectorAll(".zoomSlider-div");

const removeZomSlClass = () => {
  for (let i = 0; i < divZomSlidEl.length; i++) {
    divZomSlidEl[i].classList.remove("active");
  }
};
for (let i = 0; i < divZomSlidEl.length; i++) {
  divZomSlidEl[i].addEventListener("hover", () => {
    removeZomSlClass();
    divZomSlidEl[i].classList.add("active");
  });
}

// Finish Zoom Slider
