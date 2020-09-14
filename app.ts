

let myRandNumber:number = Math.floor(Math.random() * 100);

const myForm = document.getElementById("myform");
const userNumberInput = document.getElementById("userNumberInput")! as HTMLInputElement;
let myGuesses: number[] = [];
console.log(`This is the Random Number ${myRandNumber}`);

myForm.addEventListener("submit", (e) => {
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

  myForm.reset();
});
