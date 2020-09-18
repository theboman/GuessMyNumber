


let myRandNumber:number = 10;
let myRange:number = 5;
let numOfGuesses:number = 15;
let myGuesses: number[] = [];

// ref's for DOM 
// 1st form ref
const formGameParameters = document.getElementById("formGameParameters") as HTMLFormElement;
const userRange = document.getElementById("userRange") as HTMLInputElement;
let userRangeError = document.getElementById("error_range") as HTMLElement;
const userNumGuesses = document.getElementById("userNumGuesses") as HTMLInputElement;
let userMaxGuess:string = '3';
let numOfGuessesHTML = document.getElementById("numOfGuesses") as HTMLElement;
let modal_bg = document.getElementById('modal-bg') as HTMLElement;

// 2nd form ref
let rangeHTML = document.getElementById("range") as HTMLElement;
const guessed = document.getElementById("guessed") as HTMLElement;
const formGuessing = document.getElementById("formGuessing") as HTMLFormElement;
const userNumberInput = document.getElementById("userNumberInput") as HTMLInputElement;


//Handler input - listen for values on 1st input to determin range of guesses
userRange.addEventListener("input", (e: Event) => {

    if (+userRange.value < 5) {
      userRange.classList.add("error")
      userRangeError.innerText ="Please enter a value greater than 5!";
      userNumGuesses.disabled = true;

    } else {

        if(userRange.classList.contains("error")) {
            userRange.classList.remove("error");
          };
        userRangeError.innerText ="";
        userNumGuesses.disabled = false;

        if (+userRange.value >= 5 && +userRange.value <= 10) {
          console.log("a good guess range is 3!");
          userMaxGuess = '3';
          userNumGuesses.setAttribute('max', userMaxGuess);
          numOfGuessesHTML.innerText = userMaxGuess;

        } else if (+userRange.value >= 11 && +userRange.value <= 100){
          console.log("a good range is 6!");
          userMaxGuess = '6';
          userNumGuesses.setAttribute('max', userMaxGuess);
          numOfGuessesHTML.innerText = userMaxGuess;

        } else if (+userRange.value >= 101 && +userRange.value <= 300){
          console.log("a good range is 8!");
          userMaxGuess = '8';
          userNumGuesses.setAttribute('max', userMaxGuess);
          numOfGuessesHTML.innerText = userMaxGuess;

        } else {
          console.log("a good range is 10!");
          userMaxGuess = '10';
          userNumGuesses.setAttribute('max', userMaxGuess);
          numOfGuessesHTML.innerText = userMaxGuess;
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
    

//handler for 1st submit
formGameParameters.addEventListener("submit", (e:Event)=>{
  e.preventDefault();

  myRange = +userRange.value;
  numOfGuesses = +userNumGuesses.value;
  userNumberInput.setAttribute('max', myRange.toString());
  rangeHTML.innerText = myRange.toString();

  console.log("my Range: ",myRange);
  console.log("number of guesses: ",numOfGuesses);

  myRandNumber= Math.floor(Math.random() * myRange)+1;
  modal_bg.classList.add("modal-bg-hidden");
  console.log("random number: ",myRandNumber);
  
  formGameParameters.reset();
})


//handler for 2nd submit
formGuessing.addEventListener("submit", (e:Event) => {
  e.preventDefault();

  let myGuess:number = +userNumberInput.value;
  myGuesses.push(myGuess);
  console.log(myGuesses);

  if (myGuess > myRandNumber) {
    console.log("To High Jack");
  } else if (myGuess < myRandNumber) {
    console.log("To Low Blow");
  } else {
    console.log(`By Golly you got it! ${myRandNumber}`);
  }

  formGuessing.reset();
})
