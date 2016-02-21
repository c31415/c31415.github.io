var warriorPic = document.createElement("img");
var monsterPic = document.createElement("img");
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
		{varName: monsterPic, theFile: "monster.png"},
		
		{worldType: WORLD_ROAD, theFile: "road.png"},
		{worldType: WORLD_WALL, theFile: "wall.png"},
		{worldType: WORLD_FINISH, theFile: "world_goal.png"},
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