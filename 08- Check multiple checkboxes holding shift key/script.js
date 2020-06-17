const checkBoxes = document.querySelectorAll('.inbox input[type=checkbox]');


let lastChecked;


function handleClick(event){
    // Check if the user is clicking on shift key and the input element is checked
    if(event.shiftKey && event.target.checked){
        let inBetween = false;
        checkBoxes.forEach(checkBox => {
            if( checkBox === this || checkBox === lastChecked) inBetween != inBetween;
        });
    }
    console.log(event);
    lastChecked = this;
}

checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleClick));
