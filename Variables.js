function setVariables() {
    gameMode = 0;
    // Arena variables
    ArenaWidth = windowWidth;
    ArenaHeight = windowHeight;
    leftwall = windowWidth / 2;
    roof = windowHeight / 2;

	defaultRotationSpeed = 2;
	defualtTankVelocity = createVector(0, 1);

	
	playerTanks.push(
		// new playerTank(up, down, left, right, shoot, color, x, y, health)
		new playerTank(87, 83, 65, 68, 32, 'cyan', 500, 100, 10)
	);
	enemyTanks.push(
		new enemyTank('red', -10, -10, 10)
	);
	barriers.push(
		new barrier(createVector(200, 200), 300, 90)
	);
}

let gameMode
// let start = 0
// let gameplay = 1
// let pause = 'Paused'
// let shop = 2

let barriers = []
let playerTanks = []
let playerMissles = []
let enemyMissles = []
let enemyTanks = []
let defaultBarrierWidth = 10
let defaultRotationSpeed;
let defualtTankVelocity;
let tankVelocity = defualtTankVelocity;
const start = 0
const gameplay = 1
const pause = 2
const shop = 3

// Arena
let ArenaWidth;
let ArenaHeight;
let arenasurface;
