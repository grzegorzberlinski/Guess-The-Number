'use strict';

let computersNumber = Math.floor(Math.random() * 10) + 1;
function rand() {
    computersNumber = Math.floor(Math.random() * 10) + 1;
}
let attempt = 0;
let attemptCounter = document.getElementById('attemptCounter');
attemptCounter.textContent = attempt;
let enteredNumber = document.getElementById('enteredNumber');
const checkNumberBtn = document.getElementById('checkNumberBtn');
checkNumberBtn.addEventListener('click', checkNumber);
function checkNumber() {
    if (enteredNumber.value >= 1) {
        if (enteredNumber.value == computersNumber) {
            alert(`You won! The Computer's number was ${computersNumber}`);
            reset();
        } else {
            attempt += 1;
            attemptCounter.textContent = attempt;
        }
    } else if (enteredNumber.value == "") {
        alert('The number cant be blank');
    } else {
        alert('The number must be positive');
    }
}
function reset() {
    attempt = 0;
    attemptCounter.textContent = attempt;
    rand()
}