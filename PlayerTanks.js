class playerTank extends tank {
    constructor(up, down, left, right, shoot, color, x, y, img, health, size = 50, shootCooldown = 0) {
        super(color, x, y, health, size);
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
        this.shoot = shoot;
        this.shootCooldown = shootCooldown;
        this.img = img
    }

    update() {
        tankVelocity = createVector(0, 0);
        this.checkKeys();
        super.checkStaticCollisions();
        this.updatePosition();
        this.shootCooldown = max(0, this.shootCooldown - 1); // Decrease cooldown

        
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle + 90);
        imageMode(CENTER);
        image(this.img, 0, 0, this.size + 10, this.size/1.5);
        pop();
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
            let missle = new playerMissle(this.pos.x, this.pos.y, this.angle - 90);
            playerMissles.push(missle);
            // if (!mysoundThrust.isPlaying()) {
            // bulletShoot.play()
            // }
            
            // Resets cooldown (if implemented)
            this.shootCooldown = 30; // Example cooldown of 30 frames
        }
    }

    updatePosition() {
        this.pos.add(tankVelocity);
    }
}