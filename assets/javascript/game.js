var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var left = document.getElementById("left");
var guesses = document.getElementById("guesses");

var computerChoices = ["q","w","e","r","t","y","u","i","o","p"];

var winsCount = 0;
var lossesCount = 0;
var leftCount = 10;

left.innerHTML = " " + leftCount;

// wins.innerHTML = (" " + "1");
// losses.innerHTML = (" " + "2");
// left.innerHTML = (" " + "3");
// guesses.innerHTML = (" " + "4");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function (event) {

    var userGuess = event.key;

    guesses.append(" " + userGuess + ",");

    if (userGuess === computerGuess) {
        winsCount++;
        alert("You did it!");
        wins.innerHTML = " " + winsCount;
        reset();
    } else if (leftCount === 0) {
        lossesCount++;
        losses.innerHTML = " " + lossesCount;
        alert("You're out of guesses! You lose!")
        reset();
    } else {
        leftCount--;
        left.innerHTML = " " + leftCount;
    }
}

function reset() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    leftCount = 10;
    left.innerHTML = " " + leftCount;
    guesses.innerHTML = "";
}
