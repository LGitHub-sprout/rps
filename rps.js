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

/*
  From @coderman on TOP Discord
  Incorporate the array and switch stmts for alt version.
  
  let score3= [];

  //This generates a random choice, either rock paper or scissors 
  function computerplay() {
    let pcchoise = ["rock","paper","scissors"];
    let rendom = Math.floor(Math.random()*pcchoise.length);

    let numb = pcchoise[rendom];

    // console.log('computerplay number: ', numb)
    return numb;
  }

  let box1 = document.getElementById("box1");
  box1.addEventListener("click", rockbtn);

  function rockbtn(e) {
    let computerchoice= computerplay();
    // let container = document.querySelector(".cont1");
    
    console.log('computer choice: ', computerchoice)
    console.log('event target button (human player choice): ', e.target.textContent)
    
    switch (computerchoice) {
      case "rock":
        let h52= document.createElement("h5");
        h52.textContent="rock vs rock equals draw";
        // container.appendChild(h52); 
        let sum = score3++;
        console.log('switch case: rock')
        break;
      case "paper":
        let h53= document.createElement("h5");
        h53.textContent="paper vs rock equals win for paper";
        // container.appendChild(h53);
        console.log('switch case: paper')
        break;
      case "scissors":
        let h5= document.createElement("h5");
        h5.textContent="rock vs scissors equals win for rock";
        // container.appendChild(h5);
        console.log('switch case: scissors')
        break;
    }
  }

  function paperbtn() {
    let computerchoice= computerplay();
    let container2 = document.querySelector(".cont2");

    console.log(computerchoice)

      switch(computerchoice) { 
  
          case "rock":
        let h52= document.createElement("h5");
          h52.textContent="rock vs paper equals win for paper";
          container2.appendChild(h52);
          break;
          case "paper":
          let h53= document.createElement("h5");
            h53.textContent="paper vs paper equals draw";
            container2.appendChild(h53);
            break;
  
            case "scissors":
              let h5= document.createElement("h5");
              h5.textContent="scissors vs paper equals win for scissors";
              container2.appendChild(h5);
              break;
      }
  }
  
  let box2= document.getElementById("box2");
  box2.addEventListener("click",paperbtn);

  let box3= document.getElementById("box3");
  box3.addEventListener("click",scissorsbtn);

  function scissorsbtn() {

    let computerchoice= computerplay();
    let container3 = document.querySelector(".cont3");
    
    console.log(computerchoice)

    switch (computerchoice) {
      case "rock":
      let h52= document.createElement("h5");
        h52.textContent="scissors vs rock equals win for rock";
        container3.appendChild(h52);
        break;
        case "paper":
          let h53= document.createElement("h5");
          h53.textContent="paper vs scissors equals win for scissors";
          container3.appendChild(h53);
          break;

          case "scissors":
              let h5= document.createElement("h5");
              h5.textContent="scissors vs scissors equals draw";
              container3.appendChild(h5);
              break;
      }
  }

  // let score = document.querySelector("#score");
  // let addscore= document.createElement("h5");

  // let scoretext= `The score is ${score3}`;
  // addscore.textContent=scoretext;

  // score.appendChild(addscore); 
*/