import Phaser from "phaser";
export default class LoseScene extends Phaser.Scene {
  constructor() {
    super("lose-scene");
  }

  init(data) {
    this.homeButton = undefined;
    this.restartButton = undefined;
  }

  preload() {
    this.load.image("loseBg", "images/loseBg.png");
    this.load.image("lose-text", "images/loseText.png");
    this.load.image("home", "images/skip.png");
    this.load.image("restart", "images/replayBtn.png");

    this.load.audio("bodo", "sound/kalah.mp3");
    this.load.audio("kembali", "sound/click.mp3");
  }

  create() {
    this.sound.play("bodo");
    this.add.image(400, 320, "loseBg");
    this.add.image(400, 140, "lose-text").setScale(0.5);

    this.homeButton = this.add
      .image(400, 290, "home")
      .setScale(1)
      .setInteractive();
    this.homeButton.once(
      "pointerup",
      () => {
        this.sound.play("kembali");
        this.scene.start("lobby-game");
        this.sound.stopAll();
      },
      this
    );

    this.restartButton = this.add
      .image(400, 370, "restart")
      .setScale(1)
      .setInteractive();
    this.restartButton.once(
      "pointerup",
      () => {
        this.sound.play("kembali");
        this.scene.start("levels");
        this.sound.stopAll();
      },
      this
    );
  }
}
