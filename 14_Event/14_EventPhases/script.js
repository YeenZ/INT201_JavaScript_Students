for (let e of document.querySelectorAll("*")) {
  
    e.addEventListener(
      "click",
      (event) =>
        alert(`
          1. Capturing: ${e.tagName}, 
          2. current target: ${event.currentTarget}, 
          3. target: ${event.target}, 
          4. event phase: ${event.eventPhase},
          bubbles: ${event.bubbles}`
        ), 
      true
    ); //Capture
    e.addEventListener(
      "click",
      (event) =>
        alert(`
          1. Capturing: ${e.tagName},
          2. current target: ${event.currentTarget}, 
          3. target: ${event.target}, 
          4. event phase: ${event.eventPhase},
          bubbles: ${event.bubbles}`
        ),
      false
    ); //Bubble
   
}

let p =document.getElementById("p1");
p.addEventListener("mouseover", (event)=>{event.target.style.backgroundColor="red"});
p.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "green";
});


