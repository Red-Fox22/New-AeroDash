//Ester
class Plane {
  constructor(speed) {

  }
//Miguel
  draw() {
    
  }

  updatePosition() {
    
  }

  updateAngle(speed) {
    
  }

  returnInitialAngle() {
    
  }

  move(mouseY) {
    
  }
}

//Guilherme

class Collisions {
  constructor(player, enemies, clouds) {
    this.player = player;
    this.enemies = enemies;
    this.clouds = clouds;
    this.gameOver = false;
  }

  updateEnemies(enemies, clouds) {
    this.enemies = enemies;
    this.clouds = clouds;
  }

  checkCollisions() {
    for (const element of [...this.enemies, ...this.clouds]) {
      if (this.collided(this.player, element)) {
        this.gameOver = true;
        break;
      }
    }
  }

  collided(obj1, obj2) {
    const margin = obj2.margin;
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
