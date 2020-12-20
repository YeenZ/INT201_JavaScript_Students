window.addEventListener("load", (event) =>{
     let divEle = document.getElementById("showState");
   const h2IdElem = document.createElement("h2");
   // console.log(`h2: ${h2Elem}`);
   h2IdElem.innerText = "User Id: "+history.state.userId+ ", "+
   "Username: " + history.state.userName;   
   divEle.appendChild(h2IdElem);

 

  
});   
function backTo() {
   history.back();
}

function nextTo() {
  history.forward();
}

let handler = function(){ 
  //const url = "./content1.html";
  history.replaceState(
    { userId: "1234", userName: "umaporn" },
    "",
    window.location.pathname
  ); 
  window.open(location.href, "_self");
}

const btnState=document.getElementById("user-state");
btnState.addEventListener("click", handler,false);




