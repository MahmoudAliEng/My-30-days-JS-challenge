const checkBoxes = document.querySelectorAll('.inbox input[type=checkbox]');

console.log(checkBoxes);

function handleClick(event){
    console.log(event);
}

checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleClick));
