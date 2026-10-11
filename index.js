let score1;
let score2;
let score3;

const username = prompt("Please enter your name.");
alert(`Hello ${username}, you are about to take a quiz on cats.`);

const question1 =
  prompt(`Question 1: What cat is known for it's unique coloring of white, black and orange?
[1] Tuxedo
[2] Calico
[3] Tabby`);

const answer1 = Number(question1);

if (Number.isNaN(answer1)) {
  alert("Please input your answer as a number [1, 2, or 3].");
} else if (answer1 === 1 || answer1 === 3) {
  alert("Your answer is incorrect.");
  score1 = 0;
} else if (answer1 === 2) {
  alert("Correct!");
  score1 = 1;
}
const question2 = prompt(`Question 2: How many permanent teeth does a cat have?
[1] 30
[2] 42
[3] 32`);

const answer2 = Number(question2);

if (Number.isNaN(answer2)) {
  alert("Please input your answer as a number [1, 2, or 3].");
} else if (answer2 === 2 || answer2 === 3) {
  alert("Your answer is incorrect.");
  score2 = 0;
} else if (answer2 === 1) {
  alert("Correct!");
  score2 = 1;
}

const question3 =
  prompt(`Question 3: Each cat has a unique pattern of ridges on its nose like a finger print.
[1] True
[2] False`);

const answer3 = Number(question3);

if (Number.isNaN(answer3)) {
  alert("Please input your answer as a number [1, 2, or 3].");
} else if (answer3 === 2) {
  alert("Your answer is incorrect.");
  score3 = 0;
} else if (answer3 === 1) {
  alert("Correct!");
  score3 = 1;
}

const finalScore = score1 + score2 + score3;

if (finalScore === 3) {
  alert("Congratulations! Perfect Score!");
} else if (finalScore === 1 || finalScore === 2) {
  alert("You have gotten a few questions correct.");
} else if (finalScore === 0) {
  alert("Sorry you have failed this quiz.");
}
