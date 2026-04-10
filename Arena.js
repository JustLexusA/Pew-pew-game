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
	});
	barriers.forEach(barrier => {
		barrier.draw();
	});
	missles.forEach(missle => {
		missle.draw();
		missle.update();
		missle.Inputs();
	});
}
