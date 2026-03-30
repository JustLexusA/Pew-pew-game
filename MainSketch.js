function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	angleMode(DEGREES);
	rectMode(CENTER);
	gameMode = 0;
	tanks.push(
		new tank('blue', 100, 100, 10),
		new tank('red', 200, 100, 10),
		new tank('green', 300, 100, 10),
		new tank('yellow', 400, 100, 10),
		new playerTank(87, 83, 65, 68, 'cyan', 500, 100, 10),
		// new playerTank(UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, 'cyan', 500, 100, 10)
	);
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