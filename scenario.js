//Miguel
class Background {
  constructor(speed) {
    this.speed = speed;
    this.xPos = 0;
  }

  draw() {
    ctx.drawImage(backgroundImage, this.xPos, 0, canvas.width, canvas.height);
    ctx.drawImage(
      backgroundImage,
      this.xPos + canvas.width,
      0,
      canvas.width,
      canvas.height
    );

    this.xPos -= this.speed;

    if (this.xPos <= -canvas.width) {
      this.xPos = 0;
    }
  }
}

class Enemies {
  constructor(speed) {
    this.speed = speed;
    this.enemies = [];
    this.spawnRate = 5000;
    this.lastSpawn = 0;
    this.objImages = [];
    this.clouds = [];
    this.lastSpawnCloud = 0;
    this.spawnRateCloud = 5000;
  }

  returnEnemies() {
    return this.enemies;
  }

  spawnTower() {
    const height = Math.floor(Math.random() * (300 - 200)) + 200;

    const enemy = {
      x: canvas.width + 1000,
      y: canvas.height - height,
      width: 100,
      height: height,
      margin: 20,
    };

    const randImgArray = Array.from({ length: 7 }, (_, i) => `predio-${i + 1}`);
    let rand = Math.floor(Math.random() * randImgArray.length);

    const enemyImage = new Image();
    enemyImage.src = `./assets/${randImgArray[rand]}.png`;

    enemy.img = enemyImage;

    if (this.enemies.length < 4) {
      this.enemies.push(enemy);
    }
  }
  //Ester
  spawnCloud() {}

  moveEnemies() {}

  update() {}

  drawEnemies() {}
}
