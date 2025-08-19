const bars = document.querySelectorAll(".skill-bar");
bars.forEach((bar) => {
  const level = bar.dataset.level;
  setTimeout(() => {
    bar.style.width = level + "%";
  }, 500);
});
