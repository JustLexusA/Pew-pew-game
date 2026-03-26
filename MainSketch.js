function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
    let gameMode = 0;
}

function draw() {
    if (gameMode == 0) {
        fill('white')
        rect(windowWidth/2, windowHeight/2, 200, 100);
        fill('black')
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Start Game", windowWidth/2, windowHeight/2);
    }
}
