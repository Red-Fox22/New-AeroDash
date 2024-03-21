const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const centerX_canvas = canvas.width / 2;
const centerY_canvas = canvas.height / 2;

const backgroundImage = new Image();
backgroundImage.src = "./assets/background.webp";

const planeImage = new Image();
planeImage.src = "./assets/plane.webp";

const speed = 12.5;

const background = new Background(speed);
const planeObj = new Plane(speed);

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();
  planeObj.updatePosition();
  planeObj.draw();
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