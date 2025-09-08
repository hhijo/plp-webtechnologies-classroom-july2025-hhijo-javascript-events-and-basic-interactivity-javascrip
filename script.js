// -------------------------------
// FORM VALIDATION + MODAL POPUP
// -------------------------------
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  // Validation checks
  if (username === "") {
    message = "Username cannot be empty.";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    message = "Please enter a valid email.";
  } else if (password.length < 6) {
    message = "Password must be at least 6 characters.";
  } else {
    message = "Form submitted successfully!";
    showModal(); // 🎉 Open modal if success
  }

  document.getElementById("formMessage").textContent = message;
});

// -------------------------------
// INTERACTIVE FEATURE 1: Counter
// -------------------------------
let count = 0;
document.getElementById("counterBtn").addEventListener("click", function() {
  count++;
  document.getElementById("counter").textContent = count;
});

// -------------------------------
// INTERACTIVE FEATURE 2: Background Color Changer
// -------------------------------
const colors = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ffcc99"];
document.getElementById("colorBtn").addEventListener("click", function() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// -------------------------------
// MODAL FUNCTIONALITY
// -------------------------------
function showModal() {
  document.getElementById("modal").style.display = "block";
}

document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

// Close modal if user clicks outside content
window.addEventListener("click", function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
