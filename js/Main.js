var canvas, canvasContext;
var showStartScreen = true;

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
		return;
	}
	
	if (greenWarrior.level == levelArray.length-1) {
		audio_game.stop();
		audio_end.play();
	}else{
		audio_game.play();
	}
}

function moveAll() {
	if(showStartScreen) {
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
	drawWorlds();
	//yellowWarrior.draw();
	greenWarrior.draw();
	greenMonster.draw();
	greenMonster2.draw();
}
