//myGlobal variable is declared in global scope
myGlobal = "need to be initial value";
console.log(
  "Global variables " +
    myGlobal +
    " and can refer even out of block and if scopes"
);

//without initialization, variable hold the special value "undefined"
//myVar and myNumber variables are declared in function scope
function doSomething() {
  myGlobal2 = 1; //global variable need to initial value
  var myVar; //var and let variable are no need to initial value
  var myNumber = 1;
    
  console.log(
    "myVar is " +
      myVar +
      " because myVar is not initial value in function scope"
  );
  console.log(
    "myNumber has an initial value equals to " +
      myNumber +
      " and can refer in function scope"
  );
}

//both myVar and myNumber cannot be referred out of function.
//console.log(myVar); //error
//console.log(myNumber); //error
doSomething();

//message variable is declared in if block scope
if (myGlobal2 == 1) {
  let message = "Hello!";
  var varMessage = "Hi!";
  const myConst = 10;
  console.log("let variables can refer only when are in block scope");

  //backtick example `text and special chars can be type in backtick` using ${variableName} when refer value of an vaiable
  console.log(`message variable is in block scope and has value "${message}"`);
}
//message (let) and myConst (const) cannot be referred out of block.
//console.log(message + " cannot refer out of if block scope"); //error
//console.log(myConst + " cannot refer out of if block scope");//error

console.log(
  varMessage + " varMessage (var scope) can refer out of if block scope"
);
//const variable cannot be change its value after initialization.
const myConst2 = 10; //need to initializer in const declaration
//myConst2 = 20; //error

//define multiple variable with single statement
let isLock = false,
  value = 5,
  bookTitle = "JS beginner";
console.log("isLock = " + isLock);
console.log("value = " + value);
console.log("bookTitle = " + bookTitle);
