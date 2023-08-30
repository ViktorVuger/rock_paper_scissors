
document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
  
    let playerChoice = null;
  
    button1.addEventListener("click", function() {
      playerChoice = 1;
      handleGameLogic(playerChoice);
    });
  
    button2.addEventListener("click", function() {
      playerChoice = 2;
      handleGameLogic(playerChoice);
    });
  
    button3.addEventListener("click", function() {
      playerChoice = 3;
      handleGameLogic(playerChoice);
    });
  
    function handleGameLogic(playerChoice) {
      const getComputerChoice = Math.floor(Math.random() * 3) + 1; // Random number for 3 choices between 1 and 3
      const computerChoice = getComputerChoice;
  
      console.log("Computer choice: " + computerChoice);
  
      const getWinner = (choice1, choice2) => {
        if (choice1 - choice2 === 1 || choice1 - choice2 === -2) {
          return 'Player wins!';
        } else if (choice1 === choice2) {
          return "It's a tie";
        } else {
          return 'Computer wins!';
        }
      }
  
      const winner = getWinner(playerChoice, computerChoice);
      console.log("Result: " + winner);
      alert(winner);
    }
  });
  