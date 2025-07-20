// Write a function that displays current date & time in your browser.
function currentDateAndTime(){
    var date=new Date()
    return date
}
console.log(currentDateAndTime())

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

var firstName=prompt("Enter your first name: ")
var lastName=prompt("Enter your last name: ")
function fullName(fName,lName){
    var fullName=fName.concat(" ",lName)
    var greets="Welcome!".concat(" ",fullName)
    return greets
}
greet_func=fullName(firstName,lastName)
console.log(greet_func)

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

var firstDigit=parseInt(prompt("Enter your first digit: "))
var lastDigit=parseInt(prompt("Enter your second digit: "))
function addition(fDigit,ldgit){
    var add=fDigit+ldgit
    return add
}
add_func=addition(firstDigit,lastDigit)
console.log(add_func)

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

var num1=parseInt(prompt("Enter your first digit: "))
var num2=parseInt(prompt("Enter your second digit: "))
var num3=parseInt(prompt("Enter your third digit: "))
var operations=prompt("Enter your desired operator name (add,subtract,divide,multiply):").toLowerCase()

function operation(num1,num2,num3,operations){
    
    if (operations==="add"){
        var add=num1+num2+num3
        return add
    }else if (operations==="subtract"){
        var subtract=num1-num2-num3
        return subtract
    }else if (operations==="divide"){
        var divide=num1/num2/num3
        return divide
    }else if (operations==="multiply"){
        var multiply=num1*num2*num3
        return multiply
    }else{
        return alert("You type wrong operator")
    }

}
operation_func=operation(num1,num2,num3,operations)
console.log(operation_func)

// 5. Write a function that squares its argument.

var digit=parseInt(prompt("Enter your digit: "))
function square(digit){
    var square=digit*digit
    return square
}
square_func=square(digit)
console.log(square_func)


// 6. Write a function that computes factorial of a number.

var digit=parseInt(prompt("Enter your digit: "))
function factorial(digit){
    var result=1
    var factorial
    for(var i=1; i<=digit; i++){
        result*=i
    }
    factorial=result
    return factorial
}
factorial_func=factorial(digit)
console.log(factorial_func)


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

var startDigit=parseInt(prompt("Enter your start digit: "))
var endDigit=parseInt(prompt("Enter your start digit: "))
function counting(sDigit,eDigit){
    var output="The Counter Function was successful:\n"
    for (var i=sDigit; i<=eDigit;i++){
        console.log(i)
    }
    return output
    
    
}
counting_func=counting(startDigit,endDigit)
console.log(counting_func)


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

var base=Number(prompt("Enter your triangle base number: "))
var perpendicular=Number(prompt("Enter your triangle perpendicular number: "))

function hypotenuse(base,perpendicular){

    function square(base,perpendicular){
        var hypotenuse=(base*base)+(perpendicular*perpendicular)
        return hypotenuse
    }

    var hypotenuseSquare=square(base,perpendicular)

    var hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse

    

}

var hypotenuse_func=hypotenuse(base,perpendicular)
console.log(hypotenuse_func.toFixed(2))


// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

var height=24

function area(width,height){
    var a=width*height

    return a 

}

var area_func=area(24,height)
console.log(area_func.toFixed(2))



// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

var string=prompt("Enter a word to check if it is palindrome or not: ")

function palindrome(word){
    var array=Array.from(word)
    var arrayReverse=[...array].reverse()
    if (array.join("")==arrayReverse.join("")){
        var answer="The given word is a Palindrome"
        return answer
    }else{
        var answer="The given word is not a Palindrome"
        return answer
    }
}

var palindrome_func=palindrome(string)
console.log(palindrome_func)


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

var string=prompt("Enter a sring to make the first letter of each upper case:")

function upperCaseEach(string){
    var words=string.split(" ")
    var newWord=[]
    for (var i=0; i<words.length;i++){
        capitalize=words[i][0].toUpperCase()+words[i].slice(1)
        newWord.push(capitalize)
    }
    var capitalizeString=newWord.join(" ")
    return capitalizeString
}

var upperCaseEachFunc=upperCaseEach(string)
console.log(upperCaseEachFunc)

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

var string=prompt("Enter a sentence to find the longest word:")

function longestWord(string){
    var words=string.split(" ")
    var longest=""
    for (var i=0; i<words.length;i++){
        if (words[i].length>longest.length){
            longest=words[i]
        }
    }

    return longest
}

var longestWordFunc=longestWord(string)
console.log(longestWordFunc)

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of

// occurrences of the specified letter within the string.


var string=prompt("Enter a sentence:").toLowerCase()
var letter=prompt("Enter a letter to find it occurance:").toLowerCase()

function letterOccurance(string,letter){
    var count=0
    var letters=string.split("")
    if(letter.length==1){
        for (var i=0; i<letters.length;i++){
            if (letters[i]===letter){
                count+=1
            }
        }
        return count
    } else {
        alert("Your input must be a single letter.");
        return null;
    }
    
}

var letterOccuranceFunc=letterOccurance(string,letter)
console.log(letterOccuranceFunc)

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

var circleRadius=Number(prompt("Give me the radius of the circle: "))
function calcCircumference(radius){
    var calc=2*Math.PI*radius
    var answer="The circumference is ".concat(calc.toFixed(3))
    return answer
}

function calcArea(radius){
    var calc=Math.PI*(radius*radius)
    var answer="The area is ".concat(calc.toFixed(3))
    return answer
}
console.log(calcCircumference(circleRadius))
console.log(calcArea(circleRadius))
