document.addEventListener("DOMContentLoaded", function() {
  let playerLives = 5;
  let computerLives = 5;

  const displayText = document.getElementById("player_name");

  const enteredText = prompt("Enter your name:");
  displayText.textContent = enteredText;

  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");
  
  let playerChoice = null;
  
  rock.addEventListener("click", function() {
    if (playerLives > 0 && computerLives > 0) {
      playerChoice = 1;
      handleGameLogic(playerChoice);
    }
  });
  
  paper.addEventListener("click", function() {
    if (playerLives > 0 && computerLives > 0) {
      playerChoice = 2;
      handleGameLogic(playerChoice);
    }
  });
  
  scissors.addEventListener("click", function() {
    if (playerLives > 0 && computerLives > 0) {
      playerChoice = 3;
      handleGameLogic(playerChoice);
    }
  });
  
  function handleGameLogic(playerChoice) {
    if (playerLives <= 0 || computerLives <= 0) {
      // Game has already ended, do nothing
      return;
    }
    
    const getComputerChoice = Math.floor(Math.random() * 3) + 1; // Random number for 3 choices between 1 and 3
    const computerChoice = getComputerChoice;
  
    console.log("Computer choice: " + computerChoice);
  
    const getRoundWinner = (choice1, choice2) => {
      if (choice1 - choice2 === 1 || choice1 - choice2 === -2) {
        return 'Player wins!';
      } else if (choice1 === choice2) {
        return "It's a tie";
      } else {
        return 'Computer wins!';
      }
    }
  
    const roundWinner = getRoundWinner(playerChoice, computerChoice);
    console.log("Result: " + roundWinner);
    //alert(roundWinner);

    const playerDamage = (win) => {
      if(win === 'Player wins!'){
        return 1;
      } else {
        return 0;
      }
    }

    const computerDamage = (win) => {
      if(win === 'Computer wins!'){
        return 1;
      } else {
        return 0;
      }
    }

    playerLives = playerLives - computerDamage(roundWinner);
    console.log(playerLives);


    computerLives = computerLives - playerDamage(roundWinner);
    console.log(computerLives);
    
    document.querySelector('.p1 .in').style.width = (playerLives * (100 / 5)) + '%';
    document.querySelector('.p2 .in').style.width = (computerLives * (100 / 5)) + '%';

    const determineWinner = (lives1 ,lives2) => {
      if (lives1 <= 0){
        alert('GG u lost!!!!!!!!!!!!!');
        // Game ended, remove event listeners to prevent further clicks
        rock.removeEventListener("click");
        paper.removeEventListener("click");
        scissors.removeEventListener("click");
      } else if (lives2 <= 0) {
        alert('GG U WON!!!!!!!!!!!!!!');
        // Game ended, remove event listeners to prevent further clicks
        rock.removeEventListener("click");
        paper.removeEventListener("click");
        scissors.removeEventListener("click");
      }
    }

    determineWinner(playerLives, computerLives);
  }
});
