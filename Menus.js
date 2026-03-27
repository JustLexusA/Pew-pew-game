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
	if (gameMode == gameplay) {
			background(100);
			fill('black');
			textSize(30);
			textAlign(CENTER, CENTER);
			text("Gameplay Screen", windowWidth / 2, windowHeight / 2);
			textSize(20);
			text("Press 'P' to Pause", windowWidth / 2, windowHeight / 2 + 40);
		
		if (keyIsDown(80)) { // 'P' key		==> Pause
			gameMode = pause;
		}
	}
}

function pauseScreen() {
	if (gameMode == pause) {
		background(150);
		fill('black');
		textSize(30);
		textAlign(CENTER, CENTER);
		text("Game Paused", windowWidth / 2, windowHeight / 2);
		textSize(20);
		text("Press 'P' to Resume", windowWidth / 2, windowHeight / 2 + 40);

		function keyPressed() {
			if (key === 'P' || key === 'p') {
				gameMode = gameplay;
			}
		}
	}
}