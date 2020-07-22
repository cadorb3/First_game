class Ball{
	x;
	y;
	dy;
	dx;
	r;
	constructor(){
		
		this.y=500;
		this.r=10;
		this.x=canvas.width/2;
		this.dy=3//Math.floor(Math.random() * 5);
		this.dx=0//Math.floor(Math.random() * 5);
	}

	show(){

	  ctx.beginPath();
	  ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);	
	  ctx.fillStyle = "#0095DD";
	  ctx.fill();
	  ctx.closePath();
	}

	move(){
		this.collision();
		if(this.y > canvas.height-this.r) return true;
		this.x+=this.dx;
		this.y+=this.dy;
		return false;
	}

	collision(){
		var isAbovePaddle=this.x + this.r > paddle.x && this.x -this.r < paddle.x + paddle.w;
		//changes direction when hitting right or left edge of canvas
		if(this.x + this.r > canvas.width || this.x + this.dx - this.r < 0) {
    		this.dx = -this.dx;
		}
		//changes direction when hitting up edge of canvas
		if(this.y < this.r ) {
    		this.dy = -this.dy;
		}
		//changes direction when hitting paddle
		if(this.y + this.r > canvas.height - paddle.h && isAbovePaddle) {
			this.dy=-this.dy;
			this.dx += (this.x - paddle.x  - paddle.w/2)/20	;
		}

		for(var i=0;i<bricks.length;i++){

			for(var j=0;j<bricks[i].length;j++){

				var b = bricks[i][j];

				if(b.isAlive){

					var touchUnder = this.x + this.r  > b.x  && this.x - this.r < b.x + b.w && this.y < b.y + b.h + 2*this.r && this.y > b.y + b.h;
					var touchAbove = this.x + this.r  > b.x  && this.x - this.r < b.x + b.w && this.y > b.y + b.h + 2*this.r && this.y < b.y + b.h;
					var touchRight = this.x > b.x +b.w && this.x < b.x + b.w + 2*this.r && this.y + this.r > b.y && this.y -this.r < b.y + b.h;
					var touchLeft = this.x < b.x && this.x > b.x + 2*this.R  && this.y + this.r > b.y && this.y -this.r < b.y + b.h;

					if( touchUnder || touchAbove){
						this.dy = -this.dy;
						bricks[i][j].hit();
						return true;

					}else if(touchRight || touchLeft){
						this.dx = -this.dx;
						bricks[i][j].hit();
						return true;
					}
				}

			} 
		}
	}

}

