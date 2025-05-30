let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  attempts++;

  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    message.style.color = "green";
  } else if (guess > randomNumber) {
    message.textContent = "Too high! Try again.";
    message.style.color = "orange";
  } else {
    message.textContent = "Too low! Try again.";
    message.style.color = "orange";
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
}
