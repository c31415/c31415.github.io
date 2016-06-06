
const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;


const KEY_A = 65;
const KEY_W = 87;
const KEY_D = 68;
const KEY_S = 83;

var mouseX = 0;
var mouseY = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);
		
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	greenWarrior.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
	//yellowWarrior.setupInput(KEY_W, KEY_D, KEY_S, KEY_A);
}
function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	// cheat / hack to test warrior in any position
	/*warriorX = mouseX;
	warriorY = mouseY;
	warriorSpeedX = 4;
	warriorSpeedY = -4;*/
}

function keySet(keyEvent, whichWarrior, setTo) {
	if( keyEvent.keyCode == whichWarrior.controlKeyLeft) {
		whichWarrior.keyHeld_TurnLeft = setTo;
	}
	if (keyEvent.keyCode == whichWarrior.controlKeyUp) {
		whichWarrior.keyHeld_Up = setTo;
	}
	if (keyEvent.keyCode == whichWarrior.controlKeyRight) {
		whichWarrior.keyHeld_TurnRight = setTo;
	}
	if (keyEvent.keyCode == whichWarrior.controlKeyDown) {
		whichWarrior.keyHeld_Down = setTo;
	}
	
	keyEvent.preventDefault();
}

function keyPressed(evt) {
	//console.log("Key pressed: " + evt.keyCode);
	keySet(evt, greenWarrior, true);
	//keySet(evt, yellowWarrior, true);
}

function keyReleased(evt) {
	//console.log("Key released: " + evt.keyCode);
	keySet(evt, greenWarrior,false);
	//keySet(evt, yellowWarrior,false);
}
