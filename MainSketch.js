function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	gameMode = 0;
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
	case shop:
		shopScreen();
		break;
	}
}