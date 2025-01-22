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
// Start Time For Login Page

const timeEl = document.querySelector(".timerLog");
let clock = setInterval(() => {
  timeEl.textContent = new Date().toLocaleTimeString();
}, 1000);

// End Time For Login Page
// Start Api For Login

// const username = document.querySelector("#username");
// const password = document.querySelector("#password");
// const messageEl = document.querySelector(".message");
// handleLogin.addEventListener('submit',async (e) => {
//     e.preventDefault()
//     try {
//       const res = await fetch("https://fakestoreapi.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: username.value,
//           password: password.value,
//         }),
//       });
//       const data = await res.json();
//     } catch (error) {
//       alert("Error - Fetch");
//     }
//   })

// Start Login 

const validPhone = '09379579269';
const validPassword = '123456';

const loginForm = document.getElementById('login-Form');
const phoneInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const phone = phoneInput.value;
  const password = passwordInput.value;
  if (phone === validPhone && password === validPassword) {
    messageDiv.textContent = 'ورود موفقیت‌آمیز!';
    messageDiv.style.color = '#28a745';
    messageDiv.style.display = 'block';
  } else {
    messageDiv.textContent = 'شماره تلفن یا رمز عبور اشتباه است. دوباره تلاش کنید.';
    messageDiv.style.color = '#d9534f';
    messageDiv.style.display = 'block';
  }
});

// End Api For Login
