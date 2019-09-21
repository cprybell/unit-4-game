var greenGemValue = 1;
var redGemValue = 1;
var purpleGemValue = 1;
var blueGemValue = 1;
var userScore = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;

var randomGemValue = function() {
    var gemValue = Math.floor(Math.random() * 12 + 1);
    return gemValue;
}

var randomTargetValue = function() {
    var randTargValue = Math.floor(Math.random() * 101 + 19);
    return randTargValue;
}

var resetGame = function() {
    greenGemValue = randomGemValue();
    redGemValue = randomGemValue();
    purpleGemValue = randomGemValue();
    blueGemValue = randomGemValue();
    targetScore = randomTargetValue();
    $("#targetScore").text(targetScore);
    $("#userScore").text(userScore);
    console.log("green: " + greenGemValue);
    console.log("red: " + redGemValue);
    console.log("blue: " + blueGemValue);
    console.log("purple: " + purpleGemValue);
}

resetGame();