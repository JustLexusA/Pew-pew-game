function preload() {
	//soundFormats('mp3', 'ogg')
	arenasurface = loadImage('Textures/grass.jpg')
	// Tank sounds
	tankMovement = loadSound('Sounds/freesound_community-driving-tank-engine-88503.mp3')
	// tankExplode = loadSound('Sounds/lumora_studios-pixel-explosion-319166.mp3')
	// bulletShoot = loadSound('Sounds/freesound_community-cannon-explosion-39434.mp3')
	// BulletHit = loadSound('Sounds/universfield-powerful-cannon-shot-02-487887.mp3')



	// if (!mysoundThrust.isPlaying()) { helps with limiting the sound to one at a time, but it is still buggy and can cause the sound to stop playing if the key is pressed too fast
	// 		mysoundThrust.play()
	// 	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	rectMode(CENTER);
	angleMode(DEGREES);
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

function keyPressed() {
	if (key === 'p' || key === 'P') {
		if (gameMode === gameplay) {
			gameMode = pause;
		} else if (gameMode === pause) {
			gameMode = gameplay;
		}
	}
}


// Use this to make tanks appear, put in gamemode
//tanks.forEach(tank => {
//	tank.draw();
//	tank.update();
//});