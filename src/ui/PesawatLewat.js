import Phaser from "phaser";
export default class pesawatLewat extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x , y , texture , config){
        super(scene, x , y, texture)
        this.scene = scene
        this.speed = config.speed
        this.rotationVal = config.rotation
    }   
    spawn(y) {
        const positionX = Phaser.Math.Between(1000, 2000)
        const positionY = Phaser.Math.Between(300, 310)
        this.setPosition(y, positionY)
        this.setActive(true)
        this.setVisible(true) 
        this.setGravity(-300)
    }
    die (){
        this.destroy()
    }
    update (time){
        this.setVelocityY(this.speed)
        this.rotation += this.rotationVal
        const gameWidth = this.scene.scale.width

        if (this.x < gameWidth - 1100){
            this.die()
        }
    }
}