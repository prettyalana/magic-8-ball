function eightBall(
// Parameters (Placeholders) for the three defined arrays
positiveAnswers, neutralAnswers, negativeAnswers) {
    var question = document.getElementById("question").value;
    // Combine the arrays
    var combinedArray = positiveAnswers.concat(neutralAnswers, negativeAnswers);
    // Get a random index from the combined arrays
    var randomIndex = Math.floor(Math.random() * combinedArray.length);
    return combinedArray[randomIndex];
}
// Arrays defined outside of the eightBall function scope
// Accessible globally
var positiveAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Yes",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Signs point to yes.",
];
var neutralAnswers = [
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
];
var negativeAnswers = [
    "No",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Very doubtful.",
];
// Attach submit event listener to form
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("eightBallForm");
    var answer = document.getElementById("eightBallAnswer");
    form.addEventListener("submit", function (event) {
        var _this = this;
        // Prevent page reload
        event.preventDefault();
        var eightBallAnswer = eightBall(positiveAnswers, neutralAnswers, negativeAnswers);
        answer.textContent = eightBallAnswer;
        // Makes the text inside the form input disappear after 5 seconds
        setTimeout(function () {
            _this.reset();
        }, 5000);
    });
});
