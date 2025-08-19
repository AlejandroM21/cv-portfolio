const toggle = document.getElementById("darkModeToggle");
const body = document.body;

// Detect system preference
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  body.classList.add("dark");
}

toggle.addEventListener("click", () => body.classList.toggle("dark"));
