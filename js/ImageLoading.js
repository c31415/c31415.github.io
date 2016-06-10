var warriorPic = document.createElement("img");
var monsterPic1_0 = document.createElement("img");
var monsterPic1_1 = document.createElement("img");
var monsterPic2_0 = document.createElement("img");
var monsterPic2_1 = document.createElement("img");

var startScreen = document.createElement("img");
var winScreen = document.createElement("img");
var worldPics = [];

var picsToLoad = 0;

 function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	if(picsToLoad == 0) {
		imageLoadingDoneSoStartGame();
	}
}

function beginLoadingImage(imgPic, fileName) {
	imgPic.onload = countLoadedImagesAndLaunchIfReady();
	imgPic.src = "images/" + fileName;
}

function loadImageForWorldCode(worldCode, fileName) {
	worldPics[worldCode] = document.createElement("img");
	beginLoadingImage(worldPics[worldCode], fileName);
}
function loadImages() {
	var imageList = [
		{varName: warriorPic, theFile: "warrior.png"},
		{varName: monsterPic1_0, theFile: "monster1_0.png"},
		{varName: monsterPic1_1, theFile: "monster1_1.png"},
		{varName: monsterPic2_0, theFile: "monster2_0.png"},
		{varName: monsterPic2_1, theFile: "monster2_1.png"},
		{varName: startScreen, theFile: "Luke.png"},
		{varName: winScreen, theFile: "end_game.png"},
		
		{worldType: WORLD_ROAD, theFile: "road.png"},
		{worldType: WORLD_WALL, theFile: "wall.png"},
		{worldType: WORLD_FINISH, theFile: "wife_goal.png"},
		{worldType: WORLD_RING, theFile: "ring_goal.png"},
		{worldType: WORLD_DRESS, theFile: "dress_goal.png"},
		{worldType: WORLD_CAKE, theFile: "cake_goal.png"},
		{worldType: WORLD_KEY, theFile: "world_key.png"},
		{worldType: WORLD_DOOR, theFile: "world_door.png"}
		];
		
	picsToLoad = imageList.length;
	
	for(var i = 0; i < imageList.length; i++) {
		if(imageList[i].varName != undefined) {
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} else {
			loadImageForWorldCode( imageList[i].worldType, imageList[i].theFile);
		}
	}
}