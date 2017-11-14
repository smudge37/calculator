const readline = require('readline-sync');

console.log("Welcome to the calculator!");
console.log("==========================");

//Input
console.log("Enter an operation (choose from /, *, -, and +).");
var op = readline.prompt();
let numTries = 1;
while ( op!="/" && op!="*" && op!="-" && op!="+"){
	switch (numTries){
		case 1:
			console.log("That was not a valid operator. /n Please enter a valid one.")
			break;
		case 2:
			console.log("Nope, that one neither. This next one better be valid or you'll be outta here.")
			break;
		case 3:
			return console.log("Too bad. See ya.")
	}
	op = readline.prompt();
	numTries++;
}
console.log("Enter a number.");
const no1 = Number(readline.prompt());
console.log("Enter another number.");
const no2 = Number(readline.prompt());

//Operate and out
switch(op){
	case "/":
		out = no1/no2;
		break;
	
	case "*":
		out = no1*no2;
		break;
	
	case "-":
		out = no1-no2;
		break;
	
	default:
		out = no1+no2;
		break;
	
}
console.log(no1 + op + no2 + "=" + out);