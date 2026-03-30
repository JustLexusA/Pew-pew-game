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
        let L1 = createVector(this.pos.x -this.width/2, this.pos.y -this.height/2);
        let L2 = createVector(this.pos.x -this.width/2, this.pos.y +this.height/2);
        let R1 = createVector(this.pos.x +this.width/2, this.pos.y -this.height/2);
        let R2 = createVector(this.pos.x +this.width/2, this.pos.y +this.height/2);
        // Rotate Corners
        L1.rotate(this.angle);
        L2.rotate(this.angle);
        R1.rotate(this.angle);
        R2.rotate(this.angle);
        // Make List
        let corners = [L1, L2, R1, R2];
        // Check List Against Walls
        for (let i = 0; i < corners.length; i++) {
            let corner = corners[i]
            if (corner.x < 0 || corner.x > windowWidth) {
                tankVelocity.x = 0;
            }
            else if (corner.y < 0 || corner.y > windowHeight) {
                tankVelocity.y = 0;
            }
        }
    }

    updatePosition() {
        this.pos.add(tankVelocity);
    }
}