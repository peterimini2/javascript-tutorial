// demo-2.html script

console.log(Math.PI);
console.log(Math.pow(2, 3));

console.log("Peter".charAt(3)); 


//Test grading system
let testScore = 73; 
let myGrade =
  testScore >= 90 ? "A" :
  testScore >= 80 ? "B" :
  testScore >= 70 ? "C" :
  testScore >= 60 ? "D" :
  testScore >= 50 ? "E" :
  "F";
console.log(`My test grade is ${myGrade}.`);

// Rock, paper, scissors game
let playerOne = "paper"; 
let computer = "rock"
let result =
  playerOne === computer ? "Tie!"
  : playerOne === "rock" && computer === "paper" ? "Computer wins!"
    : playerOne === "paper" && computer === "scissors" ? "Computer wins!"
      : playerOne === "scissors" && computer === "rock" ? "Computer wins!"
        : "playerOne wins!";
console.log(result);

confirm("Ok === True\nCancel === False");

 //User Input
let name = prompt("Please enter your name.");
if (name) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
  console.log(name);
} else {
  console.log("You didn't enetr your name.");
}

My First Interactive game 
let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame) {
  //play
  let playerChoice = prompt("Please enter rock, paper, or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" ||
      playerOne === "scissors") {

  let computerChoice = Math.floor(Math.random() * 3 + 1);
  let computer = computerChoice === 1 ? "rock"
    : computerChoice === 2 ? "paper"
    : "scissors"
      
      let result =
        playerOne === computer
          ? "Tie!"
          : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer}
      \nComputer wins!`
            : playerOne === "paper" && computer === "scissors"
              ? `playerOne: ${playerOne}\nComputer: ${computer}
      \nComputer wins!`
              : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}
      \nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}
      \nPlayerOne wins!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing");
    } else {
      alert("You didn't choose any.");
    }
  } else {
    alert("Guesss you changed your mind, maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}