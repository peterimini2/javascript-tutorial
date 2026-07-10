const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning, Peter";
} else if (time < 20) {
  greeting = "Good day, Peter";
} else {
  greeting = "Good evening, Peter"
}
document.getElementById('greet').innerHTML = greeting;

// const button = document.getElementById('button1');
// button.addEventListener('click', () => {
//   document.getElementById('demo').innerHTML = "Registration Complete!"
// })

// const offBtn = document.getElementById('offbtn');
// const onBtn = document.getElementById('onbtn');
// const image = document.getElementById('lightbulb');

// onBtn.addEventListener('click', () => {
//   image.src = "images/pic_bulbon.gif"
// })

// offBtn.addEventListener("click", () => {
//     image.src = "images/pic_bulboff.gif";
// });

// document.getElementById("h3").innerHTML = "My World is not perfect";

// document.getElementById("text").innerText = "Now is the time";

// alert("Welcome!");

// console.log("Output a message to console");

// document.getElementById("demo1").innerHTML = "peter"

// let a = 4;
// let x = (2 * 3) + a;
// document.getElementById("demo-3").innerHTML = x;

// let number1 = 45;
// let number2 = 54;
// let result = number1 > number2;
// document.getElementById("demo-4").innerHTML = "is 45 less than 54? " + result;

// function myFunction() {
//   let eligible;
//   let age = Number(document.getElementById("age").value);
//   if (isNaN(age)) {
//     eligible = "Input is not a number";
//   } else {
//     eligible = (age < 18) ? "Too younng" : "Old enough";
//   }
//   document.getElementById("demo-5").innerHTML = eligible + " to vote";
// }

// // Loops
// const food = ["Rice", "Beans", "Yam", "Egg", "Meat"];

// let word = "";
// for (let i = 0; i < food.length; i++) {
//   word += food[i] + "<br>";
// }
// document.getElementById("demo-6").innerHTML = text;

// // While loop
// let text = "";
// let i = 0;
// while (i < 10) {
//   text += "Countdown " + i + "<br>";
//   i++;
// }
//  document.getElementById("demo-7").innerHTML = text;

// //Exponential notation
// let ay = 1234e2;
// let by = 433e-4;
// console.log(a);
// console.log(b);

// let text1 = "Peter";
// text2 = "Imini";
// text3 = text1 + " " + text2;
// console.log(text3);

// let x = 22;
// let y = 10;
// x += y;
// console.log(x);

// // comparison operator
// let o = 5;
// let p = "Boy";
// let result = o === p;
// console.log(result);

// // && operator
// let boy = true;
// let girl = boy &&= 10;
// console.log("The value of girl is " + boy);

// || operator
// let boy = false;
// let girl = boy ||= 20;
// console.log("Value is " + boy);

// Nullish operator
// let x;
// x ??= 50;
// console.log("value is " + x);

// Spread Operator
// let num = "12345678";
// let min = Math.min(...num);
// let max = Math.max(...num);
// console.log("Minimum number: " + min + " and Maximum number: " + max);

// conditional statements
// let greeting = "Good night";
// if (new Date().getHours() < 18) {
//   greeting = "Good evening";
// }
// console.log(greeting);

// let x = "peter";

// console.log(x);

let y = 25;
let z = (10 * 5) + y;

console.log(z);

let name = "peter";
name += " imini";

console.log(name);

  let j = 12;

  if (j > 11) {
    console.log("correct");
  } else {
    console.log("incorrect");
}
  
let d = 14;
if (d > 15) {
  console.log("correct");
} else if (d > 17) {
  console.log("false");
} else {
  console.log("incorrect")
}

