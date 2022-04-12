playerText = document.querySelector("#player");
computerText = document.querySelector("#computer");
resultText = document.querySelector("#result");
choiceBtn = document.querySelectorAll(".gameBtn");
let player;
let computer;
let result;

choiceBtn.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerturn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = winner();
  })
);
function computerturn() {
  randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSOR";
      break;
  }
}
function winner() {
  if (player == computer) {
    return "draw";
  } else if (player == "ROCK") {
    return computer == "PAPER" ? "you lose" : "you won";
  } else if (player == "PAPER") {
    return computer == "ROCK" ? "you won" : "you lose";
  } else if (player == "SCISSOR") {
    return computer == "PAPER" ? "you won" : "you lose";
  }
}
