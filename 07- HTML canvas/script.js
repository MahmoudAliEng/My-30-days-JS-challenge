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
    console.log(e);
}

canvas.addEventListener('mousemove', draw);

