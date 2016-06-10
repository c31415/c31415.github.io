var canvas, canvasContext;
var showStartScreen = true;
var showGameOverScreen = false;
var showGameWonScreen = false;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0,0, canvas.width,canvas.height, 'black');
	colorText("LOADING IMAGES", canvas.width/2,canvas.height/2, 'white')
	
	loadImages();
}

function imageLoadingDoneSoStartGame() {
	
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	
	setupInput();
	//loadLevel(levelOne);
	loadLevel(levelArray[0]);
}

function updateAll() {
	moveAll();
	drawAll();
	audioAll();
}

function audioAll() {
	if(showStartScreen) {
		audio_game.stop();
		audio_end.stop();
		audio_win.stop();
		return;
	}
	if(showGameOverScreen) {
		audio_game.stop();
		audio_end.stop();
		audio_win.stop();
		return;
	}
	if(showGameWonScreen) {
		audio_game.stop();
		audio_end.stop();
		audio_win.play();
		return;
	}
	
	if (greenWarrior.level == levelArray.length-1) {
		audio_game.stop();
		audio_win.stop();
		audio_end.play();
	}else{
		audio_win.stop();
		audio_game.play();
	}
}

function moveAll() {
	if(showStartScreen || showGameOverScreen || showGameWonScreen) {
		return;
	}
	greenWarrior.move();
	greenMonster.move();
	greenMonster2.move();
	//yellowWarrior.move();

}

function drawAll() {
	if(showStartScreen) {
		drawBitmapCenteredWithRotation(startScreen, 400, 300, 0);
		return;
	}
	if(showGameWonScreen) {
		drawBitmapCenteredWithRotation(winScreen, 400, 300, 0);
		return;
	}
	if (showGameOverScreen) {
		//clearScreen();
		
		canvasContext.font="30px Verdana";
		// Create gradient
		var gradient=canvasContext.createLinearGradient(0,0,canvas.width,0);
		gradient.addColorStop("0","magenta");
		gradient.addColorStop("0.5","blue");
		gradient.addColorStop("1.0","red");
		// Fill with gradient
		canvasContext.fillStyle=gradient;
		canvasContext.fillText("Don't Give up! Try again!",280,300);
		return;
	}
	if (showGameWonScreen) {
		return;
	}
	
	drawWorlds();
	//yellowWarrior.draw();
	greenWarrior.draw();
	greenMonster.draw();
	greenMonster2.draw();
}
