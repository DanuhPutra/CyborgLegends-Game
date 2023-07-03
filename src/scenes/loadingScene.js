import Phaser from "phaser";
export default class Loading extends Phaser.Scene {
  constructor() {
    super("loading-game");
  }

  init() {
    this.orange = 0xffad00;
    this.lightPurple = 0x832aee;
    this.green = 0x00ff00;
    this.background = undefined;
    this.backsound = undefined;
  }

  preload() {
    this.load.image("loadingBG", "images/loadingBG.png");
    this.load.audio("loading", "sound/loading.mp3");
  }

  create() {
    this.sound.play("loading");
    this.loadingBG = this.add
      .image(350, 190, "loadingBG")
      .setInteractive()
      .setScale(1.2);
    this.time.addEvent({
      delay: 3000,
      callback: this.startGame,
      callbackScope: this,
      loop: false,
    });

    const { width, height } = this.scale;
    const x = width * 0.5;
    const y = height * 0.5;

    const left = this.add.rectangle(x - 50, y, 40, 75, this.orange, 1);
    const middle = this.add.rectangle(x, y, 40, 75, this.orange, 1);
    const right = this.add.rectangle(x + 50, y, 40, 75, this.orange, 1);
    const star = this.add.star(x + 350, y + 170, 5, 16, 32, this.orange, 1);
    // @ts-ignore
    const text = this.add.text(240, 300, " Connecting for the game.. ", {
      fontSize: "20px",
      fill: "#fff",
    });
    this.add.tween({
      targets: text,
      scaleY: 3,
      duration: 500,
      repeat: -1,
      repeatDelay: 300,
      yoyo: true,
      ease: Phaser.Math.Easing.Bounce.InOut,
    });
    this.add.tween({
      targets: left,
      scaleY: 2,
      duration: 100,
      repeat: -1,
      repeatDelay: 300,
      yoyo: true,
      ease: Phaser.Math.Easing.Bounce.InOut,
    });
    this.add.tween({
      targets: middle,
      scaleY: 2,
      duration: 100,
      delay: 100,
      repeat: 10,
      repeatDelay: 300,
      yoyo: true,
      ease: Phaser.Math.Easing.Bounce.InOut,
    });
    this.add.tween({
      targets: right,
      scaleY: 2,
      duration: 100,
      delay: 200,
      repeat: -1,
      repeatDelay: 300,
      yoyo: true,
      ease: Phaser.Math.Easing.Bounce.InOut,
    });
    this.add.tween({
      targets: star,
      scaleX: 0,
      duration: 500,
      repeat: -1,
      yoyo: true,
      ease: Phaser.Math.Easing.Bounce.InOut,
      onYoyo: () => {
        if (star.fillColor === this.orange) {
          star.fillColor = this.green;
        } else {
          star.fillColor = this.orange;
        }
      },
    });
  }

  update() {}

  startGame() {
    this.sound.stopAll();
    this.scene.start("lobby-game");
  }
}
