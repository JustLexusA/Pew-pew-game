class weapon {
    constructor(x, y, angle, size = 10, damage = 10) {
        this.pos = createVector(x, y);
        this.angle = angle;
        this.size = size;
        this.damage = damage;
    }

    draw() {
        return;
    }

    update() {
        return;
    }
}

class bullet extends weapon {
    constructor(x, y, angle, bulletSpeed = 10) {
        super(x, y, angle);
        this.velocity = createVector(0, -bulletSpeed).rotate(angle);
    }

    draw() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        fill('black');
        circle(0, 0, this.size);
        pop();
    }

    update() {
        this.pos.add(this.velocity);
    }
}