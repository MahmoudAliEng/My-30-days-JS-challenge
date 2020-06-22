/* Getting HTML elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewr');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build our functions */

/* Hook up listenners */
