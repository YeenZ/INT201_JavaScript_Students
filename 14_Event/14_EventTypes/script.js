window.addEventListener("load", (event) => {
  console.log("Window Loaded!");

});



window.addEventListener("resize", (event) => {
  console.log("Resized");
});

first_name.onblur=function(){
  console.log(`on blur!`);
}
last_name.onfocus = function () {
  console.log(`on focus!`);
};

let firstName = document.getElementById("first_name");
firstName.addEventListener("keyup", (event) => {
  console.log(event.keyCode);
}); 


let display = document.getElementById("display_name");
firstName.addEventListener("input", function () {
  display.value = firstName.value;
}); 
