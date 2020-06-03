// Selec the 3 hands at a time
const hand = document.querySelector('.hand');
// Select the second hand
const secondHand = document.querySelector('.second-hand');
// Select the minut hand
const minutHand = document.querySelector('.min-hand');
// Select the hour hand
const hourHand = document.querySelector('.hour-hand');
const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds(); // Getting the seconds of the current time
    const minuts = now.getMinutes();
    const hours = now.getHours();
    
    if (seconds === 1 || minuts === 1 || hours === 1) {
        /* hand.style.transition = 'none';
        hand.style.transform = 'none'; */
        hand.style.transition = 'none';
        console.log(seconds);
        console.log(minuts);
        console.log(hours);
    }

    const secondsDegrees = ((seconds / 60)  * 360) + 90 ; // Getting seconds percentage to rotate the seconds hand with (90 to get it on with the starting offset)
    const minutsDegrees = ((minuts / 60)  * 360) + 90 ;
    const hoursDegrees = ((hours / 12)  * 360) + 90 ;
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // Rotating the seconds hand according to the current time with the appropreiate degree
    minutHand.style.transform = `rotate(${minutsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
