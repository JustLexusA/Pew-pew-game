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
		// new playerTank(W, S, A, D, Spacebar, color, x, y, img, health)
		new playerTank(87, 83, 65, 68, 32, 'cyan', 500, 100, Player1Red, 100),
//		new playerTank(UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, 191, 'blue', 500, 500, Player2Blue, 100)
		new playerTank(38, 40, 37, 39, 191, 'cyan', 200, 300, Player2Blue, 100)
	);
	enemyTanks.push(
		new enemyTank('green', -10, -10, 100)
	);
	barriers.push(
		new barrier(createVector(200, 600), 180, 180),
		new barrier(createVector(280, 400), 150, 90),
		new barrier(createVector(375, 150), 200, 90),
		new barrier(createVector(480, 190), 200, 180),
		new barrier(createVector(550, 500), 160, 180),
		new barrier(createVector(650, 700), 300, 90),
		new barrier(createVector(1000, 800), 200, 180),
		new barrier(createVector(1260, 620), 200, 90),
		new barrier(createVector(1670, 750), 300, 90),
		new barrier(createVector(1550, 200), 200, 90),
		new barrier(createVector(1500, 420), 200, 180),
		new barrier(createVector(1200, 150), 200, 90),
		new barrier(createVector(900, 200), 150, 180),
	);
}

let gameMode
// let start = 0
// let gameplay = 1
// let pause = 'Paused'
let spawnInterval = 2.5
let roundLength = 300
let timer = roundLength
let Lastspawn = 0
//let bossTimer = 60

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
const selectionscreen = 3
const shop = 4
const gameover = 5

let Player2Blue;
let Player1Red;

// Arena
let ArenaWidth;
let ArenaHeight;
let arenasurface;
