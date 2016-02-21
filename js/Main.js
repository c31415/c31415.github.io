var canvas, canvasContext;

var greenWarrior = new warriorClass();
var greenMonster = new monsterClass();

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

function loadLevel(whichLevel) {
	worldGrid = whichLevel.slice();
	greenWarrior.reset(warriorPic, "Green Warrior");
	greenMonster.reset(monsterPic, "Green Monster");
	//yellowWarrior.reset(otherWarriorPic, "Yellow Warrior");
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	greenWarrior.move();
	greenMonster.move();
	//yellowWarrior.move();
}

function clearScreen() {
	colorRect(0,0, canvas.width,canvas.height, 'black'); // clear screen
}

function drawAll() {
	//clearScreen();
	drawWorlds();
	//yellowWarrior.draw();
	greenWarrior.draw();
	greenMonster.draw();
}
