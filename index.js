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
let timeleft;
//
const myArray = [`✊`, `🤚`, `✌`];
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
let rounds = 3;
//the reset button
const reset = document.getElementById("reset");
const replay = document.getElementById("replay");
//

rock.addEventListener("click", function () {
  playerChoice = `✊`;
  // player.innerHTML = `${playerChoice}`
  timeOut();
});
paper.addEventListener("click", function () {
  playerChoice = `🤚`;
  // player.innerHTML = `${playerChoice}`
  timeOut();
});
scissors.addEventListener("click", function () {
  playerChoice = `✌`;
  // player.innerHTML = `${playerChoice}`
  timeOut();
});

const timeOut = () => {
  rounds -= 1;
  if (rounds >= 0) {
    timeleft = 3;
    console.log(rounds);
    player.innerHTML = "";
    computer.innerHTML = "";
    result.textContent = "";
    game.innerHTML = '';
    let downloadTimer = setInterval(function () {
      if (timeleft < 1) {
        clearInterval(downloadTimer);
        player.innerHTML = `${playerChoice}`;
        count.textContent = " ";
        console.log(count);
        main();
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
      } else {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        count.textContent = timeleft;
        timeleft -= 1;
      }
    }, 1000);
  } else {
    check();
    let _confirm = confirm("Play new round?");
    if (_confirm) {
      location.reload();
    } else {
      alert("Ok!, bye.");
      window.close();
    }
  }
};
const main = () => {
  randomNum();
  compChoice = myArray[myRand];
  computer.innerHTML = `${compChoice}`;
  mainLogic();
};
// generates random number from 0 - 2
const randomNum = () => {
  myRand = Math.floor(Math.random() * 3);
  return myRand;
};

const mainLogic = () => {
  if (playerChoice === compChoice) {
    result.textContent = `Its a Tie!`;
    pwin = false;
    cwin = false;
  } else if (
    (playerChoice === "✊" && compChoice === "🤚") ||
    (playerChoice === "🤚" && compChoice === "✌") ||
    (playerChoice === "✌" && compChoice === "✊")
  ) {
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
    cscore.textContent = `Logik: ${mycscore}`;
    game.innerHTML = `${compChoice} beats ${playerChoice}`
  } else if (pwin === true && cwin === false) {
    mypscore++;
    pscore.textContent = `You: ${mypscore}`;
    game.innerHTML = `${playerChoice} beats ${compChoice}`;
  } else if (pwin === false && cwin === false) {
    ties++;
    tie.textContent = `Ties: ${ties}`;
    game.innerHTML =`🙃`
  }
}

reset.addEventListener("click", function () {
  location.reload();
});

function check() {
  if (ties > (mypscore + mycscore || ties+mypscore+mycscore===3)) {
    alert('This round ended in a Tie 🤝')
  }else if (mypscore > mycscore) {
    alert(`Yay! , You won this round ☺.`);
  }else if(mycscore>mypscore) alert("Computer Won this round🙃");
}
