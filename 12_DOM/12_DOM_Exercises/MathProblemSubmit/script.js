
const problemElement =document.querySelector(".problem");
const ansForm=document.querySelector(".ans-form");
const userAnswer=document.querySelector(".ans-user");
ansForm.addEventListener("submit", problemChecking);

let userState= {
  correctAnswers: 0,
  wrongAnswers: 0,
};

function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProblem() {
  return {
    operand1: generateNumber(1, 10),
    operand2: generateNumber(1, 10),
    operator: ["+", "-", "x"][generateNumber(0, 2)],
  };
}

function updateProblem(){
    userState.currentProblem=generateProblem();
    problemElement.innerHTML = `${userState.currentProblem.operand1} ${userState.currentProblem.operator} ${userState.currentProblem.operand2}`;
}

function problemChecking(e) {
  e.preventDefault();
  let correctAnswer;
  let problem = userState.currentProblem;
  if (problem.operator == "+")
    correctAnswer = problem.operand1 + problem.operand2;
  if (problem.operator == "-")
    correctAnswer = problem.operand1 - problem.operand2;
  if (problem.operator == "x")
    correctAnswer = problem.operand1 * problem.operand2;
  if (correctAnswer === parseInt(userAnswer.value)) {
    userState.correctAnswers++;
    alert(`Good job\nYour correct answer is ${userState.correctAnswers}`);
   
  } else {
    userState.wrongAnswers++;
    alert(`Try it out!\nYour wrong answer is ${userState.wrongAnswers}`);
  }
  resetProblem();
}

function resetProblem() {
  console.log(`correct answers: ${userState.correctAnswers}`);
  console.log(`wrong answers: ${userState.wrongAnswers}`);
  updateProblem();
}

updateProblem();



