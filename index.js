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

function determineResults(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    console.log("Tie");
    return;
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You picked rock. The computer picked paper. You lost!");
    } else if (computerChoice === "scissors") {
      console.log("You picked rock. The computer picked scissors. You won!");
    }
    return;
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("You picked paper. The computer picked scissors. You lost!");
    } else if (computerChoice === "rock") {
      console.log("You picked paper. The computer picked rock. You won!");
    }
    return;
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You picked scissors. The computer picked rock. You lost!");
    } else if (computerChoice === "paper") {
      console.log("You picked scissors. The computer picked paper. You won!");
    }
    return;
  }
}
const paperButton = document.querySelector("#paper");
const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector("#scissors");

paperButton.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  determineResults(computerChoice, "paper");
});

rockButton.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  determineResults(computerChoice, "rock");
});

scissorsButton.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  determineResults(computerChoice, "scissors");
});
