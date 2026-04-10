class enemyTank extends tank {
    constructor(color, x, y, health, size = 50, shootCooldown = 0) {
        super(color, x, y, health, size);
        this.angle = 0;
        this.tankVelocity = defualtTankVelocity
        this.rotationSpeed /= 4;
        this.shootCooldown = shootCooldown;
    }

    update() {
        this.angleDifference;
        this.lookAtPlayer();
        this.tankVelocity = defualtTankVelocity.copy();
        if (Math.abs(this.angleDifference) <= 5) {
            this.moveTowardsPlayer();
        }
        this.shootCooldown = max(0, this.shootCooldown - 1); // Decrease cooldown
    }

    lookAtPlayer() {
        let [closestPlayer, closestDistance] = this.chooseClosestPlayer();
        this.closestPlayer = closestPlayer;
        this.closestPlayerDistance = closestDistance;
        this.directionToPlayer = createVector(this.closestPlayer.pos.x - this.pos.x, this.closestPlayer.pos.y - this.pos.y);
        this.targetAngle = this.directionToPlayer.heading() - 90;
        this.angleDifference = this.normalizeAngle(this.targetAngle - this.angle);

        if (Math.abs(this.angleDifference) > 5) {
            this.angle += this.rotationSpeed * Math.sign(this.angleDifference);
        }

        this.angle = this.normalizeAngle(this.angle);
        this.relativePlayerAngle = this.normalizeAngle(this.targetAngle - this.angle);

        if (Math.abs(this.angleDifference) <= 5) {
            return true;
        }
    }
    
    moveTowardsPlayer() {
        this.distanceToPlayer = this.pos.dist(this.closestPlayer.pos);
        if (this.distanceToPlayer > 250) {
            this.tankVelocity.rotate(this.angle);
            this.pos.add(this.tankVelocity);
        } else {
            return true;
        }
    }
    
    chooseClosestPlayer() {
            let closestPlayer = null;
            let closestDistance = Infinity;
            for (let playerTank of playerTanks) {
            let distance = dist(this.pos.x, this.pos.y, playerTank.pos.x, playerTank.pos.y);
                if (distance < closestDistance) {
                closestDistance = distance;
                    closestPlayer = playerTank;
                }
            }
                return [closestPlayer, closestDistance];
    }
    
    normalizeAngle(angle) {
        while (angle > 180) angle -= 360;
        while (angle < -180) angle += 360;
        return angle;
    }
    // Shoot at player when in range and facing them
    shoot() {
            // Checks if player is within 10 degrees and 300 pixels, and if cooldown is 0  
        if (this.relativePlayerAngle < 10 && this.relativePlayerAngle > -10 && this.closestPlayerDistance < 300 && this.shootCooldown <= 0) {
            this.shootCooldown = 60; // Set cooldown
            let missle = new enemyMissle(this.pos.x, this.pos.y, this.angle + 90);
            enemyMissles.push(missle);
        } else {
            return false;
        }
    }
}