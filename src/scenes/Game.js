import Phaser from "phaser";

export default class TitleScreen extends Phaser.Scene
{
    preload(){
        
        this.load.image('background','D:/Projects/js_game/game/img/background.png')
        this.load.image('machine', 'img/machine.png');
        this.load.image('handle', './img/handle.png');
        this.load.image('nozzle', 'img/nozzle.png');

        this.load.image('bal1', 'img/balloon1.png');

    }

    create(){
        this.add.image(0,0,'background')
        let handle = this.add.image(1100,420,'handle').setInteractive();
        handle.scale=0.5;   

        const ball = this.add.circle(600,360,20, 0xffffff, 1)
        this.physics.add.existing(ball)
    }
}
