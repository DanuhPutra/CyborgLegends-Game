import Phaser from "phaser";
export default class WinScene extends Phaser.Scene {
  constructor() {
    super("win-scene");
  }

  init(data) {
    this.exitBtn = undefined;
    this.countinue = undefined;
  }

  preload() {
    this.load.image("winBg", "images/winBg.jpeg");
    this.load.image("win-text", "images/winText.png");
    this.load.image("exit", "images/exit.png");
    this.load.image("next", "images/continue.png");

    this.load.audio("pinter", "sound/winner.mp3");
    this.load.audio("click", "sound/click.mp3");
  }

  create() {
    this.sound.play("pinter");
    this.add.image(400, 320, "winBg");
    this.add.image(400, 140, "win-text").setScale(0.7);

    this.exitBtn = this.add
      .image(400, 320, "exit")
      .setScale(1)
      .setInteractive();
    this.exitBtn.once(
      "pointerup",
      () => {
        this.sound.play("click");
        this.scene.start("lobby-game");
        this.sound.stopAll();
      },
      this
    );

    this.countinue = this.add
      .image(397, 400, "next")
      .setScale(1)
      .setInteractive();
    this.countinue.once(
      "pointerup",
      () => {
        this.sound.play("click");
        this.scene.start("levels");
        this.sound.stopAll();
      },
      this
    );
  }
}
