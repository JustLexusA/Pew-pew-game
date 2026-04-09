function startMenu() {
	if (gameMode == 0) {
		buttonColour = color(200, 200, 200);
		if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 &&
			mouseY > windowHeight / 2 - 50 && mouseY < windowHeight / 2 + 50) {
			buttonColour = color(225, 225, 225);
		}

		// The title of the game: Tanks Galore
		fill('Black');
		textSize(50);
		textAlign(CENTER, CENTER);
		text("Tanks Galore", windowWidth / 2, windowHeight / 4);

		// Draw the start button
		fill(buttonColour);
		rectMode(CENTER)
		rect(windowWidth / 2, windowHeight / 2, 200, 100, 10);
		fill('black')
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Start Game", windowWidth / 2, windowHeight / 2);

	}
	if (gameMode == 0) {
		buttonColour = color(200, 200, 200);
		if (mouseX > windowWidth / 2.45 - 100 && mouseX < windowWidth / 2.45 + 100 &&
			mouseY > windowHeight / 1.5 - 50 && mouseY < windowHeight / 1.5 + 50) {
			buttonColour = color(225, 225, 225);
		}

		//Game mode
		fill(buttonColour);
		rectMode(CENTER)
		rect(windowWidth / 2.45, windowHeight / 1.5, 200, 100, 10);
		fill('black')
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Game Mode", windowWidth / 2.45, windowHeight / 1.5);
	}
	if (gameMode == 0) {
		buttonColour = color(200, 200, 200);
		if (mouseX > windowWidth / 2.45 - 100 && mouseX < windowWidth / 2.45 + 100 &&
			mouseY > windowHeight / 1.2 - 50 && mouseY < windowHeight / 1.2 + 50) {
			buttonColour = color(225, 225, 225);
		}

		//options
		fill(buttonColour);
		rectMode(CENTER)
		rect(windowWidth / 2.45, windowHeight / 1.2, 200, 100, 10);
		fill('black')
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Options", windowWidth / 2.45, windowHeight / 1.2);
	}
	if (gameMode == 0) {
		buttonColour = color(200, 200, 200);
		if (mouseX > windowWidth / 1.7 - 100 && mouseX < windowWidth / 1.7 + 100 &&
			mouseY > windowHeight / 1.5 - 50 && mouseY < windowHeight / 1.5 + 50) {
			buttonColour = color(225, 225, 225);
		}

		// //players
		fill(buttonColour);
		rectMode(CENTER)
		rect(windowWidth / 1.7, windowHeight / 1.5, 200, 100, 10);
	fill('black')
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Players", windowWidth / 1.7, windowHeight / 1.5);
	}	
	if (gameMode == 0) {
		buttonColour = color(200, 200, 200);
		if (mouseX > windowWidth / 1.7 - 100 && mouseX < windowWidth / 1.7 + 100 &&
			mouseY > windowHeight / 1.2 - 50 && mouseY < windowHeight / 1.2 + 50) {
			buttonColour = color(225, 225, 225);
		}

		// //Volume
		fill(buttonColour);
		rectMode(CENTER)
		rect(windowWidth / 1.7, windowHeight / 1.2, 200, 100, 10);
		fill('black')
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Volume", windowWidth / 1.7, windowHeight / 1.2);
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
	// playerTanks.forEach(tank => {
	// 	tank.draw();
	// 	tank.update();
	// });
	// enemyTanks.forEach(tank => {
	// 	tank.draw();
	// 	tank.update();
	// });

	// missles.forEach(missle => {
	// missle.draw();
	// missle.update();
	// missle.Inputs();
	// });
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
