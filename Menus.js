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
	
	// Press 'P' to pause the game
	textSize(20);
	text("Press 'P' to pause the game", windowWidth / 2, windowHeight / 2 + 40);
	// Draws the arena
	Arena();
}

function pauseScreen() {
	background(150);
	fill('black');
	textSize(30);
	textAlign(CENTER, CENTER);
	text("Game Paused", windowWidth / 2, windowHeight / 2);	
	textSize(20);
	text("Press 'P' to resume the game", windowWidth / 2, windowHeight / 2 + 40);
}
