function Arena() {
	push()
	fill('#87e067')
	strokeWeight(20)
	rectMode(CENTER)
	rect( leftwall, roof, ArenaWidth, ArenaHeight )

	imageMode(CENTER)
	image(arenasurface, leftwall, roof, ArenaWidth - 30, ArenaHeight - 30)
	pop()

	// Draws the tanks and missles
	tanks.forEach(tank => {
		tank.draw();
		tank.update();
	});

	missles.forEach((missle, index) => {
		missle.draw();
		missle.update();	
	});

	// Remove missles that are out of bounds
	missles = missles.filter(missle => missle.Inputs());

}
