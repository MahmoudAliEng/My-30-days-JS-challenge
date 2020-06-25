/* Getting HTML elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build our functions */
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();

    const icon = video.paused ? '►' : '❚ ❚';
    toggle.innerText = icon;
}

function skip(){
    // Advance or go backward by the amount saved in the data-skip of skip buttons
video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate (){
    // Update the range input by the actuel value
    video[this.name] = this.value;
}

function handleProgress(){
    const playedPercent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${playedPercent}%`;
}

function scrub(event){
    // Calculating current time
    const scrubTime =  (event.offsetX / progress.offsetWidth ) * video.duration;
    video.currentTime = scrubTime;
}
/* Our event listenners */

// Play and pause video by clicking on video and toggle buttons 
video.addEventListener('click', togglePlay);
// Listen to every advance in the current time of the video and modify the progress bar to show the correct percent
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);

document.addEventListener('keydown', function(event){
    // Playing and pausing the video just with the space bar key
    event.keyCode == 32  ? togglePlay() : console.log();
    // Skip forward or backward if right or left keys are pressed respect.
    // event.keyCode == 37 || event.keyCode == 39 ? skip() : console.log(); 

});
// Skip backward and forward by clicking on skip button
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));
// Listen to every change for the range inputs
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// Same as above but this got it in real time not as 'change' it's only update when we mouseup
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
// Moving the progress to wherere we click
progress.addEventListener('click', scrub);
