const readline = require('readline-sync');
var i=0;

console.log("Welcome to the calculator!");
console.log("==========================");

//Input
console.log("Enter an operation (choose from /, *, -, and +).");
var op = readline.prompt();
let numTries = 1;
while ( op!="/" && op!="*" && op!="-" && op!="+"){
	switch (numTries){
		case 1:
			console.log("That was not a valid operator. \nPlease enter a valid one.")
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

console.log("How many numbers do you want to " + op + "?");
const numCount = readline.prompt();
var nums = Array(numCount);
for (i=0; i<numCount; i++){
	console.log("Enter a number.");
	nums[i] = +readline.prompt();
}

//Operate and out
switch(op){
	case "/":
		out = nums[0];
		for (i=1; i < numCount; i++){
			out = out/nums[i];
		}
		break;
	
	case "*":
		out = 1;
		for (i=0; i < numCount; i++){
			out = out*num[i];
		}
		break;
	
	case "-":
		out = nums[0];
		for (i=1; i < numCount; i++){
			out -= nums[i];
		}
		break;
	
	default:
		out = 0;
		for (i=0; i < numCount; i++){
			out += nums[i];
		}
		break;
	
}
console.log(nums.join( " "+op+" ") + "=" + out);