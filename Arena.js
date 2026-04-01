function Arena() {
	push()
	fill('#87e067')
	strokeWeight(20)
	rectMode(CENTER)
	rect( leftwall, roof, ArenaWidth, ArenaHeight)

	imageMode(CENTER)
	image(arenasurface, leftwall, roof, ArenaWidth, ArenaHeight)
	pop()

	// Press '+' to increase the size of the arena
	if (keyIsDown(187)) { // '+' key
		if (ArenaWidth < windowWidth * 0.95 && ArenaHeight < windowHeight * 0.95) {
			ArenaWidth += 5;
			ArenaHeight += 5;
		}
	}

	// Press '-' to decrease the size of the arena
	if (keyIsDown(189)) { // '-' key
		if (ArenaWidth > windowWidth * 0.5 && ArenaHeight > windowHeight * 0.5) {
			ArenaWidth -= 5;
			ArenaHeight -= 5;
		}
	}
}
