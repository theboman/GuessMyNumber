


let myRandNumber:number = 10;
let myRange:number = 5;
let numOfGuesses:number = 15;

// ref's for DOM 
// 1st form inputs
const formGameParameters = document.getElementById("formGameParameters") as HTMLFormElement;
const userRange = document.getElementById("userRange") as HTMLInputElement;
const userRangeError = document.getElementById("error_range") as HTMLElement;
const userNumGuesses = document.getElementById("userNumGuesses") as HTMLInputElement;

// 2nd form inputs
const formGuessing = document.getElementById("formGuessing") as HTMLFormElement;
const userNumberInput = document.getElementById("userNumberInput") as HTMLInputElement;







let myGuesses: number[] = [];
console.log(`This is the Random Number ${myRandNumber}`);

//listen for values on 1st input to determin range of guesses
userRange.addEventListener("input", (e: Event) => {

    if (+userRange.value < 5) {
      userRange.classList.add("error")
      userRangeError.innerText ="Please enter a value greater than 5!";
      userNumGuesses.disabled = true;

    } else {

      if(userRange.classList.contains("error")) {
           userRange.classList.remove("error");
         }
      userRangeError.innerText ="";
      userNumGuesses.disabled = false;
      if (+userRange.value >= 5 && +userRange.value <= 10) {
        console.log("a good guess range is 3!");
      } else if (+userRange.value >= 11 && +userRange.value <= 100){
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
formGameParameters.addEventListener("submit", (e:Event)=>{
  e.preventDefault();

  myRange = +userRange.value;
  numOfGuesses = +userNumGuesses.value;

  console.log("my Range: ",myRange);
  console.log("number of guesses: ",numOfGuesses);

  myRandNumber= Math.floor(Math.random() * myRange);

  console.log("random number: ",myRandNumber);
  formGameParameters.reset();
})



//handler for 2nd submit
formGuessing.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(`This is the Random Number withing the function ${myRandNumber}`);
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
});
