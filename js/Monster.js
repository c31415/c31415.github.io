const MONSTER_WALKING_SPEED = 6.0;
var monsterDirection = 1;

function monsterClass() {
	
	this.x = 0;
	this.y = 0;
	this.ang = 0;
	this.myMonsterPic; 
	this.name = "Untitled Monster";
	this.level = 0;
	
	//this.keyHeld_Up = false;
	//this.keyHeld_Down = false;
	//this.keyHeld_TurnLeft = false;
	//this.keyHeld_TurnRight = false;

	//this.controlKeyUp;
	//this.controlKeyRight;
	//this.controlKeyDown;
	//this.controlKeyLeft;
	
	//this.setupInput = function(upKey, rightKey, downKey, leftKey) {
	//	this.controlKeyUp = upKey;
	//	this.controlKeyRight = rightKey;
	//	this.controlKeyDown = downKey;
	//	this.controlKeyLeft = leftKey;
	//}
	
	this.reset = function(whichImage, monsterName) {
		this.name = monsterName;
		this.keysHeld = 0;
		this.myMonsterPic = whichImage;
		
		for(var eachRow=0;eachRow<WORLD_ROWS;eachRow++) {
			for(var eachCol=0;eachCol<WORLD_COLS;eachCol++) {
				var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
				if(worldGrid[arrayIndex] == WORLD_MONSTERSTART) {
					worldGrid[arrayIndex] = WORLD_ROAD;
					this.x = eachCol * WORLD_W + WORLD_W/2;
					this.y = eachRow * WORLD_H + WORLD_H/2;
					return;
				} // end of player start if
			} // end of col for
		} // end of row for
	}// end ar warriorReset func

	
	this.move = function() {
		var nextX = this.x;
		var nextY = this.y; 
	
		var walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY);
		
		switch (walkIntoTileIndex) {
			case WORLD_ROAD:
				//this.x = nextX;
				this.y +=MONSTER_WALKING_SPEED * monsterDirection;
				break;
			case WORLD_WALL:
				monsterDirection = -monsterDirection;
				//console.log(MONSTER_WALKING_SPEED* monsterDirection);
				this.y +=MONSTER_WALKING_SPEED * monsterDirection;
				break;
			default:
				break;
		}

		if (this.x > greenWarrior.x-20 && this.x < greenWarrior.x+20 &&
		    this.y > greenWarrior.y-20 && this.y < greenWarrior.y+20) {
			console.log("hit");
			greenWarrior.level = 0;
			loadLevel(levelOne);
		}
	}

	this.draw = function() {
		drawBitmapCenteredWithRotation(this.myMonsterPic, this.x, this.y, this.ang);
	}
}// end of warriorClass