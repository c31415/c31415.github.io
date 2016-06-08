const MONSTER_WALKING_SPEED_X = 6.0;
const MONSTER_WALKING_SPEED_Y = 6.0;

var greenMonster = new monsterClass();
var greenMonster2 = new monsterClass();

//var monsterDirection = 1;
//var monsterBuffer = 20;

function monsterClass() {
	
	this.x = 0;
	this.y = 0;
	this.ang = 0;
	this.myMonsterPic; 
	this.name = "Untitled Monster";
	this.level = 0;
	this.monsterDirection_x = 0;
	this.monsterDirection_y = 0;
	this.monsterBuffer = 20;
	
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
	
	this.reset = function(whichImage, monsterName, x_speed, y_speed) {
		this.name = monsterName;
		this.keysHeld = 0;
		this.myMonsterPic = whichImage;
		this.monsterDirection_x = x_speed;
		this.monsterDirection_y = y_speed;
		
		for(var eachRow=0;eachRow<WORLD_ROWS;eachRow++) {
			for(var eachCol=0;eachCol<WORLD_COLS;eachCol++) {
				var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
				if(worldGrid[arrayIndex] == WORLD_MONSTERSTART) {
					worldGrid[arrayIndex] = WORLD_ROAD;
					this.x = eachCol * WORLD_W + WORLD_W/2;
					this.y = eachRow * WORLD_H + WORLD_H/2;
					return;
				}
				if(worldGrid[arrayIndex] == WORLD_MONSTERSTART2) {
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
	
		var walkIntoTileIndex = getTileTypeAtPixelCoord(nextX+this.monsterBuffer, nextY+this.monsterBuffer);
		
		switch (walkIntoTileIndex) {
			case WORLD_ROAD:
				//this.x = nextX;
				this.y +=MONSTER_WALKING_SPEED_Y * this.monsterDirection_y;
				this.x +=MONSTER_WALKING_SPEED_X * this.monsterDirection_x;
				this.monsterBuffer = -this.monsterBuffer;
				break;
			case WORLD_WALL:
				this.monsterDirection_y = -this.monsterDirection_y;
				this.monsterDirection_x = -this.monsterDirection_x;
				//console.log(MONSTER_WALKING_SPEED* this.monsterDirection);
				this.y +=MONSTER_WALKING_SPEED_Y * this.monsterDirection_y;
				this.x +=MONSTER_WALKING_SPEED_X * this.monsterDirection_x;
				this.monsterBuffer = -this.monsterBuffer;
				break;
			case WORLD_FINISH:
				this.monsterDirection_y = -this.monsterDirection_y;
				this.monsterDirection_x = -this.monsterDirection_x;
				//console.log(MONSTER_WALKING_SPEED* this.monsterDirection);
				this.y +=MONSTER_WALKING_SPEED_Y * this.monsterDirection_y;
				this.x +=MONSTER_WALKING_SPEED_X * this.monsterDirection_x;
				this.monsterBuffer = -this.monsterBuffer;
				break;
			case WORLD_KEY:
				this.monsterDirection_y = -this.monsterDirection_y;
				this.monsterDirection_x = -this.monsterDirection_x;
				//console.log(MONSTER_WALKING_SPEED* this.monsterDirection);
				this.y +=MONSTER_WALKING_SPEED_Y * this.monsterDirection_y;
				this.x +=MONSTER_WALKING_SPEED_X * this.monsterDirection_x;
				this.monsterBuffer = -this.monsterBuffer;
				break;
			case WORLD_DOOR:
				this.monsterDirection_y = -this.monsterDirection_y;
				this.monsterDirection_x = -this.monsterDirection_x;
				//console.log(MONSTER_WALKING_SPEED* this.monsterDirection);
				this.y +=MONSTER_WALKING_SPEED_Y * this.monsterDirection_y;
				this.x +=MONSTER_WALKING_SPEED_X * this.monsterDirection_x;
				this.monsterBuffer = -this.monsterBuffer;
				break;
			default:
				break;
		}

		if (this.x > greenWarrior.x-20 && this.x < greenWarrior.x+20 &&
		    this.y > greenWarrior.y-20 && this.y < greenWarrior.y+20) {
			console.log("hit");
			clearScreen();
			greenWarrior.level = 0;
			//showStartScreen = true;
			showGameOverScreen = true;
		}
	}

	this.draw = function() {
		drawBitmapCenteredWithRotation(this.myMonsterPic, this.x, this.y, this.ang);
	}
}// end of warriorClass