"use strict";
console.log("hello compilier for TS! ");
console.log("----------------------- ");
console.log("----------------------- ");
console.log("----------------------- ");
let myRandNumber = Math.floor(Math.random() * 100);
// ref's for DOM 
const formGameParameters = document.getElementById("formGameParameters");
const userRange = document.getElementById("userRange");
const userRangeError = document.getElementById("error_range");
const userNumGuesses = document.getElementById("userNumGuesses");
const formGuessing = document.getElementById("formGuessing");
const userNumberInput = document.getElementById("userNumberInput");
console.log(userRange);
let numOfGuesses = '5';
userNumGuesses.setAttribute('max', numOfGuesses);
let myGuesses = [];
console.log(`This is the Random Number ${myRandNumber}`);
userRange.addEventListener("input", (e) => {
    if (userRange.value < 5) {
        userRange.classList.toggle("error");
        userRangeError.innerText = "Please enter a value greater than 5!";
        userNumGuesses.disabled = true;
    }
    else if (userRange.value > 5) {
        userRange.classList.toggle("error");
        userRangeError.innerText = "";
        console.log(userRange.value);
        userNumGuesses.disabled = false;
    }
});
formGuessing.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(`This is the Random Number withing the function ${myRandNumber}`);
    let myGuess = +userNumberInput.value;
    myGuesses.push(myGuess);
    console.log(myGuesses);
    if (myGuess > myRandNumber) {
        console.log("To High Jack");
    }
    else if (myGuess < myRandNumber) {
        console.log("To Low Blow");
    }
    else {
        console.log(`By Golly you got it! ${myRandNumber}`);
    }
    formGuessing.reset();
});
