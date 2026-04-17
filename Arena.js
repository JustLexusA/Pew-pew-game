function Arena() {
	push()
	fill('#87e067')
	strokeWeight(20)
	rectMode(CENTER)
	rect( leftwall, roof, ArenaWidth, ArenaHeight )

	// Draw Arena Surface
	imageMode(CENTER)
	image(arenasurface, leftwall, roof, ArenaWidth - 30, ArenaHeight - 30)
	pop()
	// playerTanks.forEach(tank => {
	// 	tank.draw();
	// 	tank.update();
	// });
  
	// enemyTanks.forEach(tank => {
	// 	tank.draw();
	// 	tank.update();
	// 	tank.shoot();
	// });
  
	// barriers.forEach(barrier => {
	// 	barrier.draw();
	// });

	// playerMissles.forEach(playerMissle => {
	// 	playerMissle.draw();
	// 	playerMissle.update();
	// 	playerMissle.Inputs();
	// 	playerMissle.checkCollision(enemyTanks);
	// 	// playerMissle.checkBarrierCollisions(barriers);
	// });

	// enemyMissles.forEach(enemyMissle => {
	// 	enemyMissle.draw();
	// 	enemyMissle.update();
	// 	enemyMissle.Inputs();
	// 	enemyMissle.checkCollision(playerTanks);
	// 	// enemyMissle.checkBarrierCollisions(barriers);
	// });
 EnemyspawnChecker();
}

function EnemyspawnChecker(){
	let currentTimerunning = Math.abs(timer - roundLength)
	let Timesincelastspawn = currentTimerunning - Lastspawn
	if (Timesincelastspawn > spawnInterval && enemyTanks.length < 10) {
		Lastspawn = currentTimerunning
		enemyTanks.push(
			new enemyTank('green', random(0, windowWidth), random(0, windowHeight), 100),
			// new enemyTank('red', random(0, windowWidth), random(0, windowHeight), 100),
			// new enemyTank('red', random(0, windowWidth), random(0, windowHeight), 100),
			// new enemyTank('red', random(0, windowWidth), random(0, windowHeight), 100),
			// new enemyTank('red', random(0, windowWidth), random(0, windowHeight), 100),
			// new enemyTank('red', random(0, windowWidth), random(0, windowHeight), 100),
			// new enemyTank('red', random(0, windowWidth), random(0, windowHeight), 100),
			// new enemyTank('red', random(0, windowWidth), random(0, windowHeight), 100),
			// new enemyTank('red', random(0, windowWidth), random(0, windowHeight), 100),
			// new enemyTank('red', random(0, windowWidth), random(0, windowHeight), 100),
			// new enemyTank('red', random(0, windowWidth), random(0, windowHeight), 100),
			
		);
	}
}

function SpawnEverything(){
	// Adds all objects
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
		// playerMissle.checkBarrierCollisions(barriers);
	});

	enemyMissles.forEach(enemyMissle => {
		enemyMissle.draw();
		enemyMissle.update();
		enemyMissle.Inputs();
		enemyMissle.checkCollision(playerTanks);
		// enemyMissle.checkBarrierCollisions(barriers);
	});
}
