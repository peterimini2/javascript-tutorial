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