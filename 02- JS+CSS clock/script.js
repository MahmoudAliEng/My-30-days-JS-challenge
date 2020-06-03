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
    const secondsDegrees = ((seconds / 60)  * 360) + 90 ; // Getting seconds percentage to rotate the seconds hand with (90 to get it on with the starting offset)
    const minutsDegrees = ((minuts / 60)  * 360) + 90 ;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutHand.style.transform = `rotate(${minutsDegrees}deg)`;
}

setInterval(setDate, 1000);
