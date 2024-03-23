class Collisions {
  constructor(player, enemies) {
    this.player = player;
    this.enemies = enemies;
    this.gameOver = false;
  }

  updateEnemies(enemies) {
    this.enemies = enemies;
  }

  checkCollisions() {
    for (let enemy of this.enemies) {
      if (this.collided(this.player, enemy)) {
        this.gameOver = true;
        break;
      }
    }
  }

  collided(obj1, obj2) {
    const margin = 25;
    return obj1.x + obj1.width - margin >= obj2.x &&
      obj1.x + margin <= obj2.x + obj2.width &&
      obj1.y + obj1.height - margin >= obj2.y &&
      obj1.y + margin <= obj2.y + obj2.height;
  }

  update() {
    this.checkCollisions();
    if (this.gameOver) {
      return true;
    }
    return false;
  }
}