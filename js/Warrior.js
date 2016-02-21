const WALKING_SPEED = 7.0;

function warriorClass() {
	
	this.x = 0;
	this.y = 0;
	this.ang = 0;
	this.myWarriorPic; 
	this.name = "Untitled Warrior";
	this.level = 0;
	
	this.keyHeld_Up = false;
	this.keyHeld_Down = false;
	this.keyHeld_TurnLeft = false;
	this.keyHeld_TurnRight = false;

	this.controlKeyUp;
	this.controlKeyRight;
	this.controlKeyDown;
	this.controlKeyLeft;
	
	this.setupInput = function(upKey, rightKey, downKey, leftKey) {
		this.controlKeyUp = upKey;
		this.controlKeyRight = rightKey;
		this.controlKeyDown = downKey;
		this.controlKeyLeft = leftKey;
	}
	
	this.reset = function(whichImage, warriorName) {
		this.name = warriorName;
		this.keysHeld = 0;
		this.myWarriorPic = whichImage;
		
		for(var eachRow=0;eachRow<WORLD_ROWS;eachRow++) {
			for(var eachCol=0;eachCol<WORLD_COLS;eachCol++) {
				var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
				if(worldGrid[arrayIndex] == WORLD_PLAYERSTART) {
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
	
		if(this.keyHeld_Up) {
			nextY -= WALKING_SPEED;
		}
		if(this.keyHeld_Down) {
			nextY += WALKING_SPEED;
		}
		if(this.keyHeld_TurnLeft) {
			nextX -= WALKING_SPEED;
		}
		if(this.keyHeld_TurnRight) {
			nextX += WALKING_SPEED;
		}

		var walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY);
		
		switch (walkIntoTileIndex) {
			case WORLD_ROAD:
				this.x = nextX;
				this.y = nextY;
				break;
			case WORLD_FINISH:
				this.level++;
				if(this.level < levelArray.length) {
					loadLevel(levelArray[this.level]);
				}else{
					this.level = 0;
					loadLevel(levelArray[0]);
				}
				
				break;
			case WORLD_KEY:
				this.keysHeld++;
				worldGrid[getWorldIndexFromPixelCoord(nextX, nextY)] = WORLD_ROAD;
				break;
			case WORLD_DOOR:
				if (this.keysHeld > 0){
				worldGrid[getWorldIndexFromPixelCoord(nextX, nextY)] = WORLD_ROAD;
				this.keysHeld--;
				}
				break;
			default:
				break;
		}
			
	}

	this.draw = function() {
		drawBitmapCenteredWithRotation(this.myWarriorPic, this.x, this.y, this.ang);
	}
}// end of warriorClass