function Arena() {
	push()
	fill('#87e067')
	strokeWeight(20)
	rectMode(CENTER)
	rect( leftwall, roof, ArenaWidth, ArenaHeight)

	imageMode(CENTER)
	image(img, leftwall, roof, ArenaWidth, ArenaHeight)
	pop()

	if (keyIsDown(187)) {
		if (ArenaWidth < windowWidth * 0.95 && ArenaHeight < windowHeight * 0.95) {
			ArenaWidth += 2
			ArenaHeight += 2
		}
	}

	if (keyIsDown(189)) {
		if (ArenaWidth > windowWidth * 0.05 && ArenaHeight > windowHeight * 0.05) {
			ArenaWidth -= 2
			ArenaHeight -= 2
		}
	}
}
