class Background {
  constructor(speed) {
    this.speed = speed;
    this.xPos = 0;
  }

  draw() {
    ctx.drawImage(backgroundImage, this.xPos, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, this.xPos + canvas.width, 0, canvas.width, canvas.height);

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
  }

  returnEnemies() {
    return this.enemies;
  }

  spawnEnemy() {
    const height = Math.floor(Math.random() * (300 - 200)) + 200;
    const enemy = {
      x: canvas.width + 1000,
      y: canvas.height - height,
      width: 100,
      height: height,
    };

    const y = Math.floor(Math.random() * (centerY_canvas - 0)) + 0;
    const cloud = {
      x: canvas.width + 1000,
      y: y,
      width: 150,
      height: 75,
      img: cloudImage,
    }

    const randImgArray = Array.from({ length: 7 }, (_, i) => `predio-${i + 1}`);

    let rand = Math.floor(Math.random() * randImgArray.length);
    const enemyImage = new Image();
    enemyImage.src = `./assets/${randImgArray[rand]}.png`;

    enemyImage.onload = () => {
      enemy.objImage = enemyImage;

      if (this.enemies.length < 2) {
        this.enemies.push(enemy);
      }

      if (this.clouds.length < 5) {
        this.clouds.push(cloud);
      }
    }
  }

  moveEnemies() {
    for (let enemy of this.enemies) {
      enemy.x -= this.speed;
    }

    for (let cloud of this.clouds) {
      cloud.x -= this.speed;
    }

    this.clouds = this.clouds.filter(cloud => cloud.x > 0 - cloud.width);
    this.enemies = this.enemies.filter(enemy => enemy.x > 0 - enemy.width);
  }

  update() {
    const currentTime = new Date().getTime();
    if (currentTime - this.lastSpawn > this.spawnRate) {
      this.spawnEnemy();
      this.lastSpawn = currentTime;
    }
    this.moveEnemies();
    this.drawEnemies();
    this.spawnRate = Math.floor(Math.random() * (20000 - 500 + 1)) + 500;
    collisions.updateEnemies(this.enemies, this.clouds);
  }

  drawEnemies() {
    for (let enemy of this.enemies) {
      ctx.drawImage(enemy.objImage, enemy.x, enemy.y, enemy.width, enemy.height);
    }

    for (let cloud of this.clouds) {
      ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
    }
  }
}