const modals = document.querySelectorAll(".modal");
const openButtons = document.querySelectorAll(".project-card");
const closeButtons = document.querySelectorAll(".close");

openButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    modals[i].style.display = "flex";
  });
});

closeButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    modals[i].style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  modals.forEach((modal) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
