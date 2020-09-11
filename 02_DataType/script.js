console.log("Number.MIN_VALUE = " + Number.MIN_VALUE); //5e-324
console.log("Number.MAX_VALUE = " + Number.MAX_VALUE); //1.7976931348623157e+308

//by default any uninitialized variable gets the value of undefined
let value;
console.log(typeof value);

//JavaScript has a Dynamic typing
//typeof is an operator for checking the data type
value = 1;
console.log(typeof value); //number

value = "This is String Type"; //'' or "" for String literal
console.log(typeof value); //string
console.log(value.toUpperCase()); //THIS IS STRING TYPE
console.log(value.substr(1, 3)); //his
console.log(value[1]); //"h"
console.log(value.length); //19

value = 1n;
console.log(typeof value); //bigint

value = true;
console.log(typeof value); //boolean
value = undefined;

console.log(typeof value); //undefined

value = null;
console.log(typeof value); //object

//Object data type
let student = { name: "Adam" };
console.log(student); //{name: 'Adam'}
console.log(typeof student); //object

//symbols can be used as keys in objects
let thingSymbol = Symbol("thing");
console.log(typeof thingSymbol); //symbol
let otherThingSymbol =Symbol("thing");
console.log(typeof otherThingSymbol); //symbol
console.log(thingSymbol==otherThingSymbol);//false

//Function data type
value = function myFunc() {
  return { name: "๊Umaporn" };
};
console.log(typeof value); //function

//Each primitive type has a counterpart type for its wrapper objects. These types are String, Number and Boolean
let numObj= new Number(1);
console.log(numObj); //[Number: 1]
console.log(typeof numObj);//object
let strObj= new String("1");
console.log(strObj); //[String: '1']
console.log(typeof strObj);//object
let booObj=new Boolean(1);
console.log(booObj);//[Boolean: true]
console.log(typeof booObj);//object

