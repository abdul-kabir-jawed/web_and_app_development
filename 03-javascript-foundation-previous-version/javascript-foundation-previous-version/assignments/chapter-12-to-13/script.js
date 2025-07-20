//Assignment 1
var char=prompt("Enter a character: ");
if (char.length === 1) {
    if (char >= 'a' && char <= 'z') {
        console.log("Lowercase letter");
    } else if (char >= 'A' && char <= 'Z') {
        console.log("Uppercase letter");
    } else {
        console.log("Not an alphabet");
    }
}
else {
    console.log("Please enter a single character.");
}

//Assignment 2
var int_1 = parseInt(prompt("Enter first integer: "));
var int_2 = parseInt(prompt("Enter second integer: "));
if (int_1 > int_2) {
    alert("First integer is greater than second integer.");
}
else if (int_1 < int_2) {
    alert("Second integer is greater than first integer.");
}else {
    alert("Both integers are equal.");
}


//Assignment 3
var num = parseInt(prompt("Enter a number: "));
if (num > 0) {
    console.log("Positive number");
}else if (num < 0) {
    console.log("Negative number");
}else {
    console.log("Zero");
}

//Assignment 4
vowel=false;
var char=prompt("Enter a character: ");
if (char.length === 1) {
    if (char >= 'a' && char <= 'z') {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowel=true;
        }
    } else if (char >= 'A' && char <= 'Z') {
        if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            vowel=true;
        }
    }
}
if (vowel) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

//Assignment 5
var correct_password = "password123";
var user_password = prompt("Enter your password: ");
if (user_password === "") {
    console.log("Please enter your password.");
}else if (user_password === correct_password) {
    console.log("Password is correct.");
}else {
    console.log("Incorrect password.");
}   

//Assignment 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}

//Assignment 7
var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM): "));
if (time >= 0 && time < 1200) {
    console.log("Good Morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening");
} else if (time >= 2100 && time < 2400) {
    console.log("Good Night");
} else {
    console.log("Invalid time format. Please enter a valid time in 24-hour format.");
}