//Ester
class Plane {
  constructor(speed) {}
  //Miguel
  draw() {
    ctx.save();
    ctx.translate(
      this.plane.x + this.plane.width / 2,
      this.plane.y + this.plane.height / 2
    );
    ctx.rotate((this.plane.angle * Math.PI) / 180);
    ctx.drawImage(
      planeImage,
      -this.plane.width / 2,
      -this.plane.height / 2,
      this.plane.width,
      this.plane.height
    );
    ctx.restore();
  }

  updatePosition() {
    if (this.plane.targetY > this.plane.y + this.speed) {
      this.plane.y += Math.ceil((this.plane.targetY % this.plane.y) / 5);
      this.updateAngle(this.plane.angleSpeed);
    } else if (this.plane.targetY < this.plane.y - this.speed) {
      this.plane.y -= Math.ceil((this.plane.y % this.plane.targetY) / 5);
      this.updateAngle(-this.plane.angleSpeed);
    } else {
      this.returnInitialAngle();
    }
  }

  updateAngle(speed) {
    if (
      this.plane.angle < this.plane.maxAngle &&
      this.plane.angle > -this.plane.maxAngle
    ) {
      this.plane.angle += speed * 0.75;
    }
  }

  returnInitialAngle() {
    if (this.plane.angle > 0) {
      this.plane.angle -= this.plane.angleSpeed;
    } else if (this.plane.angle < 0) {
      this.plane.angle += this.plane.angleSpeed;
    }
  }

  move(mouseY) {
    mouseY = Math.floor(mouseY);
    if (this.plane.y != mouseY) {
      this.plane.targetY = mouseY;
    }
  }
}

//Guilherme

class Collisions {}

updateEnemies(enemies, clouds);
{
}

checkCollisions();
{
}

collided(obj1, obj2);
{
}

update();
{
}
