const NUMBUTTON = document.getElementById('submit-num');
const PASSBUTTON = document.getElementById('submit-pass');
let numInput = document.getElementById('num-input');
let passInput = document.getElementById('pass-input');
let num, pass;

// when the number field value changes, run changeInput
numInput.addEventListener('input', changeInput);

// when the password field value changes, run changeInput
passInput.addEventListener('input', changeInput);

// call the inputNum function with a button
NUMBUTTON.addEventListener('click', function() {
    inputNum(num);
    // anonymous function is necessary to pass parameters from event listener
});

// call the inputPass function with a button
PASSBUTTON.addEventListener('click', function() {
    inputPass(pass);
})

function changeInput() {
    // do both, because I didn't want to write separate functions for it
    // probably more work for the computer this way though
    num = document.getElementById('num-input').value;
    pass = document.getElementById('pass-input').value;
}

function inputNum(num) {
    let mod;
    if (num) {
        if (num % 2 === 0) {
            mod = "even";
        }
        else {
            mod = "odd";
        }
        alert(`${num} is ${mod}.`);
    }
    else {
        alert("You must enter a number.");
    }
}

function inputPass(pass) {
    let letterFirst = true;
    let goodLength = true;
    let notice1 = "";
    let notice2 = "";

    // first make sure something has been entered, to avoid error messages in the console
    if (pass) {
        // check whether or not the first character is a letter
        if (pass[0].toLowerCase() === pass[0].toUpperCase()) {
            letterFirst = false;
            notice1 = "\r\n-Password must begin with a letter.";
        }
        // check that the entry is inclusively between 6 and 20 characters
        if ((pass.length > 20) || (pass.length < 6)) {
            goodLength = false;
            notice2 = "\r\n-Password must be between 6 and 20 characters.";
        }
    }

    // no password
    if (!pass) {
        alert("You must enter a password.");
    }
    // good password
    else if (letterFirst && goodLength) {
        alert("Password accepted!");
    }
    // bad password
    else {
        alert(`Password rejected for the following:${notice1}${notice2}`)
    }
}