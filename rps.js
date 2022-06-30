/**************************** Rock Paper Scissors App ***
  https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors#assignment

  https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors#assignment 
  2a.
  2b.
  2c. Display the running score, and announce a winner of the game once one player reaches 5 points.
      This seems to be the trickiest bit of this challenge.
      What's happening currently:
        Scoring isn't updated properly: I get an initial point on the first round but subsequent rounds write over previous scores.
          Using playGame2 callback function w a loop: seems like I'd be better off just rewriting the entire app.
          Everything breaks.
      Pseudocode:
        User clicks one of three choices: rock paper scissors
        Compare user choice of rock paper scissors to computer's random choice.
        Depending which choice wins:
          Optional: display results of each round to the browser.
          Output the running score to the browser and
          announce a winner of the game when one player reaches 5 points.

      Tues 9:30am
        going back to EOD Monday. it's basically working except score-keeping.
        I can't pull answer from thin air; I have no experience, so I googled this:
        https://dev.to/davidchedrick/creating-a-simple-timer-and-score-keeper-in-javascript-394g
        a.  Moving score initializations to global scope since maybe being overwritten is caused by local scope?
        b.  This seems to have solved the problem... I'm hoping ??

      Bugs:
        1.  Sometimes I get a number like 81 or 85 instead of a selection.
            Guessing computerPlay() being called early?
            No. This broke the app.
        2.  Counter isn't going to 5.
            Fixed.
        3.  First round isn't being counted.
              Initializing scores at zero works for logging but not DOM.
              Fixed.
*/
const rpsBtns = document.querySelectorAll('.button-wrap button');
rpsBtns.forEach((button) => {
  button.addEventListener('click', playRound);
});

let computerScore = 1;
let humanScore = 1;

const rpsScore = document.querySelector('.rps-score');
const computerScoreSpan = document.createElement('span');
const humanScoreSpan = document.createElement('span');
computerScoreSpan.textContent = 'Computer: 0';
humanScoreSpan.textContent =  'Human: 0';
rpsScore.append(computerScoreSpan, humanScoreSpan);

function playRound(e) {

  const computerSelection = computerPlay();

  const humanSelection = e.target.textContent.toLowerCase();
  const singleRoundResult = document.querySelector('.play-round-result');

  console.log(computerSelection);
  // Is it possible to use an array (or is object better?) and loop through results?
  // See https://github.com/rlmoser99/rock-paper-scissors/blob/master/script.js for combinging if stmts
  switch (true) {
    case humanSelection === 'rock' && computerSelection === 'rock':
      singleRoundResult.textContent = 'It\'s a tie.';
      break;
    case humanSelection === 'rock' && computerSelection === 'paper':
      singleRoundResult.textContent = `${computerSelection} SMOTHERS ${humanSelection}`;
      computerScoreSpan.textContent = 'Computer: ';
      computerScoreSpan.append(computerScore);
      computerScore++;
      break;
    case humanSelection === 'rock' && computerSelection === 'scissors':
      singleRoundResult.textContent = `${humanSelection} CRUSHES ${computerSelection}`;
      humanScoreSpan.textContent = 'Human: ';
      humanScoreSpan.append(humanScore);
      humanScore++;
      break;

    case humanSelection === 'paper' && computerSelection === 'paper':
      singleRoundResult.textContent = `It\'s a tie.`;
      break;
    case humanSelection === 'paper' && computerSelection === 'scissors':
      singleRoundResult.textContent = `${computerSelection} SLICE ${humanSelection}`;
      computerScoreSpan.textContent = 'Computer: ';
      computerScoreSpan.append(computerScore);
      computerScore++;
      break;
    case humanSelection === 'paper' && computerSelection === 'rock':
      singleRoundResult.textContent = `${humanSelection} SMOTHERS ${computerSelection}`;
      humanScoreSpan.textContent = 'Human: ';
      humanScoreSpan.append(humanScore);
      humanScore++;
      break;
    
    case humanSelection === 'scissors' && computerSelection === 'scissors':
      singleRoundResult.textContent = `It\'s a tie.`;
      break;
    case humanSelection === 'scissors' && computerSelection === 'rock':
      singleRoundResult.textContent = `${computerSelection} CRUSHES ${humanSelection}`;
      computerScoreSpan.textContent = 'Computer: ';
      computerScoreSpan.append(computerScore);
      computerScore++;
      break;
    case humanSelection === 'scissors' && computerSelection === 'paper':
      singleRoundResult.textContent = `${humanSelection} SLICE ${computerSelection}`;
      // console.log(`${humanSelection} SLICES ${computerSelection}`);
      humanScoreSpan.textContent = 'Human: ';
      humanScoreSpan.append(humanScore);
      humanScore++;
      break;
  }

  if (humanScore === 6) {
    alert('Humanity WINS!');
    // https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click
    window.location.reload(true);
  } else if (computerScore === 6) {
    alert('Submit to Superior Artificial Intelligence!');
    window.location.reload(true);
  }
} // playRound

// https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-how-do-you-handle-repeated-values
function computerPlay(randoNum) {
  randoNum = (Math.random() * (100) + 1);
  if (randoNum >= 1 && randoNum < 33) {
    return 'rock';
  } else if (randoNum >= 34 && randoNum <= 66) {
    return 'scissors';
  } else if (randoNum >= 67 && randoNum <= 100) {
    return 'paper';
  }
}
// computerPlay();

// https://github.com/paulooms/odin-rps/blob/main/script.js
// function computer() {
//   let choices = ['rock', 'paper', 'scissors'];
//   console.log(choices[Math.floor(Math.random() * choices.length)]);
// }
// computer(); // randomly selects one of 3 choices array