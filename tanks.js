class tank {
    constructor(color, x, y, health, size = 50) {
        this.color = color;
        this.pos = createVector(x, y);
        this.health = health;
        this.angle = random(0, 360);
        this.size = size;
    }

    draw() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        fill(this.color);
        rect(0, 0, this.size/2, this.size);
        pop();
    }

    update() {
        return;
    }
}