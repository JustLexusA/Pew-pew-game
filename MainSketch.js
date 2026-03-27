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
		new tank('yellow', 400, 100, 10)
);
	tanks.forEach(tank => {
		tank.draw();
	});
}

// function draw() {
// 	clear()
// 	startMenu()
// 	gameplayScreen()
// 	pauseScreen()
// }