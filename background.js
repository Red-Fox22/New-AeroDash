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