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
		if (w + 2 <= 800 && h + 2 <= 800) {
			w += 2
			h += 2
		}
	}

	if (keyIsDown(189)) {
		if (w - 2 >= 500 && h - 2 >= 500) {
			w -= 2
			h -= 2
		}
	}
}
