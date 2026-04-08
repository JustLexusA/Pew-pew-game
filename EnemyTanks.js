class enemyTank extends tank {
    constructor(color, x, y, health, size = 50) {
        super(color, x, y, health, size);
        this.angle = 0;
        this.tankVelocity = 2*tankVelocity/3;
        this.rotationSpeed /= 4;
    }

    update() {
        this.closestPlayer = this.chooseClosestPlayer()[0];
        this.closestPlayerDistance = this.chooseClosestPlayer()[1];
        this.directionToPlayer = createVector(this.closestPlayer.pos.x - this.pos.x, this.closestPlayer.pos.y - this.pos.y);
        this.targetAngle = this.directionToPlayer.heading() - 90;
        text(`${this.targetAngle}`, this.pos.x, this.pos.y + 20);
        if (this.targetAngle - this.angle < 2) {
            text(`${this.targetAngle}`, this.pos.x, this.pos.y + 20);
            this.angle += Math.sign(this.targetAngle - this.angle) * this.rotationSpeed;
        }// else if (this.targetAngle - (this.angle - 90) > -2) {
        //    this.angle += this.rotationSpeed;
        //}
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
}