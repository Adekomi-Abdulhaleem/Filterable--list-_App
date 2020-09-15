//////////////////////////////////////////////////////////
// Let's get the input values

const inputCheck = document.getElementById('inputCheck')

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// Adding event listeners

inputCheck.addEventListener('keyup', filterNames);

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// The function that event listener executes

function filterNames() {

// input values modified
    let inputValue = document.getElementById('inputCheck').value.toUpperCase();

// get list elements
    let li = document.getElementsByTagName('li')

// loop through list items 
    for(let i = 0; i < li.length; i++) {
        let x = li[i]

// check if it's in the input values
        if (x.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
            li[i].style.display = '';
        }
        else {
            li[i].style.display = 'none';
        }
    }
}

//////////////////////////////////////////////////////////