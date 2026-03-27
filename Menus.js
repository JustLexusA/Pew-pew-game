function startMenu() {
	if (gameMode == 0) {
		buttonColour = color(200, 200, 200);
		if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 &&
			mouseY > windowHeight / 2 - 50 && mouseY < windowHeight / 2 + 50) {
			buttonColour = color(225, 225, 225);
		}
		fill(buttonColour);
		rectMode(CENTER)
		rect(windowWidth / 2, windowHeight / 2, 200, 100);
		fill('black')
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Start Game", windowWidth / 2, windowHeight / 2);
	}
}

function mousePressed() {
	if (gameMode == 0) {
		if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 &&
			mouseY > windowHeight / 2 - 50 && mouseY < windowHeight / 2 + 50) {
			gameMode = gameplay;
		}
	}
}

function gameplayScreen() {
		background(100);
		fill('black');
		textSize(30);
		textAlign(CENTER, CENTER);
		text("Gameplay Screen", windowWidth / 2, windowHeight / 2);

		// pause button on the corner
		let pauseButtoncolour = color(200, 0, 0);
		if (mouseX > windowWidth - 90 && mouseX < windowWidth - 10 &&
			mouseY > 35 && mouseY < 65) {
			pauseButtoncolour = color(255, 0, 0);
		}
		rectMode(CENTER);
		fill(pauseButtoncolour);
		rect(windowWidth - 50, 50, 80, 30);
		fill('white');
		textSize(15);
		text("Pause", windowWidth - 50, 50);
		// checks if pause button is clicked
		if (mouseIsPressed && mouseX > windowWidth - 90 && mouseX < windowWidth - 10 &&
			mouseY > 35 && mouseY < 65) {
			gameMode = pause;
		}
	}

function pauseScreen() {
	background(150);
	fill('black');
	textSize(30);
	textAlign(CENTER, CENTER);
	text("Game Paused", windowWidth / 2, windowHeight / 2);
}
