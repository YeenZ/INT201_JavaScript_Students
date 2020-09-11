//if (condition) statement1 else statement2
let score = 55;
let result6;
if(score>50){
  result6="Pass";
}
else{
  result6="Fail";
}
console.log(result6) //Pass


//if (condition1) statement1 else if (condition2) statement2 else statement3
let result7;
if(score>80){
  result7="Pass";
}
else if (score < 30){
  result7="Fail";
}
else{
  result7="Poor";
}
console.log(result7) //Poor

//Conditional Operator
//assigns a value to a variable based on some condition
//(condition)?value1:value2

let result5=(score>50)? "Pass":"Fail";
console.log(result5) //Pass

//When comparing a string with a number, JavaScript will convert the string to a number
//An empty string converts to 0.
//A non-numeric string converts to NaN which is always false
if (1 < "A") {
  //false
  console.log((1 < "A") + " is true"); //not display
}

//logical operators
// && (and), || (or), ! (not)
if (5 < "10" && "1" > 5) {  //false
  console.log(('5<"10" && "5">1') + " is true"); //not display
}

if (5 < "10" || "1" > 5) {  //true
  console.log(('5<"10" || "5">1') + " is true"); //display
}

//switch case
switch (new Date().getMonth()) {
  case 0:
    day = "January";
    break;
  case 1:
    day = "February";
    break;
  case 2:
    day = "March";
    break;
  case 3:
    day = "April";
    break;
  case 4:
    day = "May";
    break;
  case 5:
    day = "June";
    break;
  case 6:
    day = "July";
  case 7:
    day = "August";
    break;
  case 8:
    day = "September";
    break;
  case 9:
    day = "October";
  case 10:
    day = "November";
    break;
  case 11:
    day = "December";
    break; 
}
console.log(day);