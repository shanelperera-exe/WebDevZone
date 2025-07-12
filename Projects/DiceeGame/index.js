function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function displayWinner(number1, number2) {
    var message;
    if (number1 > number2) {
        document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
    }
    else if (number2 > number1) {
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
    }
    else {
        document.querySelector("h1").textContent = "Draw!"
    }
}

var randomNumber1 =  getRandomNumber();
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;

var randomNumber2 =  getRandomNumber();
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1)
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

displayWinner(randomNumber1, randomNumber2);