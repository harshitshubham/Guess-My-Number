"use strict";

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ NO number";
  } else if (guess === SecretNumber) {
    document.querySelector(".number").textContent = SecretNumber;
    document.querySelector(".message").textContent = "🏆 Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > SecretNumber ? "📈 Too high " : "📈 Too low ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  // } else if (guess > SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high ";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  // } else {
  //   document.querySelector(".message").textContent = "💥 You lost the game";
  // }
  // } else if (guess < SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too low ";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lost the game";
  //   }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
