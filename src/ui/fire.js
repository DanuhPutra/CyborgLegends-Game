import Phaser from "phaser";
export default class Fire extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);{
            this.setScale(2)
            this.speed = 600
        }
    }
    api (x,y){
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