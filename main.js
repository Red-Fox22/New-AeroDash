const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const centerX_canvas = canvas.width / 2;
const centerY_canvas = canvas.height / 2;

const backgroundImage = new Image();
backgroundImage.src = "./assets/background.webp";

const cloudImage = new Image();
cloudImage.src = './assets/cloud.webp';

const explosion = new Image();
explosion.src = "./assets/explosion.png";

const planeImage = new Image();
planeImage.src = localStorage.getItem("plane") || "./assets/ap-1.webp";

const planeLevel = planeImage.src.split("-")[1].split(".")[0];
const speed = 10 * (1 + planeLevel / 4);

const gain = 500;
let points = 0;
let money = Number(localStorage.getItem("money") || 0);

const updatePoints = () => {
  document.querySelector("header").innerHTML = `
    <span>${points.toString().padStart(5, '0')}</span>
    <img src="./assets/screen.webp" />
  `;
}

updatePoints();

const background = new Background(speed);
const enemies = new Enemies(speed);
const planeObj = new Plane(speed);
const collisions = new Collisions(planeObj.plane, enemies.enemies, enemies.clouds);

const updateMoney = () => {
  enemies.returnEnemies().forEach((enemy) => {
    if (enemy.x < 0 + 150 && enemy.x > 0 + 150 - speed) {
      points += gain;
      money += gain;
      localStorage.setItem("money", money);
      updatePoints();
    }
  });
}

const lost = () => {
  const plane = planeObj.returnPlane();
  ctx.drawImage(explosion, plane.x + plane.width / 2, plane.y - plane.height / 2, 100, 100);
}

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();
  planeObj.updatePosition();
  planeObj.draw();
  enemies.update();
  updateMoney();

  if (collisions.update()) {
    return lost();
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