//ASSIGMENT


// 1
var Age=parseInt(prompt("Enter Your Birth age "));
var curr_age=2025-Age;
alert("Your age is "+curr_age);

// 2
var numbers = [];
for (var i = 0; i < 5; i++) {
  numbers.push(parseInt(prompt("Enter number " + (i + 1))));
}
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Average: " + (sum / numbers.length));

// 3
var arr = [3, 6, 8, 9, 12, 15, 17, 21, 24, 30];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    console.log(arr[i]);
  }
}

// 4
 var question=prompt(" Enter number here ");
 var factorial=[];
  for(var i = question; i>0; i--) {
        var answer=question*i;
        factorial.push(answer);
 }
    alert("Your numbers factorial is"+factorial.join());


// 5
var str = prompt("Enter a string:");
var rev = "";
for (var i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
console.log(rev);

// 6
var text = prompt("Enter a string:");
var letter = prompt("Enter a letter:");
var count = 0;
for (var i = 0; i < text.length; i++) {
  if (text[i] === letter) {
    count++;
  }
}
console.log("Count: " + count);

// 7
var names = [];
for (var i = 0; i < 5; i++) {
  names.push(prompt("Enter name " + (i + 1)));
}
names.sort();
console.log(names);

// 8
var num = parseInt(prompt("Enter a number:"));
for (var i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}

// 9 
var sentence = prompt("Enter a sentence:");
sentence=sentence.toLowerCase()
var vowels = "aeiou";
var vcount = 0;
for (var i = 0; i < sentence.length; i++) {
  if (vowels.indexOf(sentence[i]) !== -1){
    vcount++;
  }
}
console.log("Vowel count: " + vcount);

// 10
var products = ["Pen", "Pencil", "Book", "Eraser", "Bag"];
var prices = [10, 5, 100, 3, 300];
for (var i = 0; i < products.length; i++) {
    console.log(products[i] + ": $" + prices[i]);
}

// 11
var c = parseInt(prompt("Enter temperature in Celsius:"));
var f = (c * 9 / 5) + 32;
alert("Fahrenheit: " + f);


// 12
var word = prompt("Enter a word:");
var reversed = [];
for (var i = word.length - 1; i >= 0; i--) {
    reversed.push(word[i]);
}
reversed.join("");
if (word === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}

// 13
var num = parseInt(prompt("Enter a number:"));
var isPrime = true;
if (num > 2) {
        for (var i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
} else {
  isPrime = true;
}
}
}
if (isPrime) {alert("the number is prime");}
else {alert("is not prime");}


// 14
var arr = [10,33,55,42,67,82,100,92,88,24];
var max= Math.max(...arr);


console.log(max);



// 15
var num1 = parseInt(prompt("Enter first number:"));
var num2 = parseInt(prompt("Enter second number:"));
var op = prompt("Enter operation (+, -, *, /):");
var result;
if (op === "+") {
    result = num1 + num2;
} else if (op === "-") {
  result = num1 - num2;
} else if (op === "*") {
  result = num1 * num2;
} else if (op === "/") {
    result = num1 / num2;
}
alert("Result: " + result);

// 16
var nums = [10, 55, 23, 78, 90, 33, 60, 44, 25, 88];
var greater = [];
for (var i = 0; i < nums.length; i++) {
  if (nums[i] > 50) {
    greater.push(nums[i]);
  }
}
console.log(greater);

//16 Assignment finish
