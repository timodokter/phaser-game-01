var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
          gravity: { y: 300},
          debug: false
      }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var platforms;
var player;

var game = new Phaser.Game(config);

function preload () {
    //images
    this.load.image("star", "assets/star.png");
    this.load.image("sky", "assets/sky.png");
    this.load.image("ground", "assets/platform.png");
    this.load.image("bomb", "assets/bomb.png");

    //spritesheet
    this.load.spritesheet("dude", "assets/dude.png", {
        frameWidth: 32,
        frameHeight: 48
    });
}

function create () {

    //background
    this.add.image(400, 300, "sky")

    //ground
    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, "ground").setScale(2).refreshBody();

    platforms.create(600, 400, "ground");
    platforms.create(50, 250, "ground");
    platforms.create(750, 220, "ground");


    //player
    player = this.physics.add.sprite(100, 450, "dude");

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("dude", {start: 0, end: 3}),
        framerate: 10,
        repeat: -1
    });

    this.anims.create({
        key: "turn",
        frames: [ { key: "dude", frame: 4} ],
        framerate: 20
    });

    this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("dude", {start: 5, end: 8}),
        framerate: 10,
        repeat: -1
    });

    this.physics.add.collider(player, platforms);

    // //star
    // this.add.image(400, 300, "star")
}

function update () {
}