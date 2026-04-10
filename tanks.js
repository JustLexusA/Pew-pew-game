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

    checkBarriers() {
        for (let i = 0; i < barriers.length; i++) {
            let barrier = barriers[i];
            barrier.L1.rotate(barrier.angle).add(barrier.pos);
            barrier.L2.rotate(barrier.angle).add(barrier.pos);
            barrier.R1.rotate(barrier.angle).add(barrier.pos);
            barrier.R2.rotate(barrier.angle).add(barrier.pos);
            for (let j = 0; j < this.corners.length; j++) {
                let corner = this.corners[j].rotate(this.angle).add(this.pos);
            //if (corner.x < 10) {
            //    this.pos.x = -corner.x + 10;
            //} else if (corner.x > windowWidth - 10) {
            //    this.pos.x = windowWidth - corner.x - 10;
            //}
            //if (corner.y < 10) {
            //    this.pos.y = -corner.y + 10;
            //} else if (corner.y > windowHeight - 10) {
            //    this.pos.y = windowHeight - corner.y - 10;
            //}
            }
        }
    }
}