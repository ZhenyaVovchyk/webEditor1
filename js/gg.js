const log = (g) => { console.log(g) };

const canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'absolute';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.backgroundColor = 'rgba(0,0,0,0.85)';
document.body.appendChild(canvas);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let recAnimFrame, i;


let x1, y1;
window.addEventListener('mousemove', (e) => {
    x1 = e.offsetX;
    y1 = e.offsetY;
})

window.addEventListener('load', () => { start() });
window.addEventListener('dblclick', () => { cancelAnimationFrame(recAnimFrame) });


function start() {
    draw();
    upDate();
    recAnimFrame = requestAnimationFrame(start);
}

function draw() {
    //clear canvas
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

}

function upDate() {

}