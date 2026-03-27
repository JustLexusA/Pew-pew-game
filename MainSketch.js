function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	gameMode = 0;
}

function draw() {
	clear()
	startMenu()
	gameplayScreen()
}