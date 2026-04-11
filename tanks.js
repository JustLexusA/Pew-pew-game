class tank {
    constructor(color, x, y, health, size = 50) {
        this.color = color;
        this.pos = createVector(x, y);
        this.health = health;
        this.angle = 0;
        this.size = size;
        this.width = size / 2;
        this.height = size;
        this.rotationSpeed = defaultRotationSpeed;
    }

    draw() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        fill(this.color);
        rect(0, 0, this.size/2, this.size);
        pop();
    }

    checkStaticCollisions() {
        // Assign Corners
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        this.L1 = createVector(0 -this.width/2, 0 -this.height/2);
        this.L2 = createVector(0 -this.width/2, 0 +this.height/2);
        this.R1 = createVector(0 +this.width/2, 0 -this.height/2);
        this.R2 = createVector(0 +this.width/2, 0 +this.height/2);
        // Make List
        this.corners = [this.L1, this.L2, this.R1, this.R2];
        this.checkWalls();
        this.checkBarriers();
        pop();
    }

    checkWalls() {
        for (let i = 0; i < this.corners.length; i++) {
            let corner = this.corners[i].rotate(this.angle)
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
    }

    // Agent uses SAT to check collisions between tank and barriers
    checkBarriers() {
        for (let i = 0; i < barriers.length; i++) {
            let barrier = barriers[i];
            // Get tank's axes (directions of its edges)
            let tankAxis1 = createVector(1, 0).rotate(this.angle);
            let tankAxis2 = createVector(0, 1).rotate(this.angle);
            // Get barrier's axes
            let barrierAxis1 = createVector(1, 0).rotate(barrier.angle);
            let barrierAxis2 = createVector(0, 1).rotate(barrier.angle);
            // List of all axes to check
            let axes = [tankAxis1, tankAxis2, barrierAxis1, barrierAxis2];
            // Get tank corners in world coordinates
            let tankCorners = this.corners.map(c => c.copy().rotate(this.angle).add(this.pos));
            // Get barrier corners in world coordinates
            let barrierCorners = barrier.corners.map(c => c.copy().rotate(barrier.angle).add(barrier.pos));
            // Check for overlap using Separating Axis Theorem
            let minOverlap = Infinity;
            let minAxis = null;
            let collision = true;
            for (let axis of axes) {
                // Project tank onto axis
                let tankMin = Infinity, tankMax = -Infinity;
                for (let c of tankCorners) {
                    let proj = c.dot(axis);
                    tankMin = Math.min(tankMin, proj);
                    tankMax = Math.max(tankMax, proj);
                }
                // Project barrier onto axis
                let barMin = Infinity, barMax = -Infinity;
                for (let c of barrierCorners) {
                    let proj = c.dot(axis);
                    barMin = Math.min(barMin, proj);
                    barMax = Math.max(barMax, proj);
                }
                // Check if projections overlap
                if (tankMax < barMin || barMax < tankMin) {
                    collision = false;
                    break;
                } else {
                    // Calculate overlap amount
                    let overlap = Math.min(tankMax - barMin, barMax - tankMin);
                    if (overlap < minOverlap) {
                        minOverlap = overlap;
                        minAxis = axis;
                    }
                }
            }
            if (collision) {
                // Resolve collision by pushing tank along the axis with minimum overlap
                let pushVector = minAxis.copy().normalize().mult(minOverlap * 2);  // Over-push to prevent visible penetration
                // Determine direction: push away from barrier
                let tankCenterProj = this.pos.dot(minAxis);
                let barCenterProj = barrier.pos.dot(minAxis);
                if (tankCenterProj > barCenterProj) {
                    // Tank is on the positive side, push positive
                    this.pos.add(pushVector);
                } else {
                    // Tank is on the negative side, push negative
                    this.pos.sub(pushVector);
                }
            }
        }
    }
}