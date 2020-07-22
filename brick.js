class Brick{
	x;
	y;
	h;
	w;
	resistance;
	isAlive;
	type;
	bonus;
	malus;


	constructor(x,y){
		this.x=x;
		this.y=y;
		this.h=30;
		this.w=70;
		this.resistance=Math.ceil(Math.random()*3)
		this.isAlive=true;
		
		let assign=Math.random()*100;
		if(assign<70) this.type="normal";
		else if(assign<85){
			 this.type="bonus";
			 this.bonus=new Bonus(this.x,this.y);
		}
		else{
			this.type="malus";
			this.malus=new Malus(this.x,this.y);
		}

	}

	show(){

		//draws bricks
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.w, this.h);
		switch(this.resistance){
			case 1:
				ctx.fillStyle="#0CA5FB";
				break;
			case 2:
				ctx.fillStyle="#1C6289";
				break;
			case 3:
				ctx.fillStyle="#130450";
				break;
			
		}
        ctx.fill();
		ctx.closePath();

		//Draws the text inside bonus and malus bricks
		ctx.beginPath();
		switch(this.type){
			case "normal":
				break;
			case "bonus":
				ctx.font = "15px Comic Sans MS";
				ctx.fillStyle="#FFFFFF";
				ctx.fillText("Bonus", this.x + 10, this.y + 15);
				
				break;

			case "malus":
				ctx.font = "15px Comic Sans MS";
				ctx.fillStyle="#FFFFFF";
				ctx.fillText("Malus", this.x + 10, this.y + 15);
				
				break;
		}
		ctx.fill();
		ctx.closePath();

	}

	hit(){
		this.resistance--;
		if (this.resistance == 0){
			 this.isAlive=false;
			 if(this.type === "bonus") this.bonus.isAlive=true;
			 else if(this.type === "malus" ){
			 this.malus.isAlive=true;
			 }
			 count--;
		}
	}
}