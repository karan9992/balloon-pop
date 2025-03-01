import Phaser from "phaser";
export default class TitleScreen extends Phaser.Scene
{
    preload(){

    }


    create(){
        this.add.text(300,400, 'HIIII')
    }
}