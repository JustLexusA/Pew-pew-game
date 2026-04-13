function Arena() {
	push()
	fill('#87e067')
	strokeWeight(20)
	rectMode(CENTER)
	rect( leftwall, roof, ArenaWidth, ArenaHeight )

	imageMode(CENTER)
	image(arenasurface, leftwall, roof, ArenaWidth - 30, ArenaHeight - 30)
	pop()

	fill('black')
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Next round in :" + Math.round(timer), windowWidth / 2, 50);
	

	

	playerTanks.forEach(tank => {
		tank.draw();
		tank.update();
	});
  
	enemyTanks.forEach(tank => {
		tank.draw();
		tank.update();
		tank.shoot();
	});
  
	barriers.forEach(barrier => {
		barrier.draw();
	});

	playerMissles.forEach(playerMissle => {
		playerMissle.draw();
		playerMissle.update();
		playerMissle.Inputs();
	});

	enemyMissles.forEach(enemyMissle => {
		enemyMissle.draw();
		enemyMissle.update();
		enemyMissle.Inputs();
	});

}
