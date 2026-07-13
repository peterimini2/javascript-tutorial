// // demo-2.html script

// console.log(Math.PI);
// console.log(Math.pow(2, 3));

// console.log("Peter".charAt(3));


// //Test grading system
// let testScore = 73;
// let myGrade =
//   testScore >= 90 ? "A" :
//   testScore >= 80 ? "B" :
//   testScore >= 70 ? "C" :
//   testScore >= 60 ? "D" :
//   testScore >= 50 ? "E" :
//   "F";
// console.log(`My test grade is ${myGrade}.`);

// // Rock, paper, scissors game
// let playerOne = "paper";
// let computer = "rock"
// let result =
//   playerOne === computer ? "Tie!"
//   : playerOne === "rock" && computer === "paper" ? "Computer wins!"
//     : playerOne === "paper" && computer === "scissors" ? "Computer wins!"
//       : playerOne === "scissors" && computer === "rock" ? "Computer wins!"
//         : "playerOne wins!";
// console.log(result);

// confirm("Ok === True\nCancel === False");

//  //User Input
// let name = prompt("Please enter your name.");
// if (name) {
//   console.log(name.length);
//   console.log(name.trim().length);
//   console.log(name.trim());
//   console.log(name);
// } else {
//   console.log("You didn't enetr your name.");
// }

// // My First Interactive game
// let playGame = confirm("Shall we play rock, paper, scissors?");
// if (playGame) {
//   //play
//   let playerChoice = prompt("Please enter rock, paper, or scissors.");
//   if (playerChoice) {
//     let playerOne = playerChoice.trim().toLowerCase();
//     if (playerOne === "rock" || playerOne === "paper" ||
//       playerOne === "scissors") {

//   let computerChoice = Math.floor(Math.random() * 3 + 1);
//   let computer = computerChoice === 1 ? "rock"
//     : computerChoice === 2 ? "paper"
//     : "scissors"
      
//       let result =
//         playerOne === computer
//           ? "Tie!"
//           : playerOne === "rock" && computer === "paper"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}
//       \nComputer wins!`
//             : playerOne === "paper" && computer === "scissors"
//               ? `playerOne: ${playerOne}\nComputer: ${computer}
//       \nComputer wins!`
//               : playerOne === "scissors" && computer === "rock"
//                 ? `playerOne: ${playerOne}\nComputer: ${computer}
//       \nComputer wins!`
//                 : `playerOne: ${playerOne}\nComputer: ${computer}
//       \nPlayerOne wins!`;
//       alert(result);
//       let playAgain = confirm("Play Again?");
//       playAgain ? location.reload() : alert("Ok, thanks for playing");
//     } else {
//       alert("You didn't choose any.");
//     }
//   } else {
//     alert("Guesss you changed your mind, maybe next time.");
//   }
// } else {
//   alert("Ok, maybe next time.");
// }

// // Loops
// let myNumber = 0;
// while (myNumber < 50) {
//   myNumber += 3;
//   console.log(myNumber);
// } //Don't create an endless loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let x = 10;
// let y = 500;
// let z = x + y;
// console.log(z)

// for (let i = 1; i <= 5; i++) {
//   console.log("Example " + i)
// }

// let battery = 100;
// while (battery > 0) {
//   console.log("Phone is off");
//   battery -= 20;
// }


// // funtions

// const toProperCase = (name) => {
//   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// };

// console.log(toProperCase("pEtER"));

// //Arrays
// const people = ["Man", "Woman", "Boy", "Girl"];
// people[1] = "Child"; //To change an array element to another
// // let myList = people.toString();// To change array to string
// let myList = JSON.stringify(people);
// console.log(myList);

// people.push("Elder") // add an array element
// //people.pop(); // remove the last element in an array
// //people.shift(); //remove the first element in an array
// let position = people.indexOf("Boy");
// console.log("Boy is found in position " + position);

// //Objects
// const person = {
//   firstName: "Peter",
//   lastName: "Imini",
//   age: 24,
//   location: "Warri",
//   fullName: function () {
//     return (this.firstName + " " + this.lastName).toUpperCase();
//   }
// };// Object method
// console.log("Hello, " + person.firstName + " " + person.lastName + "." + " Welcome to " + person.location);
// console.log(person.fullName());

// //object constructor
// function Family(first, last, age, location) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.location = location;
// }
// //Create new person
// const myDad = new Family("Amos", "Imini", 61, "Warri");
// const myMom = new Family("Victoria", "Imini", 54, "Warri");

// console.log("My dad and mom, " + myDad.firstName + " and " + myMom.firstName + " " + myDad.lastName + ", stay in " + myDad.location + ".");

// //Class
// class phone {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) { //Year
//     return x - this.year;
//   }
// }
// const date = new Date();
// let year = date.getFullYear();

// const myPhone1 = new phone("Infinix", 2025);
// const myPhone2 = new phone("Tecno", 2024);

// console.log(`My first phone is ${myPhone1.name}`);
// console.log("My " + myPhone2.name + " phone is " + myPhone2.age(year) + " years old.");

// //JSON
// const text = '{"name": "Peter", "age":24, "city": "Warri"}'
// const myDataObj = JSON.parse(text); //String to object
// console.log(myDataObj);
// const myDataString = JSON.stringify(myDataObj); //Object to String
// console.log(myDataString);

// //Object to String
// const myPhone = {
//   name: "Tecno",
//   year: 2012,
//   country: "USA"
// };
// console.log(myPhone);
// const myPhoneString = JSON.stringify(myPhone);
// console.log(myPhoneString);

//DOM - Document Object Model
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

const views = document.getElementsByClassName("view");
console.log(views);
const sameViews = document.querySelectorAll('.view');
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "purple";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World";
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Welcome</h1> <p>This is from Javascript</p>`;
console.log(navbar);

view1.style.display = "none"; // Display in webpage
view2.style.display = "flex"; // Display in webpage
view2.style.flexDirection = "wrap";
view2.style.flexWrapStyle = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
  view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#000";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
}
//createDivs(view2, 10);
for (let i = 1; i <= 12; i++) {
  createDivs(view2, i);
}