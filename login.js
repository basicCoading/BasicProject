// login.js
const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop page refresh

  const usernameInput = document.getElementById("usernameInput").value.trim();

  if (usernameInput === "") {
    errorMsg.textContent = "Please enter your name!";
    return;
  }

  // Save username in localStorage
  localStorage.setItem("username", usernameInput);

  // Redirect to home page
  window.location.href = "index.html";
});
