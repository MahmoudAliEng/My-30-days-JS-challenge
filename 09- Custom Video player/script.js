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
video.currentTime += parseFloat(this.dataset.skip);
}

/* Hook up listenners */
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
// Playing and pausing the video just with the space bar key
document.addEventListener('keydown', function(event){
    event.keyCode == 32  ? togglePlay() : console.log();
});

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));
