let userChoice = prompt("choose",'');
console.log(userChoice);

const player = () => {
  switch(userChoice){
    case 'rock':
      return 1;
    case 'paper':
      return 2;
    case 'scissors':
      return 3;
  }
}
console.log(player());


// ================ get computer choice ================ 
const getComputerChoice =  Math.floor(Math.random()*3)+1;//Random number is for 3 choices between 0 and 2



const computerChoice = getComputerChoice;
    
  // =============for running code=============
console.log(computerChoice );
    //console.log(getComputerChoice());
    //console.log(getComputerChoice());

  // ========== mapping choices ==========


    //============== compare choices ==============


  //console.log(determineWinner());
    //computer sends result 

  // const choice1 = 1;
  // const choice2 = 1;

const getWinner = (choice1,choice2) => {
    if(choice1 - choice2 === 1 || choice1 - choice2 === -2) {
      return('player wins!');
    }else if (choice1 - choice2 === 0){
      return('its a tie');
    }else {
      return('computer wins!');
    }
  }


  const winner = getWinner(player(),computerChoice);
  console.log(winner);