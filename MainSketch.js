function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	gameMode = 0;

	leftwall = Math.floor((windowWidth ) / 2)
	roof = Math.floor((windowHeight ) / 2)
	ArenaWidth = windowWidth * 0.9
	ArenaHeight = windowHeight * 0.9
}

function draw() {
	clear()
	
	
	
	// Checks if the current screen should be start, gameplay, pause or shop and runs the corresponding function
switch (gameMode) {
	case start:
		startMenu();
		break;
	case gameplay:
		gameplayScreen();
		break;
	case pause:
		pauseScreen();
		break;
	}
}
function keyPressed() {
	if (key === 'p' || key === 'P') {
		if (gameMode === gameplay) {
			gameMode = pause;
		} else if (gameMode === pause) {
			gameMode = gameplay;
		}
	}
}	