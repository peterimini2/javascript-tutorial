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

alert("Do not proceed");

console.log("Output a message to console");

let bank = "uba"

let loan = "htc"

let relationship = "peter"

document.getElementById("demo1").innerHTML = "peter"

