//assignment 1
var city=prompt("Enter a city name:");
if (city==="Karachi") {
    alert("welcome to the city of lights");
}else {
    alert("Welcome to " + city);
}

//assignment 2
var gender=prompt("Enter your gender");
if (gender==="Male") {
    alert("Good Morning Sir.");
}else if (gender==="Female") {
    alert("Good Morning Ma’am.");
}
else {
    alert("Invalid input. Please enter");
}

//assignment 3
var signal_color=prompt("Enter color of road traffic signal (Red, Yellow, Green):");
if (signal_color==="Red") {
    alert("Must Stop.");
}else if (signal_color==="Yellow") {
    alert("Ready to move.");
}else if (signal_color==="Green") {
    alert("Move now.");
}
else {
    alert("Invalid input. Please enter");
}

//assignment 4
var remaining_fuel=parseInt(prompt("Enter remaining fuel in car (in litres):"));
if (remaining_fuel<0.25) {
    alert("Please refill the fuel in your car");
}else {
    alert("You have enough fuel in your car");
}

//assignment 5
//1.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

//2.
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//3.
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//4.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//5.
if (true){
alert("True");
}
if (false){
alert("False");
}

//6.
if("car" < "cat"){
alert("car is smaller than cat");
}


//assignment 6
var marks1 = parseInt(prompt("Enter marks of subject 1:"));
var marks2 = parseInt(prompt("Enter marks of subject 2:"));
var marks3 = parseInt(prompt("Enter marks of subject 3:"));
var totalMarks = 300;
var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / totalMarks) * 100;
if (percentage >= 80) {
    alert("Grade: A-one\nRemarks: Excellent");
}else if (percentage >= 70) {
    alert("Grade: A\nRemarks: Good");
} else if (percentage >= 60) {
    alert("Grade: B\nRemarks: You need to improve");
} else if (percentage < 60) {
    alert("Grade: Fail\nRemarks: Sorry");
} else {
    alert("Invalid input. Please enter valid marks.");
}


//assignment 7
var secretNumber = 7;
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
}else if (userGuess === secretNumber + 1) {
    alert("Close enough to the correct answer.");
}
else {
    alert("Sorry, wrong guess. The secret number was " + secretNumber + ".");
}
//assignment 8
var number = parseInt(prompt("Enter a number to check if it is divisible by 3:"));
if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
}
else {
    alert(number + " is not divisible by 3.");
}

//assignment 9
var number_check = parseInt(prompt("Enter a number to check if it is even or odd:"));
if (number_check % 2 === 0) {
    alert(number_check + " is an even number.");
}
else {
    alert(number_check + " is an odd number.");
}

//assignment 10
var temperature = parseInt(prompt("Enter the temperature in Celsius:"));
if (temperature > 40) {
    alert("It is too hot outside.");
}else if (temperature > 30) {
    alert("The weather today is normal.");
}else if (temperature > 20) {
    alert("Today's weather is cool.");
}else if (temperature > 10) {
    alert("OMG! Today's weather is so cool.");
}else {
    alert("It's freezing outside.");
}

//assignment 11
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operator = prompt("Enter an operator (+, -, *, /, %):");
if (operator === "+") {
    alert("Result: " + (firstNumber + secondNumber));
}else if (operator === "-") {
    alert("Result: " + (firstNumber - secondNumber));  
}else if (operator === "*") {
    alert("Result: " + (firstNumber * secondNumber));
}else if (operator === "/") {
    alert("Result: " + (firstNumber / secondNumber));
}else if (operator === "%") {
    alert("Result: " + (firstNumber % secondNumber));
}else {
    alert("Invalid operator. Please enter +, -, *, /, or %.");
}