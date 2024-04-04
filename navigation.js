//Miguel
document.querySelector('.play-btn')?.addEventListener("click", () => {
  location.href = 'game.html';
});

document.querySelector('.lost button')?.addEventListener("click", () => {
  location.reload();
});

document.querySelector('.lost button ~ button')?.addEventListener("click", () => {
  location.href = 'index.html';
});

document.querySelector('ul li button')?.addEventListener("click", () => {
  if (confirm('Are you sure you want to reset the game?')) {
    localStorage.clear();
    location.reload();
  }
});

document.querySelector('ul li:last-child button')?.addEventListener("click", () => {
  if (prompt('Enter developer password:')?.toLowerCase() === 'mesn') {
    localStorage.setItem("money", 100000);
    location.reload();
  }
});