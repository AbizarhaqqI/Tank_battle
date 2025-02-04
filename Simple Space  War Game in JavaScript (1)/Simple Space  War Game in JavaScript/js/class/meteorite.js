class Meteorite extends Plane {
  setup() {
    const { w, h } = config.game;
    super.setup("meteorite");
    this.y = random(0, h - this.h);
    this.initBullet("enemyBullet", this.scene.enemyBullets);
    this.rotateState = true;
    this.rotateSpeed = 0;
  }

  update() {
    if (this.run) {
      this.move();
      if (this.isEnter()) {
        this.fire();
      }
    }
    super.update();
  }
}
