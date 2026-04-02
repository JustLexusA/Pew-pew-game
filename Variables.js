function setVariables() {
    gameMode = 0;
    // Arena variables
    ArenaWidth = windowWidth;
    ArenaHeight = windowHeight;
    leftwall = windowWidth / 2;
    roof = windowHeight / 2;

	defaultRotationSpeed = QUARTER_PI / 15;
	tanks.push(
		new tank('blue', 100, 100, 10),
		new tank('red', 200, 100, 10),
		new tank('green', 300, 100, 10),
		new tank('yellow', 400, 100, 10),
		new playerTank(87, 83, 65, 68, 'cyan', 500, 100, 10),
	);
}

let gameMode
// let start = 0
// let gameplay = 1
// let pause = 'Paused'
// let shop = 2

let tanks = []
let playerTanks = []
let defaultRotationSpeed;
let tankVelocity
const start = 0
const gameplay = 1
const pause = 2
const shop = 3

// Arena

let ArenaWidth;
let ArenaHeight;
let arenasurface;
