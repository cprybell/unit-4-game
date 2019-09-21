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
    userScore = 0;
    $("#targetScore").text(targetScore);
    $("#userScore").text(userScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
    console.log("green: " + greenGemValue);
    console.log("red: " + redGemValue);
    console.log("blue: " + blueGemValue);
    console.log("purple: " + purpleGemValue);
}

var checkResult = function() {
    if (targetScore === userScore) {
        wins++;
        alert("You Win!!");
        resetGame();
    }
    else if(userScore > targetScore) {
        losses++;
        alert("You Lost!");
        resetGame();
    }
}

$("#blueGem").on("click", function() {
    userScore += blueGemValue;
    $("#userScore").text(userScore);
    checkResult();
});

$("#redGem").on("click", function() {
    userScore += redGemValue;
    $("#userScore").text(userScore);
    checkResult();
});

$("#greenGem").on("click", function() {
    userScore += greenGemValue;
    $("#userScore").text(userScore);
    checkResult();
});

$("#purpleGem").on("click", function() {
    userScore += purpleGemValue;
    $("#userScore").text(userScore);
    checkResult();
});

resetGame();