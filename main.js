const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const centerX_canvas = canvas.width / 2;
const centerY_canvas = canvas.height / 2;

const backgroundImage = new Image();
backgroundImage.src = "./assets/background.webp";

const planeImage = new Image();
planeImage.src = localStorage.getItem("plane") || "./assets/ap-1.webp";

const planeLevel = planeImage.src.split("-")[1].split(".")[0];
console.log(planeLevel);

const speed = 10 * (1 + planeLevel / 4);
console.log(speed);

const gain = 500;
let points = 0;
let money = Number(localStorage.getItem("money") || 0);

const background = new Background(speed);
const enemies = new Enemies(speed);
const planeObj = new Plane(speed);
const collisions = new Collisions(planeObj.plane, enemies.enemies);

const updateMoney = () => {
  enemies.returnEnemies().forEach((enemy) => {
    if (enemy.x < 0 + 150 && enemy.x > 0 + 150 - speed * 2) {
      points += gain;
      money += gain;
      localStorage.setItem("money", money);
    }
  });
}

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();
  planeObj.updatePosition();
  planeObj.draw();
  enemies.update();
  updateMoney();

  if (collisions.update()) {
    return;
  }

  requestAnimationFrame(gameLoop);
};

window.addEventListener("mousemove", (event) => {
  let mousePos = event.clientY;

  if (mousePos > canvas.height - 100) {
    mousePos = canvas.height - 100;
  } else if (mousePos <= 50) {
    mousePos = 50;
  }
  planeObj.move(mousePos);
});

gameLoop();