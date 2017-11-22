const readline = require('readline-sync');
var badUser = false;

function getInputNumber(message){
	console.log(message);
	return +readline.prompt();
}
function getNums(){
	const numCount = getInputNumber("How many numbers do you want to " + op + "?");
	var nums = Array(numCount);
	for (i=0; i<numCount; i++){
		nums[i] = getInputNumber("Enter a number.");
	}
	return nums
}
function getOp(){
	console.log("Enter an operation (choose from /, *, -, and +).");
	var op = readline.prompt();
	let numTries = 1;
	//Short tempered with operations
	while ( op!="/" && op!="*" && op!="-" && op!="+"){
		switch (numTries){
			case 1:
				console.log("That was not a valid operator. \nPlease enter a valid one.")
				break;
			case 2:
				console.log("Nope, that one neither. This next one better be valid or you'll be outta here.")
				break;
			case 3:
				badUser = true;
				return
		}
		op = readline.prompt();
		numTries++;
	}
	return op
}
function operate(op,nums){
	numCount = nums.length
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
	return out
}

function presentWelcomeMessage(){
	console.log("Welcome to the calculator!");
	console.log("==========================");
}
function performOneCalculatrion(){
	var i=0;
	
	//Input
	op = getOp()
	if (badUser)
		return console.log("Too bad. See ya.");
	//Get numbers
	nums = getNums()

	//Operate and out
	out = operate(op,nums);
	console.log(nums.join( " "+op+" ") + " = " + out);
}

presentWelcomeMessage()
performOneCalculatrion()