function Arena() {
	push()
	fill('#87e067')
	strokeWeight(20)
	rectMode(CENTER)
	rect( leftwall, roof, ArenaWidth, ArenaHeight )

	imageMode(CENTER)
	image(arenasurface, leftwall, roof, ArenaWidth - 30, ArenaHeight - 30)
	pop()
	
	
	
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
		playerMissle.checkCollision(enemyTanks);
	});

	enemyMissles.forEach(enemyMissle => {
		enemyMissle.draw();
		enemyMissle.update();
		enemyMissle.Inputs();
		enemyMissle.checkCollision(playerTanks);
	});
 EnemyspawnChecker();
}

function EnemyspawnChecker(){
	let currentTimerunning = Math.abs(timer - roundLength)
	let Timesincelastspawn = currentTimerunning - Lastspawn
	if (Timesincelastspawn > spawnInterval && enemyTanks.length < 5) {
		Lastspawn = currentTimerunning
		enemyTanks.push(
			new enemyTank('red', random(0, windowWidth), random(0, windowHeight), 100)
		);
	}
}
