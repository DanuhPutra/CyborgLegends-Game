import Phaser from "phaser";
export default class Tutorial extends Phaser.Scene {
  constructor() {
    super("tutorial");
  }

  init() {
    this.exit = undefined;
    this.control = undefined;
    this.a = undefined;
    this.d = undefined;
    this.space = undefined;
    this.e = undefined;
    this.q = undefined;
    this.red = undefined;
    this.blue = undefined;
    this.InfoButton = undefined;
    this.creted = undefined;
    this.backsound = undefined;
    this.enemy = undefined;
    this.enemy1 = undefined;
    this.enemy2 = undefined;
    this.enemy3 = undefined;
    this.enemy4 = undefined;
    this.enemy5 = undefined;
    this.enemy6 = undefined;
    this.skor = undefined;
    this.skor1 = undefined;
    this.skor2 = undefined;
    this.skor3 = undefined;
    this.skor4 = undefined;
    this.skor5 = undefined;
    this.skor6 = undefined;
    this.skor7 = undefined;
    this.fire1 = undefined;
    this.fire2 = undefined;
    this.fire3 = undefined;
    this.fire4 = undefined;

    this.gameWidth = this.scale.width;
    this.gameHeight = this.scale.height;
  }

  preload() {
    this.load.image("tutorial", "images/black.jpg");
    this.load.image("exit", "images/exit.png");
    this.load.image("options", "images/options.png");
    this.load.image("info", "images/moreInfo.png");
    this.load.image("ig", "images/instagram.png");
  }

  create() {
    this.add.image(250, 300, "tutorial").setScale(2);

    this.exit = this.add.image(680, 400, "exit").setInteractive().setScale(1);
    this.exit.once(
      "pointerup",
      () => {
        this.sound.stopAll();
        this.sound.play("click");
        this.scene.start("lobby-game");
      },
      this
    );

    // @ts-ignore
    this.control = this.add.text(50, 0, "CONTROL", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.a = this.add.text(50, 20, "A for the way forward", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.d = this.add.text(50, 40, "D for the way back", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.space = this.add.text(50, 100, "SPACE for jump", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.e = this.add.text(50, 80, "E shoot red fire", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.q = this.add.text(50, 60, "Q shoot blue fire", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.enemy = this.add.text(280, 0, "ENEMIES", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.enemy1 = this.add.text(
      280,
      20,
      "GEAR : give a stun effect for 1 seconds ",
      { fontFamily: "serif", fill: "#fff", fontSize: "18px" }
    );
    // @ts-ignore
    this.enemy2 = this.add.text(280, 40, "ROUTER : life -1 ", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.enemy3 = this.add.text(280, 60, "DRONE : life -1 ", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.enemy4 = this.add.text(280, 80, "ROBOT : life -1 ", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.enemy5 = this.add.text(280, 100, "PLANE : life -2 ", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.enemy6 = this.add.text(
      50,
      400,
      "The higher the level,the more difficult it will be ",
      { fontFamily: "serif", fill: "#fff", fontSize: "18px" }
    );
    // @ts-ignore
    this.skor = this.add.text(650, 0, "SCORE", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.skor1 = this.add.text(650, 60, "REACT : +1", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.skor2 = this.add.text(650, 20, "DRONE : +2", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.skor3 = this.add.text(650, 40, "ROBOT : +2", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.skor4 = this.add.text(650, 80, "PLANE : +1", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.skor5 = this.add.text(650, 100, "ROBOT : +1", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.skor6 = this.add.text(650, 120, "GEAR : +1", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.skor7 = this.add.text(650, 140, "ROUTER : +1", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.fire1 = this.add.text(50, 200, "USE FIRE ATTACK", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
    this.fire2 = this.add.text(
      50,
      220,
      "RED FIRE : to kill drone, robot, plane",
      { fontFamily: "serif", fill: "#fff", fontSize: "18px" }
    );
    // @ts-ignore
    this.fire3 = this.add.text(50, 240, "BLUE FIRE : to kill gear, router", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "18px",
    });
    // @ts-ignore
  }
}
