"use strict";
let myRandNumber = 10;
let myRange = 5;
let numOfGuesses = 15;
// ref's for DOM 
// 1st form inputs
const formGameParameters = document.getElementById("formGameParameters");
const userRange = document.getElementById("userRange");
const userRangeError = document.getElementById("error_range");
const userNumGuesses = document.getElementById("userNumGuesses");
// 2nd form inputs
const formGuessing = document.getElementById("formGuessing");
const userNumberInput = document.getElementById("userNumberInput");
let myGuesses = [];
console.log(`This is the Random Number ${myRandNumber}`);
//listen for values on 1st input to determin range of guesses
userRange.addEventListener("input", (e) => {
    if (+userRange.value < 5) {
        userRange.classList.add("error");
        userRangeError.innerText = "Please enter a value greater than 5!";
        userNumGuesses.disabled = true;
    }
    else {
        if (userRange.classList.contains("error")) {
            userRange.classList.remove("error");
        }
        userRangeError.innerText = "";
        userNumGuesses.disabled = false;
        if (+userRange.value >= 5 && +userRange.value <= 10) {
            console.log("a good guess range is 3!");
        }
        else if (+userRange.value >= 11 && +userRange.value <= 100) {
            console.log("a good range is 6!");
        }
    }
}
//   if (+userRange.value > 5){
//     if(userRange.classList.contains("error") {
//       userRange.classList.remove("error");
//     }
//     userRangeError.innerText ="";
//     console.log(userRange.value);
//     userNumGuesses.disabled = false;
//     userNumGuesses.setAttribute('max', numOfGuesses.toString());
//   }
// })
//handler for 1st submit
, 
//   if (+userRange.value > 5){
//     if(userRange.classList.contains("error") {
//       userRange.classList.remove("error");
//     }
//     userRangeError.innerText ="";
//     console.log(userRange.value);
//     userNumGuesses.disabled = false;
//     userNumGuesses.setAttribute('max', numOfGuesses.toString());
//   }
// })
//handler for 1st submit
formGameParameters.addEventListener("submit", (e) => {
    e.preventDefault();
    myRange = +userRange.value;
    numOfGuesses = +userNumGuesses.value;
    console.log("my Range: ", myRange);
    console.log("number of guesses: ", numOfGuesses);
    myRandNumber = Math.floor(Math.random() * myRange);
    console.log("random number: ", myRandNumber);
    formGameParameters.reset();
})
//handler for 2nd submit
, 
//handler for 2nd submit
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
}));
