var scl = 20;
var paddle1;
var paddle2;
var ball;
var rscore = 0;
var lscore = 0;
var start = true;

function setup(){
	var canvas = createCanvas(700,500);
	paddle1 = new Paddle(scl);
	paddle2 = new Paddle(width-scl*2);
	ball = new Ball();
	ball.setDirection();
	
}

function draw(){
	background(0);
	paddle1.show();
	paddle2.show();
	ball.show();
	ball.update();
	ball.touch();
	movement();
	if(start == true){
		alert("CONTROLS:\nLEFT PADDLE: shift(up) ctrl(down)\nRIGHT PADDLE: up and down arrows\nPRESS OK TO START!");
		start = false;	
	}
	
}

function movement(){
	if(keyCode == 32){
		alert("PAUSED");
		keyCode = 0;
	}
	else if(keyIsDown(UP_ARROW) && keyIsDown(SHIFT)){
		paddle1.move(-10);
		paddle2.move(-10);
	}
	else if(keyIsDown(UP_ARROW) && keyIsDown(CONTROL)){
		paddle1.move(10);
		paddle2.move(-10);
	}
	else if(keyIsDown(DOWN_ARROW) && keyIsDown(SHIFT)){
		paddle1.move(-10);
		paddle2.move(10);
	}
	else if(keyIsDown(DOWN_ARROW) && keyIsDown(CONTROL)){
		paddle1.move(10);
		paddle2.move(10);
	}
	else if(keyIsDown(UP_ARROW)){
		paddle2.move(-10);
	}
	else if(keyIsDown(DOWN_ARROW)){
		paddle2.move(10);
	}
	else if(keyIsDown(SHIFT)){
		paddle1.move(-10);
	}
	else if(keyIsDown(CONTROL)){
		paddle1.move(10);
	}
}