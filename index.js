"use strict";
function eightBall(positiveAnswers, neutralAnswers, negativeAnswers) {
    let question = document.getElementById('question').value;
    // Combine the arrays 
    const combinedArray = positiveAnswers.concat(neutralAnswers, negativeAnswers);
    // Get a random index from the combined arrays
    const randomIndex = Math.floor(Math.random() * combinedArray.length);
    return combinedArray[randomIndex];
}
const positiveAnswers = ["It is certain.", "It is decidedly so.", "Yes", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Signs point to yes."];
const neutralAnswers = ["Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again."];
const negativeAnswers = ["Don't count on it.", "My reply is no.", "My sources say no.", "Very doubtful."];
// Attach submit event listener to form
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("eightBallForm");
    const answer = document.getElementById("eightBallAnswer");
    form.addEventListener("submit", (event) => {
        // Prevent page reload
        event.preventDefault();
        const eightBallAnswer = eightBall(positiveAnswers, neutralAnswers, negativeAnswers);
        console.log(eightBallAnswer);
        answer.textContent = eightBallAnswer;
    });
});
