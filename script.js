const toggleButton = document.getElementById("dark-mode-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optional: change icon
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }
});
