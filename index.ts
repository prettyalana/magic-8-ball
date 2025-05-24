function eightBall(
  // Parameters (Placeholders) for the three defined arrays
  positiveAnswers: string[],
  neutralAnswers: string[],
  negativeAnswers: string[]
) {
  let question: string = (
    document.getElementById("question") as HTMLInputElement
  ).value;

  // Combine the arrays
  const combinedArray: string[] = positiveAnswers.concat(
    neutralAnswers,
    negativeAnswers
  );

  // Get a random index from the combined arrays
  const randomIndex: number = Math.floor(Math.random() * combinedArray.length);

  return combinedArray[randomIndex];
}

// Arrays defined outside of the eightBall function scope
// Accessible globally
const positiveAnswers: string[] = [
  "It is certain.",
  "It is decidedly so.",
  "Yes",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Signs point to yes.",
];

const neutralAnswers: string[] = [
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
];

const negativeAnswers: string[] = [
  "No",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Very doubtful.",
];

// Attach submit event listener to form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("eightBallForm") as HTMLFormElement;
  const answer = document.getElementById(
    "eightBallAnswer"
  ) as HTMLParagraphElement;

  form.addEventListener("submit", function (this: HTMLFormElement, event) {
    // Prevent page reload
    event.preventDefault();

    const eightBallAnswer = eightBall(
      positiveAnswers,
      neutralAnswers,
      negativeAnswers
    );
    answer.textContent = eightBallAnswer;

    // Makes the text inside the form input disappear after 5 seconds
    setTimeout(() => {
      this.reset();
    }, 5000);
  });
});
