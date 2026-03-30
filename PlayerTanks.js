class playerTank extends tank {
    constructor(up, down, left, right, color, x, y, health, size = 50) {
        super(color, x, y, health, size);
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
    }

    update() {
        fill('white');
        text('Hello World', 10, 10);
        if (keyIsDown(this.up)) {
            this.pos.y -= 2;
        }
        if (keyIsDown(this.down)) {
            this.pos.y += 2;
        }
        if (keyIsDown(this.left)) {
            this.pos.x -= 2;
        }
        if (keyIsDown(this.right)) {
            this.pos.x += 2;
        }
    }
}