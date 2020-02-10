// Gameplay
let playerPick;
let computerPick;
let outcome;
let playerScore = 0;
let computerScore = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let restart = document.getElementById("restart");

let playerScoreDisplay = document.querySelector("#playerscore");
let computerScoreDisplay = document.querySelector("#computerscore");

//Player chooses rock
rock.addEventListener("click", rockPlay, true);

  function rockPlay(event) {
  let playerPick = "rock";
  alert("You chose " + playerPick);
   
  let computerChoiceArray = ["rock", "paper", "scissors"]
  let computerPick= computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];
  console.log(computerPick);

  if(computerPick === "rock") {
    console.log("tie");
    outcome = "tie";
  }
  if(computerPick === "paper") {
    console.log("lose");
    outcome = "lose";
  }
  if(computerPick === "scissors") {
    console.log("win");
    outcome = "win";
  }

  if(outcome === "win") {
    playerScore++;
  } else if(outcome === "lose") {
    computerScore++;
  }

  console.log(playerScore);
  console.log(computerScore);

  if(playerScore === 3) {
    alert("You won!");
    rock.removeEventListener("click", rockPlay, true);
    paper.removeEventListener("click", paperPlay, true);
    scissors.removeEventListener("click", scissorsPlay, true);
  } else if(computerScore === 3) {
    alert("You lost!")
    rock.removeEventListener("click", rockPlay, true);
    paper.removeEventListener("click", paperPlay, true);
    scissors.removeEventListener("click", scissorsPlay, true);
  }

  playerScoreDisplay.innerHTML = "Player Score: " + playerScore;
  computerScoreDisplay.innerHTML = "Computer Score: " + computerScore;
  
}

//Player chooses paper
paper.addEventListener("click", paperPlay, true);

  function paperPlay(event) {
  let playerPick = "paper";
  alert("You chose " + playerPick);
   
  let computerChoiceArray = ["rock", "paper", "scissors"]
  let computerPick= computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];
  console.log(computerPick);

  if(computerPick === "rock") {
    console.log("win");
    outcome = "win";
  }
  if(computerPick === "paper") {
    console.log("tie");
    outcome = "tie";
  }
  if(computerPick === "scissors") {
    console.log("lose");
    outcome = "lose";
  }

  if(outcome === "win") {
    playerScore++;
  } else if(outcome === "lose") {
    computerScore++;
  }

  console.log(playerScore);
  console.log(computerScore);

  if(playerScore === 3) {
    alert("You won!");
    rock.removeEventListener("click", rockPlay, true);
    paper.removeEventListener("click", paperPlay, true);
    scissors.removeEventListener("click", scissorsPlay, true);
  } else if(computerScore === 3) {
    alert("You lost!")
    rock.removeEventListener("click", rockPlay, true);
    paper.removeEventListener("click", paperPlay, true);
    scissors.removeEventListener("click", scissorsPlay, true);
  }

  playerScoreDisplay.innerHTML = "Player Score: " + playerScore;
  computerScoreDisplay.innerHTML = "Computer Score: " + computerScore;
}

//Player chooses scissors
scissors.addEventListener("click", scissorsPlay, true);
  
  function scissorsPlay(event) {
  let playerPick = "scissors";
  alert("You chose " + playerPick);
   
  let computerChoiceArray = ["rock", "paper", "scissors"]
  let computerPick= computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];
  console.log(computerPick);

  if(computerPick === "rock") {
    console.log("lose");
    outcome = "lose";
  }
  if(computerPick === "paper") {
    console.log("win");
    outcome = "win";
  }
  if(computerPick === "scissors") {
    console.log("tie");
    outcome = "tie";
  }

  if(outcome === "win") {
    playerScore++;
  } else if(outcome === "lose") {
    computerScore++;
  }

  console.log(playerScore);
  console.log(computerScore);

  if(playerScore === 3) {
    alert("You won!");
    rock.removeEventListener("click", rockPlay, true);
    paper.removeEventListener("click", paperPlay, true);
    scissors.removeEventListener("click", scissorsPlay, true);
  } else if(computerScore === 3) {
    alert("You lost!")
    rock.removeEventListener("click", rockPlay, true);
    paper.removeEventListener("click", paperPlay, true);
    scissors.removeEventListener("click", scissorsPlay, true);
  }

  playerScoreDisplay.innerHTML = "Player Score: " + playerScore;
  computerScoreDisplay.innerHTML = "Computer Score: " + computerScore;
}

restart.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  
  rock.addEventListener("click", rockPlay, true);
  paper.addEventListener("click", paperPlay, true);
  scissors.addEventListener("click", scissorsPlay, true);
  playerScoreDisplay.innerHTML = "Player Score: " + playerScore;
  computerScoreDisplay.innerHTML = "Computer Score: " + computerScore;
})






