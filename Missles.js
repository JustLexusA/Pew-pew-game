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

    checkCollision(enemyTanks) {
      // Check if the missle collides with enemy tanks and make them disappear upon impact
        for (let i = 0; i < enemyTanks.length; i++) {
            let enemy = enemyTanks[i];
            let d = dist(this.x, this.y, enemy.pos.x, enemy.pos.y);
            if (d < this.size / 2 + enemy.size / 2) {
                enemy.health -= 20; // Reduce enemy health
                // Delete missle upon impact
                playerMissles.splice(i, 1);
                if (enemy.health <= 0) {
                    enemyTanks.splice(i, 1); // Remove enemy from the array
                }
                return true; // Collision detected
            }
        }
        return false; // No collision

    }
}

class enemyMissle extends playerMissle {
    constructor(x, y, angle) {
        super(x, y, angle);
        this.speed = 8; // Enemy missles can be slower than player missles
    }

    draw() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        fill('blue'); // Enemy missles can be a different color
        ellipse(0, 0, this.size);
        pop();
    }
    checkCollision(playerTanks) {
        // Check if the missle collides with player tanks and make them disappear upon impact
        for (let i = 0; i < playerTanks.length; i++) {
            let player = playerTanks[i];
            let d = dist(this.x, this.y, player.pos.x, player.pos.y);
            if (d < this.size / 2 + player.size / 2) {
                player.health -= 1; // Reduce player health
                // Delete missle upon impact
                enemyMissles.splice(i, 1);
                if (player.health <= 0) {
                    playerTanks.splice(i, 1); // Remove player from the array
                }
                return true; // Collision detected
            }
        }
        return false; // No collision
    }
    // The update and Inputs methods are inherited from playerMissle and can be used as is
}

// class enemyMissle {
//     constructor(x, y, angle) {
//         this.x = x;
//         this.y = y;
//         this.angle = angle;
//         this.speed = 8;
//         this.size = 10;
//     }

//     draw() {
//         push();
//         translate(this.x, this.y);
//         rotate(this.angle);
//         fill('red');
//         ellipse(0, 0, this.size);
//         pop();
//     }

//     update() {
//         this.x += this.speed * cos(this.angle);
//         this.y += this.speed * sin(this.angle);
//     }

//     Inputs() {
//         if (this.x < 0 || this.x > windowWidth || this.y < 0 || this.y > windowHeight) {
//             return false;
//         }
//         return true;
//     }
// }