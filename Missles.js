class playerMissle {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = 10;
        this.size = 10;
    }

    draw() {
        push();
        translate(this.x, this.y);
        rotate(this.angle); // Rotate to match the tank's angle
        fill('red');
        ellipse(0, 0, this.size);
        pop();
    }

    update() {
        this.x += this.speed * cos(this.angle);
        this.y += this.speed * sin(this.angle);
    }

    Inputs() {
        if (this.x < 0 || this.x > windowWidth || this.y < 0 || this.y > windowHeight) {
            return false; // Missle is out of bounds
        }
        return true; // Missle is still in bounds
    }


}

class enemyMissle {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = 8;
        this.size = 10;
    }

    draw() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        fill('red');
        ellipse(0, 0, this.size);
        pop();
    }

    update() {
        this.x += this.speed * cos(this.angle);
        this.y += this.speed * sin(this.angle);
    }

    Inputs() {
        if (this.x < 0 || this.x > windowWidth || this.y < 0 || this.y > windowHeight) {
            return false;
        }
        return true;
    }
}