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
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const cartContainer = document.querySelector(".carts");

// Scroll the cart container to the next or previous item
nextButton.addEventListener("click", () => {
  cartContainer.scrollBy({
    left: 220, // Scroll right by 220px on each "next" button click
    behavior: "smooth", // Smooth scrolling
  });
});

prevButton.addEventListener("click", () => {
  cartContainer.scrollBy({
    left: -220, // Scroll left by 220px on each "prev" button click
    behavior: "smooth", // Smooth scrolling
  });
});


// Finish Cart Next

//Start Zoom Slider 

const divZomSlidEl=document.querySelectorAll('.zoomSlider-div')

const removeZomSlClass=()=>{
    for(let i=0;i<divZomSlidEl.length;i++){
        divZomSlidEl[i].classList.remove('active')
    }
}
for(let i=0;i<divZomSlidEl.length;i++){
    divZomSlidEl[i].addEventListener('hover',()=>{
        removeZomSlClass()
        divZomSlidEl[i].classList.add('active')
    })
}

// Finish Zoom Slider 