const secondHand = document.querySelector('.second-hand');
const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds(); // Getting the seconds of the current time
    const secondsDegrees = ((seconds / 60)  * 360) + 90 ; // Getting seconds percentage to rotate the seconds hand with (90 to get it on with the starting offset)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);
}

setInterval(setDate, 1000);
