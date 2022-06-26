/**************************** Rock Paper Scissors App ***
  https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors#assignment

  https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors#assignment 
  2a.
  2b.
    Create three buttons, one for each selection. 
    Add an event listener to the buttons that call(s) your playRound function (and returns) the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
    
  Errors/Notes:
})
*/
const rpsBtns = document.querySelectorAll('.button-wrap button');
rpsBtns.forEach((button) => {
  button.addEventListener('click', playRound);
});
function playRound(e) {
  humanSelection = e.target.textContent;
  console.log(humanSelection)
  // humanSelection = humanSelection.toLowerCase();
// Is it possible to convert to an array (or is object better?) and loop through results?
  switch (true) {
    case humanSelection === 'rock' && computerSelection === 'rock':
      console.log('It\'s a tie.');
      break;
    case humanSelection === 'rock' && computerSelection === 'paper':
      console.log(`${computerSelection} SMOTHERS ${humanSelection}`);
      computerScore++;
      break;
    case humanSelection === 'rock' && computerSelection === 'scissors':
      console.log(`${humanSelection} CRUSHES ${computerSelection}`);
      humanScore++;
      break;
    
    case humanSelection === 'paper' && computerSelection === 'paper':
      console.log('It\'s a tie.');
      break;
    case humanSelection === 'paper' && computerSelection === 'scissors':
      console.log(`${computerSelection} SLICES ${humanSelection}`);
      computerScore++;
      break;
    case humanSelection === 'paper' && computerSelection === 'rock':
      console.log(`${humanSelection} SMOTHERS ${computerSelection}`);
      humanScore++;
      break;
    
    case humanSelection === 'scissors' && computerSelection === 'scissors':
      console.log('It\'s a tie.');
      break;
    case humanSelection === 'scissors' && computerSelection === 'rock':
      console.log(`${computerSelection} CRUSHES ${humanSelection}`);
      computerScore++;
      break;
    case humanSelection === 'scissors' && computerSelection === 'paper':
      console.log(`${humanSelection} SLICES ${computerSelection}`);
      humanScore++;
      break;
  }

//   if (humanScore === 5) {
//     console.log('HUMANITY WINS!');
//   } else if (computerScore === 5) {
//     console.log('Submit to the superior A.I. Race')
//   }

//   console.log(`humanScore: ${humanScore}`);
//   console.log(`computerScore: ${computerScore}`);

// return `${humanSelection} and ${computerSelection}`;
} // playRound

function computerPlay(randoNum) {
  randoNum = parseInt(Math.random() * (100 - 1) + 7);
  if (randoNum > 100) {
    return randoNum - 20;
  } else if (randoNum < 1) {
    return randoNum + Math.random() * (100 - 1);
  }
  if (randoNum >= 1 && randoNum < 33) {
    return randoNum = 'rock';
  } else if (randoNum >= 34 && randoNum <= 66) {
    return randoNum = 'scissors';
  } else if (randoNum >= 67 && randoNum <= 100) {
    return randoNum = 'paper';
  }
}
// computerPlay();

// playGame();
function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  // you want statement to return false as soon as one of your conditions turns false
  // you want your loop to run as long as both conditions are true '@riri's babybump'
  // && returns TRUE if BOTH operands are TRUTHY and FALSE otherwise.
  // for (let i = 1; humanScore < 5 && computerScore < 5; i++) { 
  //   const computerSelection = computerPlay();

// console.log('this is computerSelection: ', computerSelection);
    let humanSelection = prompt('Make a selection: Rock, Paper, or Scissors');

    playRound(humanSelection, computerSelection); 
    
    function playRound(humanSelection, computerSelection) {
      humanSelection = humanSelection.toLowerCase();
  // Is it possible to convert to an array (or is object better?) and loop through results?
      switch (true) {
        case humanSelection === 'rock' && computerSelection === 'rock':
          console.log('It\'s a tie.');
          break;
        case humanSelection === 'rock' && computerSelection === 'paper':
          console.log(`${computerSelection} SMOTHERS ${humanSelection}`);
          computerScore++;
          break;
        case humanSelection === 'rock' && computerSelection === 'scissors':
          console.log(`${humanSelection} CRUSHES ${computerSelection}`);
          humanScore++;
          break;
        
        case humanSelection === 'paper' && computerSelection === 'paper':
          console.log('It\'s a tie.');
          break;
        case humanSelection === 'paper' && computerSelection === 'scissors':
          console.log(`${computerSelection} SLICES ${humanSelection}`);
          computerScore++;
          break;
        case humanSelection === 'paper' && computerSelection === 'rock':
          console.log(`${humanSelection} SMOTHERS ${computerSelection}`);
          humanScore++;
          break;
        
        case humanSelection === 'scissors' && computerSelection === 'scissors':
          console.log('It\'s a tie.');
          break;
        case humanSelection === 'scissors' && computerSelection === 'rock':
          console.log(`${computerSelection} CRUSHES ${humanSelection}`);
          computerScore++;
          break;
        case humanSelection === 'scissors' && computerSelection === 'paper':
          console.log(`${humanSelection} SLICES ${computerSelection}`);
          humanScore++;
          break;
      }

      if (humanScore === 5) {
        console.log('HUMANITY WINS!');
      } else if (computerScore === 5) {
        console.log('Submit to the superior A.I. Race')
      }

      console.log(`humanScore: ${humanScore}`);
      console.log(`computerScore: ${computerScore}`);

  return `${humanSelection} and ${computerSelection}`;
    } // playRound
    // playRound(humanSelection, computerSelection);
    // console.log(`This is humanSelection ${humanSelection}`);
    // console.log(`This is computerSelection ${computerSelection}`);
  // } // for loop
} // playGame
