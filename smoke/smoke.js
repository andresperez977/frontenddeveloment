
const MIN_PARTICICLE_SIZE = 0.2;
const MIN_SPEED_X = 1;
const MIN_SPEED_Y = 1;
window.addEventListener('mousemove', (e)=>{});
class Smoke{
}

class Particle{

    constructor(x,y){
        this.size = Math.random() * 2 +  MIN_PARTICICLE_SIZE;
        this.color =' rgb(68, 70, 102)'
        this.speedX = Math.random() * 2 + MIN_SPEED_X;
         this.speedY = Math.random() * 2 + MIN_SPEED_Y;
         this.x=x;
         this.y=y;
    }
}