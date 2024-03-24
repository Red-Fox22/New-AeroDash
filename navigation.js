document.querySelector('.play-btn')?.addEventListener("click", () => {
  location.href = 'game.html';
});

document.querySelector('.lost button')?.addEventListener("click", () => {
  location.href = 'index.html';
});

document.querySelector('.lost button ~ button')?.addEventListener("click", () => {
  location.reload();
});