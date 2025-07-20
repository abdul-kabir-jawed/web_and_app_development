// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var num=parseFloat(prompt("Enter a positive integer"))
console.log(num)
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var num=parseFloat(prompt("Enter a positive floating number"))
console.log(num)
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var num=parseFloat(prompt("Enter any number"))
console.log(Math.abs(num))


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.
var dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice value: " + dice);


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
var coin = Math.floor(Math.random() * 2) + 1;
if (coin=1){
    console.log("Head")
}else{
    console.log("Tail")
}


// 6. Write a program that shows a random number between 1
// and 100 in your browser.
var randomNumber=Math.ceil(Math.random()*100)
console.log(randomNumber)

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
var weight=prompt("Enter your weight")
console.log(weight)
console.log(parseInt(weight)+"kgs")
console.log(parseFloat(weight)+"kgs");
console.log(parseFloat(weight)+"kilograms");



// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
var lives = 3;
var computerNum = Math.ceil(Math.random() * 10);
console.log("Total lives = " + lives);

while (lives > 0) {
    var userNum = parseInt(prompt("Guess a number between 1 and 10:"));

    if (userNum > 10 || userNum < 1 || isNaN(userNum)) {
        console.log("Invalid input! You guessed more than 10 or less than 1. You lost a life.");
        lives--;
    } else if (userNum === computerNum) {
        console.log("🎉 Congratulations, you won!");
        break;
    } else {
        console.log("❌ Oops, wrong guess. You lost a life.");
        lives--;
        console.log("Remaining lives = " + lives);
    }

    if (lives === 0) {
        console.log("💀 You lost all your lives. The correct number was: " + computerNum);
    }
}