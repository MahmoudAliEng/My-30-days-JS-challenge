// Selecting the 3 inputs : it returns a NodeList not an array
const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function handleUpdates(){
    const suffix = this.dataset.sizing || ''; // dataset attribute contains the data HTML attribute content
    let styleSheet = document.styleSheets[0]; // Getting the stylesheet document
    styleSheet.cssRules[0].style.cssText += `--${this.name} : ${this.value}${suffix};` // Setting the inputs equal to the new value entered
    // The name and the value are the input name's and value's respect.
    /* 
    If the CSS was made inside HTML (style tag) then the code were to be like this:
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    */    
    
    
}

inputs.forEach( input => input.addEventListener('change', handleUpdates));
inputs.forEach( input => input.addEventListener('mousemove', handleUpdates));
