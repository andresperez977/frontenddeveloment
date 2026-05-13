
const MIN_PARTICICLE_SIZE = 0.2;
const MIN_SPEED_X = 1;
const MIN_SPEED_Y = 1;
const NUM_OF_PARTICLES = 10;
const canvas = document.getElementById("smoke_canvas")
const ctx = canvas.getContext("2d");
//define the color that ww want to use for our drawings
//ctx.fillStyle = ' rgb(118, 76, 161)';
//
//ctx.beginPath();
//ctx.arc(2, 3, 2, 0, Math.PI * 2);

//ctx.fill();

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize' , resize);
window.dispatchEvent(new Event('resize'));


class Smoke {
    constructor() {
        this.particles = [];

    }
    add(particle) {
        this.particles.push(particle);
    }
    animate() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        for (let index = 0; index < this.particles.length; index++) {
            //update the states of the particles and draw 
            this.particles[index].update();
            if (this.particles[index].size <= 0.2) {
                this.particles.splice(index, 1);
                index--;
            }
        }
        requestAnimationFrame(()=>{this.animate()});
    }
}


class Particle {

    constructor(x, y) {
        this.size = Math.random() * 2 + MIN_PARTICICLE_SIZE;
        this.color = ' rgb(68, 70, 102)'
        this.speedX = Math.random() * 2 + MIN_SPEED_X;
        this.speedY = Math.random() * 2 + MIN_SPEED_Y;
        this.x = Math.random() * 2 + x;
        this.y = Math.random() * 2 + y;
    }
    //update the current states of a particle
    update() {
        this.size -= 0.1;
        this.x += this.speedX;
        this.y += this.speedY;
        this.draw();
    }
    draw() {
        ctx.fillStyle = this.color;
        //
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fill();
    }
}

const smoke = new Smoke();
window.addEventListener('mousemove', (e) => {
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);
    for (let index = 0; index < NUM_OF_PARTICLES; index++) {
        const particle = new Particle(e.clientX, e.clientY);
        smoke.add(particle);
        console.log(smoke.particles);
    }

});
smoke.animate();
