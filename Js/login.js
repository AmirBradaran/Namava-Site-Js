"use strict";
const timeEl = document.querySelector(".time");



// Start Timer
timeEl.textContent = new Date().toLocaleTimeString();
let clock = setInterval(() => {
  timeEl.textContent = new Date().toLocaleTimeString();
  return
}, 1000);
// Finish Timer

const loginForm = document.getElementsByClassName("login-form");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const messageDiv = document.getElementById("message");
const validPhone = "09379579269";
const validPassword = "123456";
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  
  if (username === validUsername && password === validPassword) {
    window.location.href = "Home.html";
  } else {
    messageDiv.textContent = "Invalid username or password. Please try again.";
    messageDiv.style.color = "#d9534f";
  }
});