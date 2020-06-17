const checkBoxes = document.querySelectorAll('.inbox input[type=checkbox]');


let lastChecked;


function handleClick(event){
    let inBetween = false;
    // Check if the user is clicking on shift key and the input element is checked
    if(event.shiftKey && this.checked){
        
        checkBoxes.forEach(checkBox => {
            if( checkBox === this || checkBox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {checkBox.checked = true;}
        });
    }
    lastChecked = this;
}

checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleClick));
