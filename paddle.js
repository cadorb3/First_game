class Paddle{
	x;
	y;
	h;
	w;
	dir;

	constructor(){
		this.y=580;
		this.h=20;
		this.w=60;
		this.dir=0;
		this.x=canvas.width/2 - this.w/2;

	}

	setDir(dir){
		this.dir=dir;
	}

	show(){
		ctx.beginPath();
		ctx.rect(this.x,this.y,this.w,this.h);	
		ctx.fillStyle = "#0095DD";
		ctx.fill();		
		ctx.closePath();

	}

	move(){
		if(this.x<=0) this.x = 1;
		if(this.x + this.w>=canvas.width) this.x=canvas.width -1 - this.w;
		if(this.x>0 && this.x + this.w<canvas.width) this.x+=this.dir;

	}
}