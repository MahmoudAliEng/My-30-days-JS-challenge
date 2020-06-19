const canvas = document.querySelector("#draw");
const changinColor = document.getElementById('changing-color-checkbox');
const colorPicker =  document.getElementById('color-picker-input'); // Color 
const colorPickerLbl = document.querySelector('label.color-picker');

// Getting the context which is kind of the frame we will work on it
const ctx = canvas.getContext("2d");
// Setting the canvas width and height same as the window's 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let color =colorPicker.value;



ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0; // To apply the idea of changing the color while drawing
let increasingWidth = true;


function draw(e){
    if(!isDrawing) return; // stop running if the user is not clicking the mouse down
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY]; // Using destructuring array to update our lastX and Y
}


function drawChangingColor(e){
    if(!isDrawing) return; // stop running if the user is not clicking the mouse down
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    hue++;
    if (hue >= 360) hue = 0;

    /* if (ctx.lineWidth >= 80 || ctx.lineWidth <= 1) {increasingWidth = !increasingWidth};
    if(increasingWidth) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    } */

    [lastX, lastY] = [e.offsetX, e.offsetY]; // Using destructuring array to update our lastX and Y
     

}

function erase(e) {
    // if(e.button === 2){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
//}
}

// This is the first event that happen
// Triggering when the use click down the mouse
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; // To start drawing where the cursor is now not from 0
}); 

canvas.addEventListener("contextmenu", erase); // erase everything whenclicking the right button of the mouse

canvas.addEventListener('mousemove', (e) => {
    // Draw either by fixed color or changing color while drwaing
    if (changinColor.checked){
        drawChangingColor(e);
    }
    else {
        draw(e);
    }
});
canvas.addEventListener('mouseup', () => isDrawing = false); // And trigger off when they released the mouse up
canvas.addEventListener('mouseout', () => isDrawing = false); // Trigger off also when they click the mouse but out of the browser
colorPicker.addEventListener('input', e =>  color = e.target.value); // Changing the color value when the color picker value changes
// Hide color picker if color changing is selected and show it if not
changinColor.addEventListener('change', e => {
    if(e.target.checked){
        colorPicker.style.visibility  = 'hidden';
        colorPickerLbl.style.visibility  = 'hidden';
    }
    if(!e.target.checked){
        colorPicker.style.visibility  = 'visible';
        colorPickerLbl.style.visibility  = 'visible';
    }
})
