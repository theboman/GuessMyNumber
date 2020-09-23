"use strict";
let myRandNumber = 10;
let myRange = 5;
let numOfGuesses = 10;
let whatGuessAmI = 0;
let myGuesses = [];
// ref's for DOM 
// 1st form ref - these are all typecast to the correct type TS
const formGameParameters = document.getElementById("formGameParameters");
const userRange = document.getElementById("userRange");
let userRangeError = document.getElementById("error_range");
const userNumGuesses = document.getElementById("userNumGuesses");
let userMaxGuess = '3';
let numOfGuessesHTML = document.getElementById("numOfGuesses");
let modal_bg = document.getElementById('modal-bg');
// 2nd form ref --
let rangeHTML = document.getElementById("range");
const guessed = document.getElementById("guessed");
const formGuessing = document.getElementById("formGuessing");
const userNumberInput = document.getElementById("userNumberInput");
// Guessed number feedback ref
let guessDisplay = document.getElementById('guessed');
//Handler input - listen for values on 1st input to determin range of guesses
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
        ;
        userRangeError.innerText = "";
        userNumGuesses.disabled = false;
        if (+userRange.value >= 5 && +userRange.value <= 10) {
            console.log("a good guess range is 3!");
            userMaxGuess = '3';
            userNumGuesses.setAttribute('max', userMaxGuess);
            numOfGuessesHTML.innerText = userMaxGuess;
        }
        else if (+userRange.value >= 11 && +userRange.value <= 100) {
            console.log("a good range is 6!");
            userMaxGuess = '6';
            userNumGuesses.setAttribute('max', userMaxGuess);
            numOfGuessesHTML.innerText = userMaxGuess;
        }
        else if (+userRange.value >= 101 && +userRange.value <= 300) {
            console.log("a good range is 8!");
            userMaxGuess = '8';
            userNumGuesses.setAttribute('max', userMaxGuess);
            numOfGuessesHTML.innerText = userMaxGuess;
        }
        else {
            console.log("a good range is 10!");
            userMaxGuess = '10';
            userNumGuesses.setAttribute('max', userMaxGuess);
            numOfGuessesHTML.innerText = userMaxGuess;
        }
    }
});
//   if (+userRange.value > 5){
//     if(userRange.classList.contains("error") {
//       userRange.classList.remove("error");
//     }
//     userRangeError.innerText ="";
//     console.log(userRange.value);
//     userNumGuesses.disabled = false;
//     userNumGuesses.setAttribute('max', numOfGuesses.toString());
//handler for 1st submit
formGameParameters.addEventListener("submit", (e) => {
    e.preventDefault();
    myRange = +userRange.value;
    numOfGuesses = +userNumGuesses.value;
    userNumberInput.setAttribute('max', myRange.toString());
    rangeHTML.innerText = myRange.toString();
    console.log("my Range: ", myRange);
    console.log("number of guesses: ", numOfGuesses);
    createGuessDivs(numOfGuesses);
    myRandNumber = Math.floor(Math.random() * myRange) + 1;
    modal_bg.classList.add("modal-bg-hidden");
    console.log("random number: " + myRandNumber);
    formGameParameters.reset();
});
// Creating a block of HTML as a function
// -----------------------------------------------------------------------
//console.log('this is number of guesses: '+numOfGuesses);
// function outterDivGuess (i:number) {
//   let createDiv = document.createElement('div') as HTMLElement;
//   createDiv.setAttribute('id', `guess${i}`);
// };
// function createGuess Divs
function createGuessDivs(numberOfGuesses) {
    for (let i = 0; i < numOfGuesses; i++) {
        let createDiv = document.createElement('div');
        createDiv.setAttribute('id', `guess_${i}`);
        createDiv.classList.add('guess-box');
        let innerDivTitle = document.createElement('div');
        innerDivTitle.setAttribute('id', `title_${i}`);
        //innerDivTitle.classList.add('strike-through');
        innerDivTitle.innerHTML = `Guess ${i + 1}`;
        let innerDivGuessedNum = document.createElement('div');
        innerDivGuessedNum.setAttribute('id', `guessed_num_${i}`);
        innerDivGuessedNum.classList.add('italic', 'padding');
        let innerDivFeedback = document.createElement('div');
        innerDivFeedback.setAttribute('id', `feedback_${i}`);
        innerDivFeedback.classList.add('sm-text');
        guessDisplay.appendChild(createDiv).append(innerDivTitle, innerDivGuessedNum, innerDivFeedback);
    }
}
//handler for 2nd submit
formGuessing.addEventListener("submit", (e) => {
    e.preventDefault();
    let myGuess = +userNumberInput.value;
    let feedback = '';
    //myGuesses.push(myGuess);
    //console.log(myGuesses);
    //whatGuessAmI = whatGuessAmI+1;
    console.log(`This is the current guess number: ${whatGuessAmI}`);
    if (myGuess > myRandNumber) {
        console.log("To High Jack");
        feedback = 'To High Jack';
    }
    else if (myGuess < myRandNumber) {
        console.log("To Low Blow");
        feedback = 'To Low Blow';
    }
    else {
        console.log(`By Golly you got it! ${myRandNumber}`);
        feedback = `By Golly you got it! ${myRandNumber}`;
    }
    let guess_box = document.getElementById(`guess_${whatGuessAmI}`);
    guess_box.classList.add('guessed');
    let guess_box_nodes = guess_box.querySelectorAll('div');
    guess_box_nodes[0].classList.add('strike-through');
    guess_box_nodes[1].innerText = myGuess.toString();
    guess_box_nodes[2].innerText = feedback;
    ++whatGuessAmI;
    formGuessing.reset();
});
