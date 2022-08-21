var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + randomNum1 + ".png"; // dice1.png - dice6.png

var randomImgSrc = "images/" + randomImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSrc);


var randomNum2 = Math.floor(Math.random() * 6) + 1; // Operation on 2nd dice

var randomImage2 = "dice" + randomNum2 + ".png"; // dice1.png - dice6.png

var randomImgSrc2 = "images/" + randomImage2; // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if (randomNum1 == randomNum2) {
  document.querySelector("h1").innerHTML = " Draw 👏 ";
} else if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = " Player 1 Wins 🤩 ";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins 😎 ";
}
