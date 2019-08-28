function Ball(){
	this.pos = createVector(width/2, height/2);
	this.r = scl;
	this.vel = 5;
	this.mov = createVector(0, 0);

	this.show = function(){
		fill(255);
		ellipseMode(CENTER);
		ellipse(this.pos.x, this.pos.y, this.r);

	}

	this.update = function(){
		this.pos.x += this.mov.x;
		this.pos.y += this.mov.y;
	}

	this.touch = function(){
		if(this.pos.y < PI){
			this.bounce("wall");
		}else if(this.pos.y > height-PI){
			this.bounce("wall");
		}
		else if(this.pos.x < PI){
			alert("RIGHT TEAM SCORES!");
			rscore++;
			document.getElementById("scoreRight").innerHTML = "Right Score: "+rscore;
			this.pos = createVector(width/2,height/2);
			this.setDirection();
		} 
		else if(this.pos.x > width-PI){
			alert("LEFT TEAM SCORES!");
			lscore++;
			document.getElementById("scoreLeft").innerHTML = "Left Score: "+lscore;
			this.pos = createVector(width/2,height/2);
			this.setDirection();
		}
		else if(this.touchingPaddleOne()){
			this.bounce("paddle");
		}
		else if(this.touchingPaddleTwo()){
			this.bounce("paddle");
		}
	}

	this.bounce = function(str){
		if(str === "wall"){
			this.mov = createVector(this.mov.x, this.mov.y * -1);	
		}
		else if(str === "paddle"){
			this.mov = createVector(this.mov.x * -1, this.mov.y+(random(3)*random([1,-1])));
		}
	}

	this.touchingPaddleOne = function(){
		if(this.pos.x < paddle1.x+scl+PI && this.pos.y >= paddle1.y && this.pos.y <= paddle1.y + (scl*5)){
			return true;
		}
		return false;
	}

	this.touchingPaddleTwo = function(){
		if(this.pos.x > paddle2.x-PI && this.pos.y >= paddle2.y && this.pos.y <= paddle2.y + (scl*5)){
			return true;
		}
		return false;
	}

	this.setDirection = function(){
		var c = this.vel;
		var a = random(c/2, c);
		var b = sqrt((sq(c))-(sq(a)));
		this.mov.x = a * random([1, -1]);
		this.mov.y = b * random([1, -1]);
	}
}