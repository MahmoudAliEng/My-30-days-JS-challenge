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

// Listtening when keys pressed to join the correct audio file
window.addEventListener('keydown', playSound);
