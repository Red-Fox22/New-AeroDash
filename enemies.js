class Enemies {
  constructor(speed) {
    this.speed = speed;
    this.enemies = [];
    this.spawnRate = 5000;
    this.lastSpawn = 0;
    this.objImages = [];
  }

  returnEnemies() {
    return this.enemies;
  }

  spawnEnemy() {
    const height = Math.floor(Math.random() * (300 - 200)) + 200
    const enemy = {
      x: canvas.width + 1000,
      y: canvas.height - height,
      width: 100,
      height: height,
    };

    const randImgArray = [];
    for (let i = 1; i <= 7; i++) {
      randImgArray.push(`predio-${i}`);
    }

    let rand = Math.floor(Math.random() * randImgArray.length);
    const enemyImage = new Image();
    enemyImage.src = `./assets/${randImgArray[rand]}.png`;

    enemyImage.onload = () => {
      enemy.objImage = enemyImage;

      if (this.enemies.length < 2) {
        this.enemies.push(enemy);
      }
    }
  }


  moveEnemies() {
    for (let enemy of this.enemies) {
      enemy.x -= this.speed;
    }
    this.enemies = this.enemies.filter(enemy => enemy.x > 0 - 100);
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
    collisions.updateEnemies(this.enemies);
  }

  drawEnemies() {
    for (let enemy of this.enemies) {
      ctx.drawImage(enemy.objImage, enemy.x, enemy.y, enemy.width, enemy.height);
    }
  }
}