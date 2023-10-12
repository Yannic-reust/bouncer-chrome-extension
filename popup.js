// popup.js

document.getElementById("showOverlay").addEventListener("click", () => {
  // Show the overlay
  const overlay = document.getElementById("overlay-extension");
  if (overlay) {
    overlay.style.display = "block";
  }
});

document.getElementById("hideOverlay").addEventListener("click", () => {
  // Hide the overlay
  const overlay = document.getElementById("overlay-extension");
  if (overlay) {
    overlay.style.display = "none";
  }
});
