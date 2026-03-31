function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	rectMode(CENTER);
	setVariables();
}

function draw() {
	clear();
	background('white')

	// this draws tanks, put in correct gamemode
	tanks.forEach(tank => {
		tank.draw();
		tank.update();
	});

	// startMenu()
	// gameplayScreen()
	// pauseScreen()
}