/*user test state
 * problems - a list of problems
 * correctAnswers -  the number of user's correct answers
 * currentQuestion - a display question
 * userAnswers - a list of user answers
 */

let userState = {
  problems: [],
  correctAnswers: 0,
  currentQuestion: 0,
  userAnswers: [],
};

//random a number in the range min to mix
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generate a simple math problem and set correct answer
function generateProblemAnswer() {
  let tmp = {
    operand1: randomNumber(1, 10),
    operand2: randomNumber(1, 10),
    operator: ["+", "-", "*"][randomNumber(0, 2)],
  };
  
  //set problem to prob object
  let prob = {question: tmp.operand1 + tmp.operator + tmp.operand2 };

  //set answer to prob object
  switch (tmp.operator) {
    case "+":
      prob.answer = tmp.operand1 + tmp.operand2;
      break;
    case "-":
      prob.answer = tmp.operand1 - tmp.operand2;
      break;
    case "*":
      prob.answer = tmp.operand1 * tmp.operand2;
      break;
  }
  
  // console.log(`prob: ${prob}`);
  return prob;
}

//add problem to problems array
function generateProblems(question) {
  for (let i = 0; i < question; i++) {
    userState.problems[i] = generateProblemAnswer();
  }
}

//display the problem at the specified index 
function showQuestion(questIndex) {
  const problemLabel = document.getElementById("quest");
  problemLabel.innerHTML = `${userState.problems[questIndex].question} = `;
}

//check whether a user answer fill in and add the user answer to userAnswers array
function hasUserAnswer() {
  const ansText = document.getElementById("ans").value;
  userState.userAnswers[userState.currentQuestion] = ansText.trim();
  if (ansText.trim() == "") return false;
  else return true;
}

//add point to a user correct answer
function grading() {
  if (
    userState.userAnswers[userState.currentQuestion] ==
    userState.problems[userState.currentQuestion].answer
  )
    userState.correctAnswers++;
}



//check a uses answer and display a next question
//show a user score when a user completes all problems
function next() {
  if (hasUserAnswer()) {
    grading();
    document.getElementById("ans").value = "";
    userState.currentQuestion++;
    if (userState.currentQuestion <= userState.problems.length - 1) {
      showQuestion(userState.currentQuestion);
    } else {
      alert(`Your Scores: ${userState.correctAnswers}`);
      history.replaceState({user: "Umaporn",score: userState.correctAnswers},'', "content2.html");
      document.write(
        `${history.state.user}'s test was done and you got ${history.state.score} points`
      );
    }
  }
}

let numOfQuestions = prompt("Enter the number of Math questions generated");
generateProblems(numOfQuestions);
showQuestion(userState.currentQuestion);
