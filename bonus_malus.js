class Bonus{
    dy;
    x;
    y;
    w;
    h;
    isAlive;
    type;

    constructor(x,y){
        this.dy=1;
        this.x=x;
        this.y=y;
        this.w=10;
        this.h=10;
        this.isAlive=false;
        
        
    }
    show(){
        if(this.isAlive){
            ctx.beginPath();
            ctx.font = "30px Comic Sans MS";
            ctx.fillStyle="green";
            ctx.fillText("B", this.x + 10, this.y + 15);
            ctx.fill();
            ctx.closePath();
        }
    }

    move(){
        if(this.isAlive){ 
            this.y=this.y+this.dy;

            var isAbovePaddle=this.x + this.w > paddle.x && this.x -this.w < paddle.x + paddle.w;
            if(this.y + this.w > canvas.height - paddle.h && isAbovePaddle) {
                paddle.w+=50;
                this.isAlive=false;
            }
        }
    }

}

class Malus{
    dy;
    x;
    y;
    w;
    h;
    isAlive;
    type;

    constructor(x,y){
        this.x=x;
        this.y=y;
        this.dy=1;
        this.w=10;
        this.h=10;
        this.isAlive=false;
        
    }
    show(){
        if(this.isAlive){
            ctx.beginPath();
            ctx.font = "30px Comic Sans MS";
            ctx.fillStyle="red";
            ctx.fillText("M", this.x + 10, this.y + 15);
            ctx.fill();
            ctx.closePath();
        }
    }

    move(){
        if(this.isAlive){

            this.y=this.y+this.dy;
            var isAbovePaddle=this.x + this.w > paddle.x && this.x -this.w < paddle.x + paddle.w;
            if(this.y + this.w > canvas.height - paddle.h && isAbovePaddle) {
                paddle.w-=50;
                this.isAlive=false;
            }
        }
    }

}