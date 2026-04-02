class playerTank extends tank {
    constructor(up, down, left, right, color, x, y, health, size = 50) {
        super(color, x, y, health, size);
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
    }

    update() {
        tankVelocity = createVector(0, 0);
        this.checkKeys();
        this.checkWalls();
        this.updatePosition();
    }

    checkKeys() {
        if (keyIsDown(this.up)) {
            tankVelocity.y -= 2;
        }
        if (keyIsDown(this.down)) {
            tankVelocity.y += 2;
        }
        if (keyIsDown(this.left)) {
            this.angle -= this.rotationSpeed;
        }
        if (keyIsDown(this.right)) {
            this.angle += this.rotationSpeed;
        }
        tankVelocity.rotate(this.angle);
    }

    checkWalls() {
        // Assign Corners
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        let L1 = createVector(0 -this.width/2, 0 -this.height/2);
        let L2 = createVector(0 -this.width/2, 0 +this.height/2);
        let R1 = createVector(0 +this.width/2, 0 -this.height/2);
        let R2 = createVector(0 +this.width/2, 0 +this.height/2);
        // Make List
        let corners = [L1, L2, R1, R2];
        // Check List Against Walls
        for (let i = 0; i < corners.length; i++) {
            let corner = corners[i].rotate(this.angle)
            if (corner.x + this.pos.x < 0) {
                this.pos.x = -corner.x;
            } else if (corner.x + this.pos.x > windowWidth) {
                this.pos.x = windowWidth - corner.x;
            }
            if (corner.y + this.pos.y < 0) {
                this.pos.y = -corner.y;
            } else if (corner.y + this.pos.y > windowHeight) {
                this.pos.y = windowHeight - corner.y;
            }
        }
        pop();
    }

    updatePosition() {
        this.pos.add(tankVelocity);
    }
}