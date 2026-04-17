function startMenu() {
	if (gameMode == 0) {
		buttonColour = color(200, 200, 200);
		if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 &&
			mouseY > windowHeight / 2 - 50 && mouseY < windowHeight / 2 + 50) {
			buttonColour = color(225, 225, 225);
		}
		
		// Draw the background using the image		
		imageMode(CENTER);
		image(startMenuBackground, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
		
		// Draw the start button
		fill(buttonColour);
		rectMode(CENTER)
		rect(windowWidth / 2, windowHeight / 2, 200, 100, 10);
		fill('black')
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Start Game", windowWidth / 2, windowHeight / 2);
		
		// Display instructions for player 1 and 2 and pause instructions
		textSize(20);
		textAlign(CENTER, CENTER);
		fill('red');
		text("Player 1 Controls: W,A,S,D to move, spacebar to shoot", windowWidth / 2, windowHeight / 2 + 100);
		fill('blue');
		text("Player 2 Controls: Arrow keys to move, / to shoot", windowWidth / 2, windowHeight / 2 + 130);
		fill('black');
		text("Press 'P' to pause the game during gameplay", windowWidth / 2, windowHeight / 2 + 160);
	}
}




function mousePressed() {
	// Checks if it's in starting menu
	if (gameMode == start) {
		// Check if the start button is clicked
		if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 &&
			mouseY > windowHeight / 2 - 50 && mouseY < windowHeight / 2 + 50) {
				// Reinitialize game state
				playerTanks = [];
				enemyTanks = [];
				playerMissles = [];
				enemyMissles = [];
				barriers = [];
				setVariables();
				gameMode = gameplay;
			}
		}
		// Checks if the 'Return to main menu' button is clicked
	if (gameMode == pause) {
		if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 &&
			mouseY > windowHeight / 2 + 100 && mouseY < windowHeight / 2 + 150) {
			gameMode = start;
			// Clear all objects immediately
			playerTanks = [];
			enemyTanks = [];
			playerMissles = [];
			enemyMissles = [];
			barriers = [];
			// Reset timer and spawn variables
			timer = roundLength;
			Lastspawn = 0;
		}
	}
}
function gameplayScreen() {
		timer -= 1/60;

		if (timer < 0) {
			gameMode = selectionscreen;
		}

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
		fill('black')
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Next round in :" + Math.round(timer), windowWidth / 2, 50);

		SpawnEverything();

		// Checks if player tanks are destroyed and ends the game if they are
		for (let i = 0; i < playerTanks.length; i++) {
			if (playerTanks[i].health <= 0) {
				gameMode = gameover;
			}
		}

}
		
function pauseScreen() {
	background(150);
	fill('black');
	textSize(30);
	textAlign(CENTER, CENTER);
	text("Game Paused", windowWidth / 2, windowHeight / 2);	
	textSize(20);
	text("Press 'P' to resume the game", windowWidth / 2, windowHeight / 2 + 40);

	// Return to main menu button
	buttonColour = color(200, 200, 200);
	if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 &&
		mouseY > windowHeight / 2 + 100 && mouseY < windowHeight / 2 + 150) {
		buttonColour = color(225, 225, 225);
	}
	fill(buttonColour);
	rectMode(CENTER)
	rect(windowWidth / 2, windowHeight / 2 + 125, 200, 50, 10);
	fill('black')
	textSize(20);
	textAlign(CENTER, CENTER);
	text("Return to Main Menu", windowWidth / 2, windowHeight / 2 + 125);
}

function gameoverScreen() {
	background(0);
	fill('white');
	textSize(50);
	textAlign(CENTER, CENTER);
	text("Game Over", windowWidth / 2, windowHeight / 2);
}

function Shop(){
	
	
	if (gameMode == 3){
		buttonColour = color(200, 200, 200);
		if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 &&
			mouseY > windowHeight / 2 - 200 && mouseY < windowHeight / 2 + 200) {
				buttonColour = color(225, 225, 225);
				gameMode = shop
			}

			//Shop
			textSize(50);
			textAlign(CENTER, CENTER);
	text("Upgrade or Continue?", windowWidth / 2, windowHeight / 2 - 50);
	fill(buttonColour);
	rectMode(CENTER)
	rect(windowWidth / 2 - 75, windowHeight / 2, 100, 200, 10);
	fill('black')
	textSize(20);
	textAlign(CENTER, CENTER);
	text("Shop", windowWidth / 2 - 75, windowHeight / 2);	

	//continue
	fill(buttonColour);
	rectMode(CENTER)
	rect(windowWidth / 2 + 75, windowHeight / 2, 100, 200, 10);
	fill('black')
	textSize(20);
	textAlign(CENTER, CENTER);
	text("Continue", windowWidth / 2 + 75, windowHeight / 2);
}
if (gameMode == 4){
	//shop screen
	}
}