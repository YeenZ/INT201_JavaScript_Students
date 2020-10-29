function backTo() {
   history.back();
}

function nextTo() {
  history.forward();
}

function push(){
  const state = { username:"Umaporn"};
  const title = "";
  const url = "../acco/create_account.html";
  //history.pushState(state, title, url);
  history.replaceState(state, title, url);
  

  window.open(location.href, "_self");
}

console.log(`location: ${document.location}`);
console.log(`history.length: ${history.length}`);


