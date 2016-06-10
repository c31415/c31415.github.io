const WORLD_W = 40;
const WORLD_H = 40;
const WORLD_GAP = 2;
const WORLD_COLS = 20;
const WORLD_ROWS = 15;

const WORLD_ROAD = 0;
const WORLD_WALL = 1;
const WORLD_PLAYERSTART = 2;
const WORLD_MONSTERSTART = 9;
const WORLD_MONSTERSTART2 = 8;
const WORLD_FINISH = 3;
const WORLD_RING = 6;
const WORLD_DRESS = 7;
const WORLD_CAKE = 10;
const WORLD_KEY = 4;
const WORLD_DOOR = 5;

var worldGrid = [];
				 
function tileTypeHasTransparency(checkTileType) {
	return( checkTileType == WORLD_FINISH ||
			checkTileType == WORLD_KEY ||
			checkTileType == WORLD_DOOR ||
			checkTileType == WORLD_RING ||
			checkTileType == WORLD_DRESS ||
			checkTileType == WORLD_CAKE );
}	
				 
function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < WORLD_COLS &&
		row >= 0 && row < WORLD_ROWS) {
		 var worldIndexUnderCoord = rowColToArrayIndex(col, row);
		 return (worldGrid[worldIndexUnderCoord]);
	} else {
		return WORLD_WALL;
	}
}


function getWorldIndexFromPixelCoord(atX, atY) {
	var warriorWorldCol = Math.floor(atX / WORLD_W);
	var warriorWorldRow = Math.floor(atY / WORLD_H);
	return rowColToArrayIndex(warriorWorldCol, warriorWorldRow);
}

function getTileTypeAtPixelCoord(atX, atY) {
	var warriorWorldCol = Math.floor(atX / WORLD_W);
	var warriorWorldRow = Math.floor(atY / WORLD_H);
	var worldIndexUnderWarrior = rowColToArrayIndex(warriorWorldCol, warriorWorldRow);

	if(warriorWorldCol >= 0 && warriorWorldCol < WORLD_COLS &&
		warriorWorldRow >= 0 && warriorWorldRow < WORLD_ROWS) {
		var tileHere = returnTileTypeAtColRow( warriorWorldCol,warriorWorldRow );

		return tileHere;
	} // end of valid col and row

	return WORLD_WALL; // treat outside the map boundary as solid area
} // end of warriorWorldHandling func


function rowColToArrayIndex(col, row) {
	return col + WORLD_COLS * row;
}

function drawWorlds() {

	var arrayIndex = 0
	var drawTileX = 0;
	var drawTileY = 0;
	for(var eachRow=0;eachRow<WORLD_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<WORLD_COLS;eachCol++) {
			var tileKindHere = worldGrid[arrayIndex];
			var useImg = worldPics[tileKindHere];
			if (tileTypeHasTransparency(tileKindHere)){
				canvasContext.drawImage(worldPics[WORLD_ROAD], drawTileX,drawTileY);
			}
			canvasContext.drawImage(useImg, drawTileX,drawTileY);
			drawTileX += WORLD_W;
			arrayIndex++;
		} // end of for each world
		drawTileY += WORLD_H;
		drawTileX = 0;
	} // end of for each row

} // end of drawWorlds func
