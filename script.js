"use-strict";

const player1El = document.querySelector(".player-0");
const player2El = document.querySelector(".player-1");
const btnRock = document.querySelector(".Rock");
const btnPaper = document.querySelector(".Paper");
const btnScissors = document.querySelector(".Scissors");
const btnPlay = document.querySelector(".Play");
const score1 = document.querySelector(".score-0");
const score2 = document.querySelector(".score-1");
const picturesArr = ["rock.png", "paper.png", "scissors.png"];
const result = document.querySelector(".result");
const btnPlayAgain = document.querySelector(".Play-again");

const buttons = [btnRock, btnPaper, btnScissors, btnPlay];

let player1Score = 0;
let player2Score = 0;

const reset = function () {
  player1Score = 0;
  player2Score = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  result.textContent = "First to 5!";
  buttons.forEach((b) => b.classList.remove("hidden"));
  btnPlayAgain.classList.add("hidden");
};

const isGameWon = function () {
  if (player1Score === 5 || player2Score === 5) {
    result.textContent = "GAME OVER";
    buttons.forEach((b) => b.classList.add("hidden"));
    btnPlayAgain.classList.remove("hidden");
  }
};

const playGame = function () {
  const randomNum = Math.trunc(Math.random() * 3) + 1;
  player2El.src = picturesArr[randomNum - 1];

  if (player1El.src === player2El.src) {
    result.textContent = "It's a Draw!";
  } else if (
    player1El.src.endsWith("scissors.png") &&
    player2El.src.endsWith("paper.png")
  ) {
    result.textContent = "Player 1 wins!";

    player1Score += 1;
    score1.textContent = player1Score;
  } else if (
    player1El.src.endsWith("paper.png") &&
    player2El.src.endsWith("rock.png")
  ) {
    result.textContent = "Player 1 wins!";

    player1Score += 1;
    score1.textContent = player1Score;
  } else if (
    player1El.src.endsWith("rock.png") &&
    player2El.src.endsWith("scissors.png")
  ) {
    result.textContent = "Player 1 wins!";

    player1Score += 1;
    score1.textContent = player1Score;
  } else {
    result.textContent = "Player 2 wins!";

    player2Score += 1;
    score2.textContent = player2Score;
  }

  isGameWon();
};

btnRock.addEventListener("click", function () {
  player1El.src = picturesArr[0];
});

btnPaper.addEventListener("click", function () {
  player1El.src = picturesArr[1];
});

btnScissors.addEventListener("click", function () {
  player1El.src = picturesArr[2];
});

btnPlay.addEventListener("click", playGame);

btnPlayAgain.addEventListener("click", reset);
