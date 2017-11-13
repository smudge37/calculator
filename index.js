const readline = require('readline-sync');

console.log("Welcome to the calculator!");

//Input
console.log("Enter a number");
const no1 = Number(readline.prompt());
console.log("Enter another number");
const no2 = Number(readline.prompt());

//Multiply and out
out = no1*no2;
console.log(no1 + "x" + no2 + "=" + out);