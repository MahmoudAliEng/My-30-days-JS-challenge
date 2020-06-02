function playSound (event) {
    // Selecting the audio HTML
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    // Selecting the div key
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if(!audio) return; // Stop running the function

    audio.currentTime = 0; // To restart audio when clicking on its key even it is playing
    audio.play(); // playing the corresponding music
    // Adding the playing class to the clicked key (the entire englobing div) to add the transition effect
    key.classList.add('playing');
  }

// Remove transition after its end
function removeTransition (event) {
    if(event.propertyName !== 'transform') return; // skip it if it's not a transform
    
    // console.log(this); will return the current key div (the clicked key div)
    this.classList.remove('playing'); // Remove the transition effect at the its end from the clicked key
}

// Listtening when keys pressed to join the correct audio file
window.addEventListener('keydown', playSound);

// Remove the transition after clicking a key
// Select all keys
const keys = document.querySelectorAll('.key');
// Add event listener for each key to remove the transition effects made by the CSS after the end of the transition
keys.forEach( key => key.addEventListener('transitionend', removeTransition));
