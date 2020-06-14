const canvas = document.querySelector("#draw");

// Getting the context which is kind of the frame we will work on it
const ctx = canvas.getContext("2d");
// Setting the canvas width and height same as the window's 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
    if(!isDrawing) return; // stop running if the user is not clicking the mouse down
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true); // Triggering when the use click down the mouse
canvas.addEventListener('mouseup', () => isDrawing = false); // And trigger off when they released the mouse up
canvas.addEventListener('mouseout', () => isDrawing = false); // Trigger off also when they click the mouse but out of the browser

