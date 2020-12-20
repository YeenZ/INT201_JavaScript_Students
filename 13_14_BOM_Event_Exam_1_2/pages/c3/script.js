function recordHistoryState(user, userScores) {
  history.replaceState(
    { username: user, score: userScores },
    "",
    "content3.html"
  );
  
}
function showHistoryState(){
alert(
  `${history.state.username}'s test was done and you got ${history.state.score} points`
);
}
let user=prompt("Enter your name: ");
let userScores = prompt("Enter your scores: ");

recordHistoryState(user, userScores);
showHistoryState();