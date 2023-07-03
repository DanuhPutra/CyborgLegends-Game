import Phaser from "phaser";
export default class LobbyGame extends Phaser.Scene {
  constructor() {
    super("lobby-game");
  }

  init() {
    this.alas = undefined;
    this.karakter = undefined;
    this.StartButton = undefined;
    this.optionsButton = undefined;
    this.InfoButton = undefined;
    this.creted = undefined;
    this.backsound = undefined;

    this.gameWidth = this.scale.width;
    this.gameHeight = this.scale.height;
  }

  preload() {
    this.load.image("background-lobby", "images/lobbyBG.png");
    this.load.image("alas", "images/besi.png");
    this.load.image("start", "images/play.png");
    this.load.image("options", "images/options.png");
    this.load.image("info", "images/moreInfo.png");
    this.load.image("ig", "images/instagram.png");

    this.load.spritesheet("playerDiem-L", "images/diam.png", {
      frameWidth: 569,
      frameHeight: 558,
    });
    this.load.spritesheet("playerAtk-L", "images/attackRobot.png", {
      frameWidth: 569,
      frameHeight: 558,
    });
    this.load.spritesheet("slash-L", "images/ammo1.png", {
      frameHeight: 139,
      frameWidth: 172,
    });

    this.load.audio("lobbyBS", "sound/lobbyBS.mp3");
    this.load.audio("sring", "sound/sring.mp3");
    this.load.audio("click", "sound/click.mp3");
  }

  create() {
    this.add.image(250, 300, "background-lobby").setScale(2);
    this.sound.play("lobbyBS");
    this.alas = this.physics.add.staticImage(150, 300, "alas").setScale(1.1);
    this.alas = this.physics.add.staticImage(186, 300, "alas").setScale(1.1);
    this.alas = this.physics.add.staticImage(222, 300, "alas").setScale(1.1);
    this.alas = this.physics.add.staticImage(258, 300, "alas").setScale(1.1);
    this.alas = this.physics.add.staticImage(294, 300, "alas").setScale(1.1);
    this.alas = this.physics.add.staticImage(330, 300, "alas").setScale(1.1);
    this.karakter = this.CreateKarakter();
    this.karakter.anims
      .play("player-diem", true)
      .on("animationcomplete", () => {
        this.karakter.anims
          .play("player-pedang")
          .on("animationcomplete", () => {
            this.karakter.anims
              .play("player-diem")
              .on("animationcomplete", () => {
                this.karakter.anims
                  .play("player-pedang")
                  .on("animationcomplete", () => {
                    this.karakter.anims
                      .play("player-diem")
                      .on("animationcomplete", () => {
                        this.karakter.anims
                          .play("player-pedang")
                          .on("animationcomplete", () => {
                            this.karakter.anims
                              .play("player-diem")
                              .on("animationcomplete", () => {
                                this.karakter.anims
                                  .play("player-pedang")
                                  .on("animationcomplete", () => {
                                    this.karakter.anims.play("player-diem");
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
    this.physics.add.collider(this.alas, this.karakter);

    this.StartButton = this.add
      .image(680, 400, "start")
      .setInteractive()
      .setScale(1);
    this.StartButton.once(
      "pointerup",
      () => {
        this.sound.stopAll();
        this.sound.play("click");
        this.scene.start("levels");
      },
      this
    );

    this.optionsButton = this.add
      .image(680, 330, "options")
      .setInteractive()
      .setScale(1);
    this.optionsButton.once(
      "pointerup",
      () => {
        this.sound.stopAll();
        this.sound.play("click");
        this.scene.start("tutorial");
      },
      this
    );
    // @ts-ignore
    this.InfoButton = this.add.text(50, 0, "Cyborg Legends", {
      fontFamily: "serif",
      fill: "#000",
      fontSize: "40px",
    });
    // @ts-ignore
    this.creted = this.add.text(50, 40, "Creted by NgurahDanuhPutra", {
      fontFamily: "serif",
      fill: "#fff",
      fontSize: "20px",
      backgroundColor: "#444",
      padding: 3,
    });
    var instagram = this.add
      .image(750, 40, "ig")
      .setScale(0.2)
      .setInteractive();
    instagram.on("pointerup", this.openIg, this);
  }

  update() {}

  CreateKarakter() {
    // animasi
    this.anims.create({
      key: "player-diem",
      frames: this.anims.generateFrameNumbers("playerDiem-L", {
        start: 0,
        end: 6,
      }),
      frameRate: 3,
    }),
      this.anims.create({
        key: "player-pedang",
        frames: this.anims.generateFrameNumbers("playerAtk-L", {
          start: 0,
          end: 7,
        }),
        frameRate: 10,
      });
    // animasi

    const karakter = this.physics.add
      .sprite(270, 190, "playerDiem-L")
      .setScale(0.3)
      .setOffset(0, -30);

    return karakter;
  }

  openIg() {
    var url = "https://www.instagram.com/danuhputra";
    var s = window.open(url, "_blank");
    if (s && s.focus) {
      s.focus();
    } else if (!s) {
      window.location.href = url;
    }
  }
}
