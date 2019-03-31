class Entity {
    constructor(){
        this.sprite = 'images/';
        this.x = 4;
        this.y = 5;
    }
 update(dt){
     this.isOutOfBoundsX = this.x > 5;
     this.isOutOfBoundsY = this.y < 1;
 }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }

    checkCollisions(playerOrEnemy) {
        if(this.y === playerOrEnemy.y) {
            if (this.x >= playerOrEnemy.x - 0.5 && this.x <= playerOrEnemy.x + 0.5){
                return true;
            }
        }
    }
}


class Player extends Entity {
    constructor() {
        super();
        this.sprite += 'char-boy.png';
        this.moving = false;
        this.win = false;
    }

update(dt){
    super.update();
    if (this.isOutOfBoundsY && !this.moving && !this.win){
        var r = confirm("You won! Want to play again?");
        if (r == true){
        window.location.reload();}
        this.win = true;
        
    }
}

render(){
    super.render();
    this.moving = false;
}
//this code moves the player
    handleInput(input) {
        switch(input) {
            case 'left':
                this.x = this.x > 0 ? this.x - 1: this.x;
                break;
            case 'up':
                this.y = this.y > 0 ? this.y - 1: this.y;
                break;
            case 'right':
                this.x = this.x < 4 ? this.x + 1: this.x;
                break;
            case 'down':
                this.y = this.y < 5 ? this.y + 1: this.y;
                break;
            default:
                break;
        }
        this.moving = true;
    }
    reset(){
        this.x = 2;
        this.y = 5;
        this.win = false;
    }
}

class Enemy extends Entity {
    constructor(x,y,speed){
        super();
        this.sprite += 'enemy-bug.png';
        this.x = (Math.random(x) * 5 | 0) + 1;
        this.y = (Math.random(y) * 3 | 0) + 1;
        this.groundlevel = 1;

        
    }

//change of pace
changeSpeed(high){
    this.speed = 0.5 + Math.random()*high ;
}
resetPace(){
    this.changeSpeed(3.0);
    this.x = -(Math.floor(1 + Math.random() * 5));
}
addNest(thenest) {
    this.thenest = thenest;
}
    update(dt){
        super.update();
        if(this.isOutOfBoundsX){
            //changes location of bug on the x axis
            this.x = -1;
            //changes location of bug on the y axis
            this.y = (Math.random()*3|0)+1;
        }
        else {
            this.x += dt;
        }
    }
}
