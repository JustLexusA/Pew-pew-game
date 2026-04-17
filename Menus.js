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
	if (gameMode == 0) {
		// Check if the start button is clicked
		if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 &&
			mouseY > windowHeight / 2 - 50 && mouseY < windowHeight / 2 + 50) {
				gameMode = gameplay;
			}
		}
		// Checks if the 'Options' button is clicked

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
		//player imgs
		// player.update();
		// player.draw();
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

		fill('black')
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Next round in :" + Math.round(timer), windowWidth / 2, 50);

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