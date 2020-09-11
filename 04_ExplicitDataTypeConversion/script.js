//Explicit Data Type Conversion
//parseInt() function - convert String to Number
let value2 = parseInt("25.5");
console.log(value2); //25
let value3 = parseInt("A");
console.log(value3); //NaN

//parseFloat() function - convert String to Floating point number
let value4 = parseFloat("25.5");
console.log(value4); //25.5

//toString() method is available on vlues that are numbers, Booleans, objects, and strings.
let value5 = (100.5).toString();
console.log(typeof value5); // String
console.log(value5); //"100.5"

