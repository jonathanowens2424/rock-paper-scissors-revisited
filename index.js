// determine computer's choice of either rock, paper or scissors

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function checkIfTie(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    console.log("Tie");
    return getUserChoice();
  }

  //if the user picked rock
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      console.log(`You picked rock. The computer picked paper. You lost!`);
    } else if (computerChoice === "scissors") {
      console.log(`You picked rock. The computer picked scissors. You won!`);
    }
  }

  // if the user picked paper

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log(`You picked paper. The computer picked scissors. You lost!`);
    } else if (computerChoice === "rock") {
      console.log(`You picked paper. The computer picked rock. You won!`);
    }
  }

  // if the user picked scissors
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log(`You picked scissors. The computer picked rock. You lost!`);
    } else if (computerChoice === "paper") {
      console.log(`You picked scissors. The computer picked paper. You won!`);
    }
  }
}

let computerChoice = getComputerChoice();

const paperButton = document.querySelector("#paper");
const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector("#scissors");

checkIfTie(computerChoice, userChoice);
