document.addEventListener("DOMContentLoaded", function() {
  let playerLives = 5;
  let computerLives = 5;
  
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");
  
  let playerChoice = null;
  
  rock.addEventListener("click", function() {
    playerChoice = 1;
    handleGameLogic(playerChoice);
  });
  
  paper.addEventListener("click", function() {
    playerChoice = 2;
    handleGameLogic(playerChoice);
  });
  
  scissors.addEventListener("click", function() {
    playerChoice = 3;
    handleGameLogic(playerChoice);
  });
  
  function handleGameLogic(playerChoice) {
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
      }else {
        return 0;
      }
    }

    const computerDamage = (win) => {
      if(win === 'Computer wins!'){
        return 1;
      }else {
        return 0;
      }
    }

    playerLives = playerLives - computerDamage(roundWinner);
    console.log(playerLives);

    computerLives = computerLives - playerDamage(roundWinner);
    console.log(computerLives);

    const determineWinner = (lives1 ,lives2) => {
      if (lives1 === 0){
        return 'GG u lost!!!!!!!!!!!!!';
      } else if (lives2 === 0) {
        return 'GG U WON!!!!!!!!!!!!!!';
      }
    }

    const winner = determineWinner(playerLives, computerLives);
    console.log(winner);
  }


  });