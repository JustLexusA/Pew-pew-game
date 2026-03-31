function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	rectMode(CENTER);
	setVariables();
}

function draw() {
	clear();
	background('white')
	tanks.forEach(tank => {
		tank.draw();
		tank.update();
	});
	// startMenu()
	// gameplayScreen()
	// pauseScreen()
}