let result1 = 15 == '15';
console.log("15 == '15': "+result1); //true
let result2 = true == 1;
console.log("true == 1 : "+result2) //true
let student = { id: 1, name: "Joe" };
let result3 = student.id == 1;
console.log("student.id == 1 : "+ result3) //true

let num=new Number(5);
console.log("num : "+num.valueOf());
console.log("num==5 : " + (num == 5));
console.log("num=='5': " + (num=='5'));

//=== and!=== strict equality without type conversion
let result4 = 15 === "15";
console.log("15 === '15' : "+result4); //false
let result5 = true === 1;
console.log("true === 1 : "+result5) //false
let result6 = student.id === 1;
console.log("student.id === 1 : "+result6) //true

let result7 = 15 !== "15";
console.log("15 !== '15' : "+result7); //true
let result8 = 15 != "15";
console.log("15 != '15' : "+result8); //false
let result9 = "Book" < "ant";
console.log("'Book' < 'ant' : "+result9); //true
let result10 = true>false 
console.log("true>false : "+result10); //true

//logical operators
// && (and), || (or), ! (not)
let result11 = 5 < "10" && "1" > 5;
console.log("5 < '10' && '1' > 5 : "+result11); //false
let result12 = 5 < "10" || "1" > 5;
console.log("5 < '10' || '1' > 5 : "+result12); //true
let result13 = !(0);
console.log("!(0) : "+result13);//true
