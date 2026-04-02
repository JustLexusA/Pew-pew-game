function setVariables() {
    gameMode = 0;
    // Arena variables
    ArenaWidth = windowWidth;
    ArenaHeight = windowHeight
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

// Tank Variables
let tanks = []
let playerTanks = []
let defaultRotationSpeed;
let tankVelocity

// Weapon Variables
let weapon = 1
let bullet = 1
let laser = 2

// Game Modes
let gameMode
const start = 0
const gameplay = 1
const pause = 2
const shop = 3

// Arena

let ArenaWidth;
let ArenaHeight;
let arenasurface;
