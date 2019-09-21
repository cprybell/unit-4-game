// Initializing game variables
var greenGemValue = 1;
var redGemValue = 1;
var purpleGemValue = 1;
var blueGemValue = 1;
var userScore = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;

// Function returns a random value between 1 and 12, used to set gem values
var randomGemValue = function() {
    var gemValue = Math.floor(Math.random() * 12 + 1);
    return gemValue;
}

// Function returns a random value between 19 and 120 for the target score
var randomTargetValue = function() {
    var randTargValue = Math.floor(Math.random() * 101 + 19);
    return randTargValue;
}

// Function resets the game to the initial state so the user can begin playing again. Does not rest wins and losses count.
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
}

// Checks if the user has won or lost, resets game if either are true. Does nothing if the user has not won or lost yet.
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

// resets game when webpage is loaded
resetGame();

// Next 4 functions are the on click gem functions that handles what happens when a gem is clicked.
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