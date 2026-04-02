function preload() {
<<<<<<< HEAD
	img = loadImage('Textures/images (1).jpg')
=======
	arenasurface = loadImage('Textures/grass.jpg')
>>>>>>> ebb84af4a14c621f91c19786a00bf96f9408a8ff
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