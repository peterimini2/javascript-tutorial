const button = document.getElementById('button1');
button.addEventListener('click', () => {
  document.getElementById('demo').innerHTML = "Registration Complete!"
})

const offBtn = document.getElementById('offbtn');
const onBtn = document.getElementById('onbtn');
const image = document.getElementById('lightbulb');

onBtn.addEventListener('click', () => {
  image.src = "images/pic_bulbon.gif"
})

offBtn.addEventListener("click", () => {
    image.src = "images/pic_bulboff.gif";
});

document.getElementById("h3").innerHTML = "My World is not perfect";

document.getElementById("text").innerText = "Now is the time";

alert("Welcome!");

console.log("Output a message to console");

document.getElementById("demo1").innerHTML = "peter"

let a = 4;
let x = (2 * 3) + a;
document.getElementById("demo-3").innerHTML = x;

let number1 = 45;
let number2 = 54;
let result = number1 > number2;
document.getElementById("demo-4").innerHTML = "is 45 less than 54? " + result;

function myFunction() {
  let eligible;
  let age = Number(document.getElementById("age").value);
  if (isNaN(age)) {
    eligible = "Input is not a number";
  } else {
    eligible = (age < 18) ? "Too younng" : "Old enough";
  }
  document.getElementById("demo-5").innerHTML = eligible + " to vote";
}

// Loops
const food = ["Rice", "Beans", "Yam", "Egg", "Meat"];

// let text = "";
// for (let i = 0; i < food.length; i++) {
//   text += food[i] + "<br>";
// }
// document.getElementById("demo-6").innerHTML = text;

// While loop
let text = "";
let i = 0;
while (i < 10) {
  text += "Countdown " + i + "<br>";
  i++;
}

let 
document.getElementById("demo-7").innerHTML = text;