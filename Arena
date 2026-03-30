function Arena() {
	push()
	fill('#2e2e2e')
	strokeWeight(10)
	rectMode(CENTER)
	rect(leftwall, roof, w, h)
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
