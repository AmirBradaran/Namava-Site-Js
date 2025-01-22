"use strict";
const timeEl = document.querySelector(".time");
const loginForm = document.getElementById("login-form");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const messageDiv = document.getElementById("message");

const validPhone = "09379579269";
const validPassword = "123456";

// Start Timer 

timeEl.textContent = new Date().toLocaleTimeString();
let clock = setInterval(() => {
  timeEl.textContent = new Date().toLocaleTimeString();
  return
}, 1000);

// Finish Timer 

// Start Login 

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const phone = phoneInput.value;
  const password = passwordInput.value;
  if (phone === validPhone && password === validPassword) {
    messageDiv.textContent = "ورود موفقیت‌آمیز!",
    messageDiv.style.color = "#28a745",
    messageDiv.style.display = "block";
  } else {
    messageDiv.textContent =
      "شماره تلفن یا رمز عبور اشتباه است. دوباره تلاش کنید.",
    messageDiv.style.color = "#d9534f",
    messageDiv.style.display = "block";
  }
});

// Finish Login 