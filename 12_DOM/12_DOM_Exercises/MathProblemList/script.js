const problemFormElement = document.querySelector(".problem");

let userState = {
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

function showProblem(question) {
  for (let i = 0; i < question; i++) {
    userState.currentProblem = generateProblem();

    let problemLabel = document.createElement("label");
    problemLabel.innerHTML = `${userState.currentProblem.operand1} ${userState.currentProblem.operator} ${userState.currentProblem.operand2}`;
    problemFormElement.appendChild(problemLabel);

    
    problemFormElement.appendChild(
      document.createTextNode("\u00A0\u00A0\u00A0\u00A0")
    );

    let problemAnswerInput = document.createElement("input");
    problemAnswerInput.className = "repeat-box";
    problemAnswerInput.type = "text";
    problemFormElement.appendChild(problemAnswerInput);

    let br = document.createElement("br");
    problemFormElement.appendChild(br);
  }
}

function repeatProblem() {
  const repeatBox = document.querySelectorAll(".repeat-box");
  const questions = document.getElementsByTagName("label");

  for (let i = 0; i < repeatBox.length; i++) {
    console.log(questions[i].innerText);
    repeatBox[i].value = `${questions[i].innerText}`;
  }
}

let numOfQuestions = prompt("Enter the number of Math questions generated");
showProblem(numOfQuestions);
repeatProblem();
