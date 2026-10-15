
function openMenu() {
  document.getElementById("menuPanel").classList.add("open");
  document.getElementById("menuOverlay").classList.add("show");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  document.getElementById("menuPanel").classList.remove("open");
  document.getElementById("menuOverlay").classList.remove("show");
  document.body.classList.remove("menu-open");
}

// Close the navigation menu when the Escape key is pressed
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});