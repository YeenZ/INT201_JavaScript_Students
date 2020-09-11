//Loop Statements
//while statement
let count = 0; 
let colors = ["Red", "Green", "Yellow"];
console.log(colors);
while (count <= colors.length - 1) {
  let item = colors[count++];
  console.log("color = " + item); 
}
//color=Red
//color=Green
//color=Yellow

//do-while statement
//iterator
let myMessage = "Hello";
console.log(typeof myMessage[Symbol.iterator]); //function
let iterator = myMessage[Symbol.iterator]();
let letter = iterator.next();
do {
  if (letter.done)
      break;
  console.log(letter);
} while (letter=iterator.next());
/*{ value: 'H', done: false }
{ value: 'e', done: false }
{ value: 'l', done: false }
{ value: 'l', done: false }
{ value: 'o', done: false }*/

//for statement
//let num = parseInt(prompt("Enter your number: "));
let num=2;
for (let i = 1; i <= 12; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
/*
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
2 * 10 = 20
2 * 11 = 22
2 * 12 = 24*/
 
//The for-of statement iterates over values that the iterable object defines to be iterated over.
//for-of invoke the Symbol.iterator to return an object which implements the Iterator API.
/*for (variable of iterable) {
  statement
}*/

//array
let arr = ["a", "b", "c"];

for (let element of arr) {
  console.log(element);
}
/*
a
b
c
*/
//string
//We can iterate over a string in exactly the same way as for..of
const str = "hello";

for (let ch of str) {
  console.log(ch);
}
/*h
e
l
l
o*/

//for..in
// /The for-in statement iterates over keyed of objects but ignoring ones keyed by Symbols
//for-in should not be used to iterate over an Array where the index order is important.
//There is no guarantee that for...in will return the indexes in any particular order.
/*for (variable in object)
  statement*/

let students = {id:1, name:"Adam", age: 20};
let property;
for(property in students){
  console.log(property + ":" + students[property]);
}
/*id:1
name:Adam
age:20*/
