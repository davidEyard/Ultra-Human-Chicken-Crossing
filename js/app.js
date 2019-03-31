const player = new Player();
const allEnemies = [...Array(12)].map((_,i)=> new Enemy(0,i+1));


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'left',     //A
        87: 'up',       //W
        68: 'right',    //D
        83: 'down'      //S

    };

    player.handleInput(allowedKeys[e.keyCode]);
});

