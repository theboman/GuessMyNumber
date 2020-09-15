
console.log("hello compilier for TS! ");
console.log("----------------------- ");
console.log("----------------------- ");
console.log("----------------------- ");

let myRandNumber:number = Math.floor(Math.random() * 100);
// ref's for DOM 

const formGameParameters = document.getElementById("formGameParameters") as HTMLFormElement;
const userRange = document.getElementById("userRange") as HTMLInputElement;
const userNumGuesses = document.getElementById("userNumGuesses") as HTMLInputElement;

const formGuessing = document.getElementById("formGuessing") as HTMLFormElement;
const userNumberInput = document.getElementById("userNumberInput") as HTMLInputElement;

console.log(userRange);

let numOfGuesses:string = '5';
userNumGuesses.setAttribute('max', numOfGuesses);



let myGuesses: number[] = [];
console.log(`This is the Random Number ${myRandNumber}`);

userRange.addEventListener("input", (e: Event) => {
  console.log(userRange.value);
})

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
