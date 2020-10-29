//#global scope and window object
//1. sayHello function and msg are global scope and which automatically places them on the window object. 
sayHello1=()=>alert(msg1);
msg1 ="Hello";
console.log(`global variable (msg1): ${window.msg1}`); // "Hello" 
sayHello1(); // "Hello"
window.sayHello1(); // "Hello"

//2. declared globally with var become properties and methods of the window object. 
var sayHello2=()=>alert(msg2);
var msg2 ="Hi";
console.log(`global variable (msg2): ${window.msg2}`); // "Hi" 
sayHello2(); // "Hi"
window.sayHello2(); // "Hi"

//3. let or const vaiables and functions are not attached to window object.
let msg3 = "Hi and Hello";
const sayHello3=()=>alert(msg3);
//console.log(`let variable (msg3): ${window.msg3}`); // "undefined" 
//window.sayHello3(); // "Uncaught TypeError: window.sayHello is not a function"





