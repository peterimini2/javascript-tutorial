// demo-2.html script

console.log(Math.PI);
console.log(Math.pow(2, 3));

console.log("Peter".charAt(3)); 

// Tenary operators (If..else)

let testScore = 73; //Test grading system
let myGrade =
  testScore >= 90 ? "A" :
  testScore >= 80 ? "B" :
  testScore >= 70 ? "C" :
  testScore >= 60 ? "D" :
  testScore >= 50 ? "E" :
  "F";
console.log(`My test grade is ${myGrade}.`);

let playerOne = "paper";
let computer = "rock"
let result =
  playerOne === computer ? "Tie!"
  : playerOne === "rock" && computer === "paper" ? "Computer wins!"
    : playerOne === "paper" && computer === "scissors" ? "Computer wins!"
      : playerOne === "scissors" && computer === "rock" ? "Computer wins!"
        : "playerOne wins!";
console.log(result);


 

 