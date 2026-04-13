function upgrades(){
function upgrades (){
	// //
	// push()
	// fill('#87e067')
	// strokeWeight(20)
	// rectMode(CENTER)
	// rect( leftwall, roof, ArenaWidth, ArenaHeight)
	// pop()
	// //
	
	
	fill('yellow')
	rectMode(CENTER)
	strokeWeight(0)
	rect(windowWidth / 2, windowHeight / 2, windowWidth*0.7, 10)
	rect(windowWidth / 2, windowHeight / 2 + 100, 10, windowHeight*0.25)

	textSize(30);
	textAlign(CENTER, CENTER);
	fill('red')
	text('P1 currency :', 100, windowHeight/19)
	textAlign(RIGHT, CENTER);
	fill('blue')
	text(' : P2 currency', 975, windowHeight/19)

    
	}
}