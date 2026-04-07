class enemyTank extends tank {
    constructor(color, x, y, health, size = 50) {
        super(color, x, y, health, size);
        this.tankVelocity = 2*tankVelocity/3;
    }

    update() {
        this.closestPlayer = this.chooseClosestPlayer()[0];
        this.closestPlayerDistance = this.chooseClosestPlayer()[1];
        this.angleToPlayer = this.pos.angleBetween(this.closestPlayer.pos);
        this.angleDifference = this.angleToPlayer - this.angle;
        text(`${this.angle}`, this.pos.x, this.pos.y + 20);
        this.angle = this.angleToPlayer;
        if (this.angle - this.angleToPlayer > 5 || this.angle - this.angleToPlayer < -5) {
            this.angle = this.angleToPlayer;
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
}