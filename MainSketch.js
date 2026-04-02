function preload() {
	arenasurface = loadImage('Textures/grass.jpg')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	rectMode(CENTER);
	setVariables();
}

function draw() {
	clear();
	background('white')

	// startMenu()
	// gameplayScreen()
	// pauseScreen()

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


// Use this to make tanks appear, put in gamemode
//tanks.forEach(tank => {
//	tank.draw();
//	tank.update();
//});