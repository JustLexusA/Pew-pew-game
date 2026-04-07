function setVariables() {
    gameMode = 0;
    // Arena variables
    ArenaWidth = windowWidth;
    ArenaHeight = windowHeight;
    leftwall = windowWidth / 2;
    roof = windowHeight / 2;

	defaultRotationSpeed = 4;
	playerTanks.push(
		new playerTank(87, 83, 65, 68, 'cyan', 500, 100, 10),
	);
	enemyTanks.push(
		new enemyTank('red', 400, 400, 10)
	);
}

let gameMode
// let start = 0
// let gameplay = 1
// let pause = 'Paused'
// let shop = 2

let playerTanks = []
let enemyTanks = []
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
