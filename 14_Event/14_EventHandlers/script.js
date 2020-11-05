//1. HTML Event Handlers
function submitHandler() {
  console.log(`Submit Clicked! ${submit.value}`);
  
}



//2. DOM Level 0 Approach Event Handlers
let cancelBtn = document.getElementById("cancel");
cancelBtn.onclick = function(event) {
  console.log(`Cancel Clicked! ${cancelBtn.value}`);
  console.log(`Event Type: ${event.type}`);
  console.log(`Event Target: ${event.target}`);
  console.log(`Event Current Target: ${event.currentTarget}`);
  console.log(`Event Bubbles: ${event.bubbles}`);
};

//cancelBtn.onclick=null;

//3. DOM Level 2 Approach Event Handlers
let resetBtn=document.getElementById("reset");
let resetHandler=function(event){
    console.log(`Reset Clicked! ${resetBtn.value}`);
    console.log(`Event Type: ${event.type}`);
}
resetBtn.addEventListener("click", resetHandler, false);
//resetBtn.removeEventListener("click", resetHandler, false);

let link = document.getElementById("sitlink");
link.onclick = function (event) {
  event.preventDefault();
};