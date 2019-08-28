function Paddle(posX){
	this.x = posX;
	this.y = (height/2) - (scl*2);

	this.show = function(){
		fill(255);
		rectMode(CORNER);
		rect(this.x, this.y, scl, scl*5);
	}
	this.move = function(dir){
		this.y += dir;
		this.y = constrain(this.y, 0,height-(scl*5));
	}

}