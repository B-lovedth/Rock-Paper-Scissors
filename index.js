/** @format */

//the variables assigned to the player choices in the DOM
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const count = document.getElementById("count");
const game = document.getElementById('game')
//the variables assigned to the buttons
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
//
const result = document.getElementById("result");
//the variables used for the main logic
let playerChoice = "";
let compChoice = "";
//
const myArray = ["rock", "paper", "scissors"];
let myRand = 0;
//
const pscore = document.getElementById("pscore");
const cscore = document.getElementById("cscore");
const tie = document.getElementById("ties");
let ties = 0;
let mypscore = 0;
let mycscore = 0;
let pwin = false;
let cwin = false;

//the reset button
const reset = document.getElementById("reset");
const replay = document.getElementById("replay");
//
rock.addEventListener("click", function () {
  playerChoice = "rock";
  player.textContent = `YOU:`
  player.textContent += ` rock`;
  main();
});
paper.addEventListener("click", function () {
  playerChoice = "paper";
  player.textContent = `YOU:`
  player.textContent += ` paper`;
  main();
});
scissors.addEventListener("click", function () {
  playerChoice = "scissors";
  player.textContent = `YOU:`
  player.textContent += ` scissors`;
  main();
});

const main = () => {
  randomNum();
  compChoice = myArray[myRand];
  computer.textContent = `COMPUTER: ${compChoice}`;
  mainLogic();
};
// generates random number from 0 - 2
const randomNum = () => {
  myRand = Math.floor(Math.random() * 3);
  return myRand;
};

const mainLogic = () => {
  // playerChoice === compChoice
  //   ? (result.textContent = `Its a Tie!`)
  //   : playerChoice === "rock" && compChoice === "paper"
  //   ? (result.textContent = `Computer Wins!`)
  //   : playerChoice === "paper" && compChoice === "scissors"
  //   ? (result.textContent = `Computer Wins!`)
  //   : playerChoice === "scissors" && compChoice === "rock"
  //   ? (result.textContent = `Computer wins!`)
  //   : (result.textContent = `You win!`);
  if (playerChoice === compChoice) {
    result.textContent = `Its a Tie!`;
    pwin = false;
    cwin = false;
  } else if (playerChoice === "rock" && compChoice === "paper") {
    result.textContent = `Computer Wins!`;
    pwin = false;
    cwin = true;
  } else if (playerChoice === "paper" && compChoice === "scissors") {
    result.textContent = `Computer Wins!`;
    pwin = false;
    cwin = true;
  } else if (playerChoice === "scissors" && compChoice === "rock") {
    result.textContent = `Computer Wins!`;
    pwin = false;
    cwin = true;
  } else {
    result.textContent = `You win!`;
    pwin = true;
    cwin = false;
  }
  win();
};
function win() {
  if (pwin === false && cwin === true) {
    mycscore += 1;
    cscore.textContent = `Computer: ${mycscore}`;
    console.log("Computer wins");
  } else if (pwin === true && cwin === false) {
    mypscore++;
    pscore.textContent = `You: ${mypscore}`;
    console.log("you win");
  } else if (pwin === false && cwin === false) {
    ties++;
    tie.textContent = `Ties: ${ties}`;
  }
}

replay.addEventListener("click", function () {
  player.textContent = `YOU:`;
  computer.textContent = `COMPUTER:`;
  result.textContent = ``;
});

reset.addEventListener("click", function () {
  location.reload();
});
