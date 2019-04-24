//Page Start: Setting/declaring all variable default values and displaying them in the appropriate spots
let wins = 0;

let losses = 0;

let yourScore = 0;

let target;

const messageWon = "You Won!";

const messageLost = "You Lost!";

const crystals = document.getElementsByClassName("crystal");

let targetScoreDiv = document.getElementById("targetScore");

const yourScoreDiv = document.getElementById("yourScore");

const messageDiv = document.getElementById("message");

const winsDiv = document.getElementById("wins");

const lossesDiv = document.getElementById("losses");

targetScore.innerHTML = target;

yourScoreDiv.innerHTML = yourScore;

document.getElementById("wins").innerHTML = wins;

document.getElementById("losses").innerHTML = losses;

//Creating the functions to assign random values to the crystals and target score

function randomCrystalScore(){
    return Math.floor(Math.random() * 12) + 1;
}

function randomScore() {
    return Math.floor(Math.random() * 109) + 12;
}

function setCrystalValues(){
    document.getElementById("blue").value = randomCrystalScore();
    document.getElementById("green").value = randomCrystalScore();
    document.getElementById("red").value = randomCrystalScore();
    document.getElementById("yellow").value = randomCrystalScore();
    target = randomScore();
    targetScoreDiv.innerHTML = target;
}

setCrystalValues();

//Creating the click event to increase user score by the set crystal value and seeing if the user won or lost yet

function crystalClick(event) {

    const {value} = event.target;
    yourScore += value;
    console.log(yourScore);
    console.log(event.target.value);
    yourScoreDiv.innerHTML = yourScore;
    checkIfWonOrLost();

}

for (let index = 0; index < crystals.length; index++) {
    const element = crystals[index];

    element.addEventListener("click", crystalClick);
}

function gameOver() {
    yourScore = 0;
    yourScoreDiv.innerHTML = yourScore;
    setCrystalValues();
}

function checkIfWonOrLost() {
    if (yourScore === target) {
        messageDiv.innerHTML = messageWon;
        wins++;
        winsDiv.innerHTML = wins;
        gameOver();
    }
    else if (yourScore > target) {
        messageDiv.innerHTML = messageLost;
        losses++;
        lossesDiv.innerHTML = losses;
        gameOver();
    }
}