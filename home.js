const usernameSpan = document.getElementById("username");
const storedName = localStorage.getItem("username");
if (storedName) {
  usernameSpan.textContent = storedName;
} else {
  // If no username, go back to login page
  window.location.href = "login.html";
}

// Logout button
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("username");
  window.location.href = "login.html";
});

// Simple counter
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});
