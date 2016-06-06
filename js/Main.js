var canvas, canvasContext;
var showStartScreen = true;

var greenWarrior = new warriorClass();
var greenMonster = new monsterClass();
var greenMonster2 = new monsterClass();

var audio_game = new sound('images/02-overworld.mp3');
var audio_end = new sound('images/10-ending.mp3');
var audio_meow = new sound('images/Meow.ogg');

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0,0, canvas.width,canvas.height, 'black');
	colorText("LOADING IMAGES", canvas.width/2,canvas.height/2, 'white')
	
	loadImages();
	canvas.addEventListener('mousedown', handleMouseClick);
}

function handleMouseClick() {
	if (showStartScreen) {
		showStartScreen = false;
		loadLevel(levelArray[0]);
	}
}

function imageLoadingDoneSoStartGame() {
	
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	
	setupInput();
	//loadLevel(levelOne);
	loadLevel(levelArray[0]);
}

function loadLevel(whichLevel) {
	if(showStartScreen) {
		clearScreen();
		colorText("Click to continue", 400, 500, 'white');
		return;
	}
	worldGrid = whichLevel.slice();
	greenWarrior.reset(warriorPic, "Green Warrior");
	greenMonster.reset(monsterPic1_0, "Green Monster", 0.9, 0);
	greenMonster2.reset(monsterPic2_0, "Green Monster 2", 0, 1);
	//yellowWarrior.reset(otherWarriorPic, "Yellow Warrior");
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	if(showStartScreen) {
		audio_game.stop();
		audio_end.stop();
		return;
	}
	greenWarrior.move();
	greenMonster.move();
	greenMonster2.move();
	//yellowWarrior.move();
	if (greenWarrior.level == 3) {
		audio_game.stop();
		audio_end.play();
		console.log(greenWarrior.level);
	}else{
		audio_game.play();
		console.log(greenWarrior.level);
	}
}

function clearScreen() {
	colorRect(0,0, canvas.width,canvas.height, 'black'); // clear screen
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

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
