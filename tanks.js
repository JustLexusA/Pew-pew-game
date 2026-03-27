class tank {
    constructor(color, x, y, health) {
        this.color = color;
        this.pos = createVector(x, y);
        this.health = health;
        this.angle = random(0, 360);
    }

    draw() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        fill(this.color);
        rect(0, 0, 50, 50);
        pop();
    }
}