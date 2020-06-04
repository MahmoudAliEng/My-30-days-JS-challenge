// Selecting the 3 inputs : it returns a NodeList not an array
const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function handleUpdates(){
    console.log(this.value);
}

inputs.forEach( input => input.addEventListener('change', handleUpdates));
inputs.forEach( input => input.addEventListener('mousemove', handleUpdates));
