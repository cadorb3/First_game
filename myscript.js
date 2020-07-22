var canvas = document.getElementById("test");
var ctx = canvas.getContext("2d");
var ball = new Ball();
var paddle = new Paddle();
var bricks =[];
var bonus =[];
var malus=[];
var nbRow=3;
var nbColumn=4;
var count=nbColumn*nbRow;

let m = 0;
let b = 0;
for(var i = 0 ; i < nbColumn ; i++){
	bricks[i] = [];
	for(var j = 0 ; j < nbRow ; j++){
		bricks[i][j] = new Brick( canvas.width/(2*(nbColumn+1)) + i*canvas.width/(nbColumn+1) , j*(35));
		if(bricks[i][j].type === "malus"){
			malus[m++] = bricks[i][j].malus;

		}else if(bricks[i][j].type === "bonus"){
			bonus[b++] = bricks[i][j].bonus;
		}
	}
}


function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ball.show();
	if(ball.move()){
		alert("GAME OVER");
	    document.location.reload();
	    clearInterval(interval);
	}
	paddle.show();
	paddle.move();

	for(var i=0 ; i<bricks.length;i++){
		for(var j=0 ; j<bricks[i].length; j++){
			if(bricks[i][j].isAlive){

				bricks[i][j].show();
			}
		}	
	}
	for(var i=0;i<bonus.length;i++){
		bonus[i].show();
		bonus[i].move();
	}
	for(var i=0;i<malus.length;i++){
		malus[i].show();
		malus[i].move();
	}

	if(count===0){
		alert("YOU WIN");
		document.location.reload();
	    clearInterval(interval);

	}


}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        paddle.setDir(3);
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        paddle.setDir(-3);
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight" || e.key == "Left" || e.key == "ArrowLeft") {
        paddle.setDir(0);
    }
}

var interval = setInterval(draw, 10);