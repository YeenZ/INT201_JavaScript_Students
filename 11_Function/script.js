function circle(radius){
    return Math.PI*Math.pow(radius,2);
}
console.log(circle(2));

function random(min, max){
    return Math.floor(Math.random() * (max-min+1)) +min
}

console.log(random(1, 6));

function hello(){
    let name=prompt("Enter your name ");
    console.log(name);
}
hello();

