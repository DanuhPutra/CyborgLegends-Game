import Phaser from 'phaser'
export default class Cactus extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture) { 
        super(scene, x, y, texture) 
    
    } 
    die (){
        this.destroy()
    }
}