import Phaser from "phaser";
import Sword from "../ui/Sword";
import Jamur from "../ui/Jamur";
import Cactus from "../ui/Cactus";
import Robot from "../ui/Robot";
import ScoreLabel from "../ui/Score";
import LiveLabel from "../ui/Nyawa";
import Medkit from "../ui/Medkit";
import Susu from "../ui/ReactScore";
import Fire from "../ui/fire";
import pesawatLewat from "../ui/PesawatLewat";
export default class GameLevel5 extends Phaser.Scene {
  constructor() {
    super("technology-game5");
  }

  init() {
    this.gameWidth = this.scale.width;
    this.gameHeight = this.scale.height;
    this.bg = undefined;
    this.backsound1 = undefined;
    this.tanah = undefined;
    this.player = undefined;
    this.jamur = undefined;
    this.cactus = undefined;
    this.tileSprite = undefined;
    this.scoreLabel = undefined;
    this.slash = undefined;
    this.fire = undefined;
    this.pesawatLewat = undefined;
    this.clouds = undefined;
    this.portal = undefined;
    this.lifeLabel = undefined;
    this.enemyTerbang = undefined;
    this.zombieCewek = undefined;
    this.medkit = undefined;
    this.playerAttk = false;
    this.playerJump = false;
    this.susu = undefined;
    this.levelText = undefined;
    this.lastFired = 0;
    this.lastLoncat = 0;
    this.lastApi = 0;
    this.enemySpeed = 5;
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keyA = undefined;
    this.keyS = undefined;
    this.keyD = undefined;
    this.keyE = undefined;
    this.keyQ = undefined;
  }

  preload() {
    this.load.image("level5", "images/level5BG.jpg");
    this.load.image("background-lanjutan", "images/langit.png");
    this.load.image("tanah", "images/jalan.png");
    this.load.image("kotak", "images/2.png");
    this.load.image("jamur", "images/gearIce.png");
    this.load.image("cactus", "images/jaringan.png");
    this.load.image("awan", "images/pesawat.png");
    this.load.image("portal", "images/portal.png");
    this.load.image("medkit", "images/medkit.png");
    this.load.image("susu", "images/score2.png");
    this.load.image("left-cap", "images/barHorizontal_green_left.png");
    this.load.image("middle", "images/barHorizontal_green_mid.png");
    this.load.image("right-cap", "images/barHorizontal_green_right.png");
    this.load.image("left-cap-shadow", "images/barHorizontal_shadow_left.png");
    this.load.image("middle-shadow", "images/barHorizontal_shadow_mid.png");
    this.load.image(
      "right-cap-shadow",
      "images/barHorizontal_shadow_right.png"
    );
    this.load.spritesheet("playerDiem", "images/diam.png", {
      frameWidth: 569,
      frameHeight: 558,
    });
    this.load.spritesheet("playerRun", "images/runRobot.png", {
      frameWidth: 569,
      frameHeight: 558,
    });
    this.load.spritesheet("playerLoncat", "images/jumpRobot.png", {
      frameWidth: 569,
      frameHeight: 558,
    });
    this.load.spritesheet("playerAtk", "images/attackRobot.png", {
      frameWidth: 569,
      frameHeight: 558,
    });
    this.load.spritesheet("ular", "images/ular.png", {
      frameWidth: 256,
      frameHeight: 128,
    });
    this.load.spritesheet("slash", "images/ammo1.png", {
      frameHeight: 139,
      frameWidth: 172,
    });
    this.load.spritesheet("api", "images/fire.png", {
      frameHeight: 64,
      frameWidth: 64,
    });
    this.load.spritesheet("pesawatLewat", "images/pesawat2.png", {
      frameHeight: 96,
      frameWidth: 96,
    });
    this.load.spritesheet("nyawa", "images/nyawa.png", {
      frameHeight: 11,
      frameWidth: 33,
    });
    this.load.spritesheet("enemyTerbang", "images/robot1.png", {
      frameHeight: 48,
      frameWidth: 48,
    });
    this.load.spritesheet("zombieCewek", "images/robot.png", {
      frameHeight: 138,
      frameWidth: 155,
    });
    this.load.audio("bs", "sound/gameBS.mp3");
    this.load.audio("sring", "sound/sring.mp3");
    this.load.audio("walk", "sound/walks.mp3");
    this.load.audio("jump", "sound/jump.mp3");
    this.load.audio("jangkrik", "sound/jangkrik.mp3");
    this.load.audio("uwi", "sound/api.mp3");
    this.load.audio("looting", "sound/looting.mp3");
    this.load.audio("zombie", "sound/robot1.mp3");
    this.load.audio("robot2", "sound/robot2.mp3");
    this.load.audio("beku", "sound/frez.mp3");
    this.load.audio("dung", "sound/dung.mp3");
    this.load.audio("zombieMati", "sound/robotMati.mp3");
    this.load.audio("lalat", "sound/pesawat.mp3");
    this.load.audio("playerHit", "sound/playerHit.mp3");
    this.load.audio("portal", "sound/portal.mp3");
  }

  create() {
    // background
    this.tileSprite = this.add
      .tileSprite(0, 0, 800, 450, "level5")
      .setScale(1.2)
      .setOrigin(0, 0)
      .setScrollFactor(0, 0);
    this.levelText = this.add.text(350, 10, "LEVEL 5");
    this.levelText.setScrollFactor(0);
    this.backsound1 = this.sound.add("bs", { volume: 0.2 });
    var soundConfig = {
      loop: true,
    };
    this.backsound1.play(soundConfig);
    this.clouds = this.physics.add.group({
      key: "awan",
      repeat: 20,
      setScale: { x: 1, y: 1 },
    });
    Phaser.Actions.RandomRectangle(
      this.clouds.getChildren(),
      this.physics.world.bounds
    );
    this.tanah = this.physics.add.staticGroup();
    for (let i = 0; i < 5; i++) {
      const tanahChild = this.tanah.create(0, 0, "tanah");
      tanahChild.setScale(0.6);
      const x = tanahChild.displayWidth * i - 320;
      const y = 430;
      tanahChild.setPosition(x, y);
      tanahChild.refreshBody();
      const body = tanahChild.body;
      body.updateFromGameObject();
    }
    this.medkit = this.physics.add.group({
      classType: Medkit,
    });
    this.physics.add.collider(this.medkit, this.tanah);
    this.jamur = this.physics.add.group({
      classType: Jamur,
    });
    this.physics.add.collider(this.jamur, this.tanah);
    this.susu = this.physics.add.group({
      classType: Susu,
    });
    this.physics.add.collider(this.susu, this.tanah);
    this.cactus = this.physics.add.group({
      classType: Cactus,
    });
    this.physics.add.collider(this.cactus, this.tanah);
    this.enemyTerbang = this.physics.add.group({
      classType: Robot,
    });
    this.physics.add.collider(this.enemyTerbang, this.tanah);
    this.zombieCewek = this.physics.add.group({
      classType: Robot,
    });
    this.physics.add.collider(this.zombieCewek, this.tanah);
    this.pesawatLewat = this.physics.add.group({
      classType: pesawatLewat,
      maxSize: 1000,
      runChildUpdate: true,
    });
    this.portal = this.createPortal();
    this.physics.add.collider(this.portal, this.tanah);
    this.player = this.CreatePlayer();
    this.physics.add.collider(this.player, this.tanah);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setFollowOffset(0, 100);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.scoreLabel = this.createScoreLabel(20, 46, 0);
    this.lifeLabel = this.createLifeLabel(20, 65, 3);
    this.scoreLabel.setScrollFactor(0);
    this.lifeLabel.setScrollFactor(0);
    this.slash = this.physics.add.group({
      classType: Sword,
      maxSize: 1000,
      runChildUpdate: true,
    });
    this.fire = this.physics.add.group({
      classType: Fire,
      maxSize: 1000,
      runChildUpdate: true,
    });
    this.physics.add.overlap(this.player, this.jamur, this.frezz, null, this);
    this.physics.add.overlap(
      this.player,
      this.medkit,
      this.increaseLife,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.susu,
      this.susuScore,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.portal,
      this.nextStage,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.cactus,
      this.cactusMati,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.pesawatLewat,
      this.decreaseLife,
      null,
      this
    );
    this.physics.add.overlap(
      this.slash,
      this.pesawatLewat,
      this.PesawatMati,
      null,
      this
    );
    this.physics.add.overlap(
      this.fire,
      this.cactus,
      this.cactusKebakar,
      null,
      this
    );
    this.physics.add.overlap(
      this.fire,
      this.jamur,
      this.JamurKebakar,
      null,
      this
    );
    this.physics.add.overlap(
      this.slash,
      this.enemyTerbang,
      this.zombieMati,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.enemyTerbang,
      this.zombieNyerang,
      null,
      this
    );
    this.physics.add.overlap(
      this.slash,
      this.zombieCewek,
      this.zombieCewekMati,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.zombieCewek,
      this.zombieCeweNyerang,
      null,
      this
    );
    this.time.addEvent({
      delay: Phaser.Math.Between(6000, 12000),
      callback: this.spawnPesawat,
      callbackScope: this,
      loop: true,
    });
  }
  update(time) {
    this.clouds.children.iterate((child) => {
      // @ts-ignore
      child.setVelocityX(70);
      // @ts-ignore
      child.setVelocityY(0);
      // @ts-ignore
      if (child.y > this.scale.height) {
        // @ts-ignore
        child.x = Phaser.Math.Between(-700, 0);
        // @ts-ignore
      }
    });
    this.MovePlayer(this.player, time);
    this.tanah.children.iterate((child) => {
      const tanahChild = child;
      const randomJamur = Phaser.Math.Between(5, 8);
      const randomZombie = Phaser.Math.Between(5, 6);
      const tanahKanan = this.findPlatformKanan();
      const scrollX = this.cameras.main.scrollX;
      // @ts-ignore
      if (tanahChild.x <= scrollX - 150) {
        // @ts-ignore
        tanahChild.x = tanahKanan.x + tanahChild.displayWidth;
        // @ts-ignore
        tanahChild.body.updateFromGameObject();
        if (randomJamur == 5) {
          this.addJamur(tanahChild);
        } else if (randomJamur == 6) {
          this.addCactus(tanahChild);
        } else if (randomJamur == 7) {
          this.addMedkit(tanahChild);
        } else if (randomJamur == 8) {
          this.addSusu(tanahChild);
        }

        if (randomZombie == 6) {
          this.spawnRobot(tanahChild);
        } else if (randomZombie == 5) {
          this.spawnZombieCewek(tanahChild);
        }
      }
    });
  }
  findPlatformKanan() {
    const tanahs = this.tanah.getChildren();
    let tanahKanan = tanahs[0];

    for (let i = 1; i < tanahs.length; i++) {
      const platform = tanahs[i];
      // @ts-ignore
      if (platform.x < tanahKanan.x) {
        continue;
      }
      tanahKanan = platform;
    }
    return tanahKanan;
  }
  CreatePlayer() {
    const player = this.physics.add
      .sprite(this.gameWidth - 700, this.gameHeight - 230, "playerDiem")
      .setScale(0.3)
      .setSize(120, 222)
      .setOffset(0, 240);
    this.anims.create({
      key: "player-diem",
      frames: this.anims.generateFrameNumbers("playerDiem", {
        start: 0,
        end: 10,
      }),
      frameRate: 1,
    }),
      this.anims.create({
        key: "player-kanan",
        frames: this.anims.generateFrameNumbers("playerRun", {
          start: 0,
          end: 7,
        }),
        frameRate: 10,
      }),
      this.anims.create({
        key: "player-kiri",
        frames: this.anims.generateFrameNumbers("playerRun", {
          start: 0,
          end: 7,
        }),
        frameRate: 10,
      }),
      this.anims.create({
        key: "player-loncat",
        frames: this.anims.generateFrameNumbers("playerLoncat", {
          start: 0,
          end: 10,
        }),
        frameRate: 10,
      }),
      this.anims.create({
        key: "player-pedang",
        frames: this.anims.generateFrameNumbers("playerAtk", {
          start: 0,
          end: 7,
        }),
        frameRate: 10,
      });
    this.anims.create({
      key: "player-api",
      frames: this.anims.generateFrameNumbers("playerAtk", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
    });
    return player;
  }
  MovePlayer(player, time) {
    if (this.player.flipX) {
      this.player.setOffset(140, 240);
    }
    if (!this.player.active) {
      return;
    }
    if (this.playerAttk) {
      return;
    }
    const speed = 200;
    if (this.keyA.isDown) {
      this.player.setFlipX(true);
      this.player.setVelocityX(-speed);
      if (!this.playerAttk && !this.playerJump) {
        this.player.anims.play("player-kanan", true);
      }
    } else if (this.keyD.isDown) {
      this.player.setFlipX(false);
      this.player.setVelocityX(speed);
      if (!this.playerAttk && !this.playerJump) {
        this.player.anims.play("player-kanan", true);
      }
    } else {
      this.player.setVelocityX(0);
      this.player.setFlipX(false);
      if (!this.playerAttk && !this.playerJump) {
        this.player.anims.play("player-diem", true);
      }
    }

    if (this.keyE.isDown && time > this.lastFired) {
      this.playerAttk = true;
      const pedang = this.slash.get(0, 0, "slash").setScale(0.3);
      this.player.anims.stop();
      this.player.anims
        .play("player-pedang", false)
        .on("animationcomplete", () => {
          this.playerAttk = false;
        });
      if (pedang) {
        this.sound.play("sring");
        pedang.fire(this.player.x, this.player.y);

        this.lastFired = time + 800;
      }
    }
    if (this.keyQ.isDown && time > this.lastApi) {
      this.sound.play("uwi");
      this.playerAttk = true;
      const api = this.fire.get(0, 0, "api").setScale(0.9);
      this.player.anims.stop();
      this.player.anims
        .play("player-api", false)
        .on("animationcomplete", () => {
          this.playerAttk = false;
        });
      if (api) {
        api.api(this.player.x, this.player.y);

        this.lastApi = time + 700;
      }
    }
    const spaceJustPressed = Phaser.Input.Keyboard.JustUp(this.cursors.space);
    if (spaceJustPressed && time > this.lastLoncat) {
      this.sound.play("jump");
      this.player.setVelocityY(-150);
      if (!this.playerAttk) {
        this.playerJump = true;
        this.player.anims
          .play("player-loncat", true)
          .on("animationcomplete", () => {
            this.playerJump = false;
          });
      }
      this.lastLoncat = time + 1000;
    }
  }
  addJamur(sprite) {
    const y = sprite.y - sprite.displayHeight;
    const jamurs = this.jamur.get(sprite.x, y, "jamur").setScale(0.1);

    return jamurs;
  }
  addCactus(sprite) {
    const y = sprite.y - sprite.displayHeight - 40;
    const kaktus = this.cactus
      .get(sprite.x, y, "cactus")
      .setScale(0.4)
      .setOffset(0, -30);

    return kaktus;
  }
  addMedkit(sprite) {
    const y = sprite.y - sprite.displayHeight;
    const medkits = this.medkit
      .get(sprite.x, y, "medkit")
      .setScale(0.2)
      .setOffset(0, -30);

    return medkits;
  }
  addSusu(sprite) {
    const y = sprite.y - sprite.displayHeight;
    const susus = this.susu
      .get(sprite.x, y, "susu")
      .setScale(0.1)
      .setOffset(0, -110);

    return susus;
  }
  cactusMati(player, cactus) {
    this.sound.play("dung");
    cactus.destroy();
    this.lifeLabel.subtratc(2);
    if (this.lifeLabel.getLife() == 2) {
      player.setTint(0xf00000);
    } else if (this.lifeLabel.getLife() == 1) {
      player.setTint(0xf00000).setAlpha(0.2);
    } else if (this.lifeLabel.getLife() == 0) {
      this.scene.start("lose-scene");
      this.sound.stopAll();
    }
  }
  zombieNyerang(player, enemyTerbang) {
    this.sound.stopByKey("zombie");
    this.sound.play("playerHit");
    enemyTerbang.destroy();
    this.lifeLabel.subtratc(2);

    if (this.lifeLabel.getLife() == 2) {
      player.setTint(0xf00000);
    } else if (this.lifeLabel.getLife() == 1) {
      player.setTint(0xf00000).setAlpha(0.2);
    } else if (this.lifeLabel.getLife() == 0) {
      this.scene.start("lose-scene");
      this.sound.stopAll();
    }
  }
  zombieCeweNyerang(player, zombieCewek) {
    this.sound.stopByKey("zombie");
    this.sound.play("playerHit");
    zombieCewek.destroy();
    this.lifeLabel.subtratc(2);

    if (this.lifeLabel.getLife() == 2) {
      player.setTint(0xf00000);
    } else if (this.lifeLabel.getLife() == 1) {
      player.setTint(0xf00000).setAlpha(0.2);
    } else if (this.lifeLabel.getLife() == 0) {
      this.scene.start("lose-scene");
      this.sound.stopAll();
    }
  }
  frezz(player, jamur) {
    this.player.setTint(0xff0000);
    this.player.active = false;
    this.player.setVelocity(0, 0);
    this.time.delayedCall(2000, () => {
      this.tweens.add({
        targets: this.jamur,
        y: "+=50",
        alpha: 0,
        scale: 0,
        duration: 300,
        onComplete: () => {
          jamur.destroy();
          this.player.active = true;
          this.player.clearTint();
        },
      });
    });
  }
  spawnPesawat() {
    const config = {
      speed: this.enemySpeed,
      rotation: 0,
    };
    const scrollX = this.cameras.main.scrollX;
    // @ts-ignore
    const PesawatNakal = this.pesawatLewat
      .get(0, 0, "pesawatLewat", config)
      .setScale(1);
    this.anims.create({
      key: "pesawatDajjal",
      frames: this.anims.generateFrameNumbers("pesawatLewat", {
        start: 0,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    });
    if (PesawatNakal) {
      PesawatNakal.setFlipX(true);
      PesawatNakal.anims.play("pesawatDajjal", true);
      this.sound.play("lalat");
      PesawatNakal.spawn(scrollX + 800);
    }
  }
  spawnRobot(sprite, time) {
    this.sound.play("robot2");
    const y = sprite.y - sprite.displayHeight - 60;
    const robot = this.enemyTerbang
      .get(sprite.x, y, "enemyTerbang")
      .setScale(2.9)
      .setOffset(0, -10);
    this.anims.create({
      key: "enemyTerbang",
      frames: this.anims.generateFrameNumbers("enemyTerbang", {
        start: 0,
        end: 4,
      }),
      frameRate: 10,
      repeat: -1,
    });
    if (robot.body) {
      const randomVelocity = Phaser.Math.Between(-50, -150);
      const headsOrTails = Phaser.Math.Between(0, 100);
      robot.body.setVelocityY(-30);
      if (headsOrTails) {
        robot.body.setVelocityX(randomVelocity);
        robot.setFlipX(true);
        robot.anims.play("enemyTerbang", true);
      }
    }

    return robot;
  }
  spawnZombieCewek(sprite, time) {
    this.sound.play("zombie");
    const y = sprite.y - sprite.displayHeight - 60;
    const zombie = this.enemyTerbang
      .get(sprite.x, y, "zombieCewek")
      .setScale(0.8)
      .setOffset(0, -30);
    this.anims.create({
      key: "zombieJalan",
      frames: this.anims.generateFrameNumbers("zombieCewek", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });
    if (zombie.body) {
      const randomVelocity = Phaser.Math.Between(-50, -150);
      const headsOrTails = Phaser.Math.Between(0, 100);
      zombie.body.setVelocityY(-30);
      if (headsOrTails) {
        zombie.body.setVelocityX(randomVelocity);
        zombie.setFlipX(true);
        zombie.anims.play("zombieJalan", true);
      }
    }
    return zombie;
  }
  PesawatMati(slash, pesawat) {
    slash.erase();
    pesawat.die();
    this.scoreLabel.add(1);
  }
  cactusKebakar(fire, cactus) {
    fire.erase();
    cactus.die();
    this.scoreLabel.add(1);
  }
  JamurKebakar(fire, jamur) {
    fire.erase();
    jamur.die();
    this.scoreLabel.add(1);
  }
  zombieMati(slash, enemyTerbang) {
    this.sound.stopByKey("zombie");
    this.sound.play("zombieMati");
    slash.erase();
    enemyTerbang.die();
    this.scoreLabel.add(2);
  }
  zombieCewekMati(slash, zombieCewek) {
    this.sound.stopByKey("zombie");
    this.sound.play("zombieMati");
    slash.erase();
    zombieCewek.die();
    this.scoreLabel.add(2);
  }
  createPortal() {
    const x = 27000;
    const portal = this.physics.add
      .sprite(x, 300, "portal")
      .setScale(0.6)
      .setOffset(0, -30);
    portal.body.allowGravity = false;
    return portal;
  }
  nextStage() {
    this.sound.stopAll();
    this.sound.play("portal");
    this.scene.start("win-scene");
    this.sound.stopAll();
  }
  createScoreLabel(x, y, score) {
    const style = { fontSize: "20px", fill: "#FFAA01" };
    const label = new ScoreLabel(this, x, y, score, style).setDepth(1);
    this.add.existing(label);
    return label;
  }
  createLifeLabel(x, y, life) {
    const style = { fontSize: "19px", fill: "#FF0101" };
    const label = new LiveLabel(this, x, y, life, style).setDepth(1);
    this.add.existing(label);
    return label;
  }
  decreaseLife(player, pesawat) {
    // this.sound.stopByKey('lalat')
    // this.sound.play('playerHit')
    pesawat.die();
    this.lifeLabel.subtratc(2);
    if (this.lifeLabel.getLife() == 2) {
      player.setTint(0xf00000);
    } else if (this.lifeLabel.getLife() == 1) {
      player.setTint(0xf00000).setAlpha(0.2);
    } else if (this.lifeLabel.getLife() <= 0) {
      this.scene.start("lose-scene");
      this.sound.stopAll();
    }
  }
  increaseLife(player, medkit) {
    this.sound.play("looting");
    medkit.die();
    this.lifeLabel.add(1);
    if (this.lifeLabel.getLife() >= 3) {
      player.clearTint().setAlpha(2);
    }
  }
  susuScore(player, susu) {
    this.sound.play("looting");
    susu.die();
    this.scoreLabel.add(1);
  }
}
