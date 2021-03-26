// you can write js here
console.log('exo-3');



function getPlayerChoice() {
    let playInput = prompt("Your choice ( rock, paper, scissors) ?");

    playInput = playInput.toLowerCase();

    if(playInput=== 'rock' || playInput === 'paper' || playInput === 'scissors') {
        console.log(playInput);
    return playInput;    
    }
    else {
        return "Make a choice";
    }
    
}

function getComputerChoice() {
    let playInput; 
   var i = Math.floor(Math.random() * 3)
  switch (i){
      case 0 : 
      playInput = 'rock'
      
      break;
      case 1: 
      playInput = 'paper'

      break;
      case  2 : 
      playInput = 'scissors'
      break;
      default : 
      
  }
  console.log(playInput);
  return playInput;
}



function findWinner(playerChoice, computerChoice) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();

    if ( playerChoice === computerChoice) {
        return 'Tied'
    
    }
    else if (playerChoice === 'rock') {
        if(computerChoice === 'scissors') {
            return 'Won';
        } 
        else {
            return 'Lost';
        }
    
    }
    else if(playerChoice === 'paper') {
        if (computerChoice === 'rock' ) {
            return 'Won';
        } 
        else {
            return 'Lost';
        }
    }
    else if(playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'Won';
        }
        else {
            return 'Lost';
        }
    }

}
console.log(findWinner());
function playGame() {
  uChoice = getPlayerChoice('rock'); 
}
