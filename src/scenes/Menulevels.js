import Phaser from "phaser";
export default class Level extends Phaser.Scene {
  constructor() {
    super("levels");
  }

  init() {
    this.judul = undefined;
    this.levels1 = undefined;
    this.levels2 = undefined;
    this.levels3 = undefined;
    this.levels4 = undefined;
    this.levels5 = undefined;
    this.levels6 = undefined;
    this.levels7 = undefined;
    this.levels8 = undefined;
    this.keluarBtn = undefined;
  }

  preload() {
    this.load.image("bg", "images/levelsBg.png");
    this.load.image("exit", "images/exit.png");
  }

  create() {
    this.add.image(240, 320, "bg");
    // @ts-ignore
    this.judul = this.add
      .text(290, 0, "MENU LEVELS", {
        fontFamily: "serif",
        fill: "#fff",
        fontSize: "30px",
        backgroundColor: "#444",
        padding: 20,
      })
      .setInteractive()
      .setScale(1);

    // @ts-ignore
    this.levels1 = this.add
      .text(60, 200, "1", {
        fontFamily: "serif",
        fill: "#fff",
        fontSize: "60px",
        backgroundColor: "#444",
        padding: 20,
      })
      .setInteractive()
      .setScale(1);
    this.levels1.once(
      "pointerup",
      () => {
        this.scene.start("technology-game1");
      },
      this
    );

    // @ts-ignore
    this.levels2 = this.add
      .text(150, 200, "2", {
        fontFamily: "serif",
        fill: "#fff",
        fontSize: "60px",
        backgroundColor: "#444",
        padding: 20,
      })
      .setInteractive()
      .setScale(1);
    this.levels2.once(
      "pointerup",
      () => {
        this.scene.start("technology-game2");
      },
      this
    );

    // @ts-ignore
    this.levels3 = this.add
      .text(240, 200, "3", {
        fontFamily: "serif",
        fill: "#fff",
        fontSize: "60px",
        backgroundColor: "#444",
        padding: 20,
      })
      .setInteractive()
      .setScale(1);
    this.levels3.once(
      "pointerup",
      () => {
        this.scene.start("technology-game3");
      },
      this
    );
    // @ts-ignore
    this.levels4 = this.add
      .text(330, 200, "4", {
        fontFamily: "serif",
        fill: "#fff",
        fontSize: "60px",
        backgroundColor: "#444",
        padding: 20,
      })
      .setInteractive()
      .setScale(1);
    this.levels4.once(
      "pointerup",
      () => {
        this.scene.start("technology-game4");
      },
      this
    );
    // @ts-ignore
    this.levels5 = this.add
      .text(420, 200, "5", {
        fontFamily: "serif",
        fill: "#fff",
        fontSize: "60px",
        backgroundColor: "#444",
        padding: 20,
      })
      .setInteractive()
      .setScale(1);
    this.levels5.once(
      "pointerup",
      () => {
        this.scene.start("technology-game5");
      },
      this
    );
    // @ts-ignore
    this.levels6 = this.add
      .text(510, 200, "BOOSS", {
        fontFamily: "serif",
        fill: "#fff",
        fontSize: "60px",
        backgroundColor: "#444",
        padding: 20,
      })
      .setInteractive()
      .setScale(1);
    this.levels6.once(
      "pointerup",
      () => {
        this.scene.start("technology-game-boss");
      },
      this
    );

    this.keluarBtn = this.add
      .image(400, 380, "exit")
      .setScale(1)
      .setInteractive();
    this.keluarBtn.once(
      "pointerup",
      () => {
        this.sound.play("click");
        this.scene.start("lobby-game");
        this.sound.stopAll();
      },
      this
    );
  }

  update(time) {}
}
