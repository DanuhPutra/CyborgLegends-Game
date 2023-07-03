import Phaser from "phaser";
export default class Laser extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);{
            this.setScale(0.1)
            this.speed = 900
        }
    }
    fire (x,y){
        this.setPosition(x + 3 ,y +1)
        this.setActive(true)
        this.setVisible(true)
        this.setGravity(-200)
    }
    erase(){
        this.destroy()
    }
    update(time){
        this.setVelocityX(this.speed * +1)
        if (this.body.collideWorldBounds){
            this.erase()
        }

    }
}