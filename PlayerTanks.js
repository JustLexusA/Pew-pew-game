class playerTank extends tank {
    constructor(up, down, left, right, shoot, color, x, y, health, size = 50, shootCooldown = 0) {
        super(color, x, y, health, size);
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
        this.shoot = shoot;
        this.shootCooldown = shootCooldown;
    }

    update() {
        tankVelocity = createVector(0, 0);
        this.checkKeys();
        this.checkBarriers();
        this.updatePosition();
        this.shootCooldown = max(0, this.shootCooldown - 1); // Decrease cooldown
    }

    checkKeys() {
        //Up
        if (keyIsDown(this.up)) {
            tankVelocity.y -= 4;
            // forward = true
        }
        //Down
        if (keyIsDown(this.down)) {
            tankVelocity.y += 4;
            // down = true
        }
        //Left
        if (keyIsDown(this.left)) {
            this.angle -= this.rotationSpeed;
            // left = true
        }
        //Right
        if (keyIsDown(this.right)) {
            this.angle += this.rotationSpeed;
            // right = true 
        }
        tankVelocity.rotate(this.angle);

        if (keyIsDown(this.shoot) && this.shootCooldown <= 0) {
            // Create a new missle at the tank's position and angle
            let missle = new Missles(this.pos.x, this.pos.y, this.angle - 90);
            missles.push(missle);
            
            // Resets cooldown (if implemented)
            this.shootCooldown = 30; // Example cooldown of 30 frames
        }
    }

    checkBarriers() {
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
        // Check List Against Walls and accounting for the stroke weight
        for (let i = 0; i < corners.length; i++) {
            let corner = corners[i].rotate(this.angle)
            if (corner.x + this.pos.x < 10) {
                this.pos.x = -corner.x + 10;
            } else if (corner.x + this.pos.x > windowWidth - 10) {
                this.pos.x = windowWidth - corner.x - 10;
            }
            if (corner.y + this.pos.y < 10) {
                this.pos.y = -corner.y + 10;
            } else if (corner.y + this.pos.y > windowHeight - 10) {
                this.pos.y = windowHeight - corner.y - 10;
            }
        }
        pop();
    }

    updatePosition() {
        this.pos.add(tankVelocity);
    }
}