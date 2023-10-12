// Inject overlay elements

setTimeout(function () {
  const overlay = document.createElement("div");
  overlay.id = "overlay-extension";
  document.body.appendChild(overlay);

  // Optionally, you can add HTML content to your overlay
  overlay.innerHTML = "<h1>Hello, Overlay!</h1>";
}, 2000); // 3-second delay
