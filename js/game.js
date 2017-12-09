// game data
var data = {
    game: null,
    gameWidth: 500
};

// main trigger
$(function () {
    data.gameWidth = $('.panel-body').width();
    init();
});

// intialize the game world
function init() {
    console.log("init");
    if (data.game == null) {
        data.game = new Phaser.Game(data.gameWidth, 500, Phaser.AUTO, 'game', {preload: preload, create: create, update: update, render: render});
    }
}

/**
 * preload resources
 */
function preload() {
    console.log("preload");
    data.game.load.image('background', 'assets/images/_11_background.png');
}


function create() {
    console.log("create");
    data.game.physics.startSystem(Phaser.Physics.ARCADE);

    data.game.stage.backgroundColor = '#000000';

    var bg = data.game.add.tileSprite(0, 0, data.gameWidth, 500, 'background');
    bg.fixedToCamera = true;

}

function update() {

}

function render() {

}