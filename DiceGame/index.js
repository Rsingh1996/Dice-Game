var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").src = randomImageSource1;
document.querySelector(".img2").src = randomImageSource2;

if (randomNumber1 > randomNumber2) {
  //if Player 1 wins
  document.querySelector("h1").innerText = "Player 1 Wins !";
} else if (randomNumber2 > randomNumber1) {
  //if Player 2 wins
  document.querySelector("h1").innerText = "Player 2 Wins !";
} else {
  //if draw
  document.querySelector("h1").innerText = "Draw !";
}
