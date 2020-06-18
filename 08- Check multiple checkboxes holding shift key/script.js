const checkBoxes = document.querySelectorAll('.inbox input[type=checkbox]');
const checkAll = document.querySelector('#check-all-checkbox');
const uncheckAll = document.querySelector('#uncheck-all-checkbox');
const attentionTxt = document.querySelector('p.attention-txt');


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


function handleCheckAll(event){
   
    
    if(checkAll.checked) {
        uncheckAll.checked = false;
        checkBoxes.forEach(checkBox => checkBox.checked = true);
    }

    checkAll.checked = !checkAll.checked;
    
}
function handleUnheckAll(event){
    
    // console.log('erase clicked');
    
    if(uncheckAll.checked) {
        checkAll.checked = false;
        checkBoxes.forEach(checkBox => checkBox.checked = false);
    }

    uncheckAll.checked = !uncheckAll.checked;
}

checkAll.addEventListener('click', handleCheckAll);
uncheckAll.addEventListener('click', handleUnheckAll);


/* if (checkAll.checked && uncheckAll.checked) {
    attentionTxt.innerHTML = 'Pay attention only one must be selected atime';
    checkAll.checked = false;
    uncheckAll.checked = false;
    return;
} */
