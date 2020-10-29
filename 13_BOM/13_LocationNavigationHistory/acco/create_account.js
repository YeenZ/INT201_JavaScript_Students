console.log(`history.length: ${history.length}`);
console.log(`username:${history.state.username}`);


function backTo() {
  history.back();
}

function nextTo() {
  history.forward();
}