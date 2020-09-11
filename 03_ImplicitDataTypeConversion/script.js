let unde = undefined;
let zeroNum = 0;
let notZeroNum = 100;
let emptyStr = "";
let nonEmptyStr = "NonEmptyString";
let nu = null;
let booTrue = true;
let booFalse = false;
let student = { id: 1, name: "Adam" };

function toString(value) {
  return String(value);
}

function toBoolean(value) {
  return Boolean(value);
}

function toNumber(value) {
  return Number(value);
}
//Implicit Data Type Conversion
//Boolean Conversion
console.log(toBoolean(unde)); //false
console.log(toBoolean(zeroNum)); //false
console.log(toBoolean(notZeroNum)); //true
console.log(toBoolean(emptyStr)); //false
console.log(toBoolean(nonEmptyStr)); //true
console.log(toBoolean(nu)); //false
console.log(toBoolean(student)); //true

//String Conversion
console.log(toString(unde)); //"undefined"
console.log(toString(zeroNum)); //"0"
console.log(toString(notZeroNum)); //"100"
console.log(toString(nu)); //"null"
console.log(toString(booTrue)); //"true"
console.log(toString(booFalse)); //"false"
console.log(toString(student)); //[object Object]*/

//Number Conversion
console.log(toNumber(unde)); //"NaN"
console.log(toNumber(emptyStr)); //0
console.log(toNumber(nonEmptyStr)); //NaN
console.log(toNumber(nu)); //0
console.log(toNumber(booTrue)); //1
console.log(toNumber(booFalse)); //0
console.log(toNumber(student)); //"NaN"

//The data type casting function on any type of data can be automatically called by flow control statements
if (1) {
  //if(Boolean(1)) //true
  console.log("1 is converted to true automatically by calling Boolean(1)");
}
//when JavaScript operate on a wrong data type, it will try to convert the value to a right type.

let value = "10" - 5; //let value=Number("10") - 5;
console.log(value); //5
