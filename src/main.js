/** @type {import(" ../typings/phaser")}*/

let gameScene = new Phaser.Scene('Game');
var count = 0;
var imageCount = 0;  
var button;          
var images = [];      


gameScene.preload = function () {
    this.load.image("back", 'img/background.png');
    this.load.image('machine', 'img/machine.png');
    this.load.image('handle', 'img/handle.png');
    this.load.image('nozzle', 'img/nozzle.png');
    this.load.image('myImage', 'img/ball.png');
    this.load.image('bal1', 'img/Symbol 100001.png');
    this.load.image('button', 'img/button.jpg');
    


   

}

gameScene.create = function () {
    this.background = this.add.tileSprite(640, 360, 1280, 720, 'back');

    let handle = this.add.image(1100, 420, 'handle').setInteractive();
    handle.scale = 0.5;


   

    handle.on('pointerup', function (pointer) {

       
        handle.scale = 0.5;
        machine.scaleX=0.6;
        handle.setPosition(1100, 420,);

    });
    handle.on('pointerout', function (pointer) {

      
        handle.scale = 0.5;
        machine.scaleX=0.6;
        handle.setPosition(1100, 420,);

    });


    let machine = this.add.image(1100, 600, 'machine');
    machine.scale = 0.6;

    let nozzle = this.add.image(940, 590, 'nozzle');
    nozzle.scale = 0.5;

    handle.on('pointerdown', function () {
        
       
        handle.scale = 0.2;
        machine.scaleX=0.7;
        handle.setPosition(1100, 520,);
        count++;
        console.log(count,images[imageCount]);
      
        if (count==4) {
            count=0;
            createImage(this);
        }
    }, this);

    
    
}


function createImage(scene) {
  
    var image = scene.physics.add.image(877, 500, 'myImage');
   
    image.setInteractive();
    image.scale=0.2;
    image.setCollideWorldBounds(true);
    var randomNum = Phaser.Math.Between(-100, 100);
    console.log(randomNum);
    image.setGravity(randomNum, -10);
    

    
    image.on('pointerdown', function () {
        image.setVisible(false);  // This makes the image disappear
    });

    
    images.push(image);
    

    imageCount++;

    
}




gameScene.update = function () {
    

}




const config = {
    width: 1200,
    height: 720,
    type: Phaser.AUTO,
    scene: gameScene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: -10 , x : -10}
        }
    }
}

const game = new Phaser.Game(config)




