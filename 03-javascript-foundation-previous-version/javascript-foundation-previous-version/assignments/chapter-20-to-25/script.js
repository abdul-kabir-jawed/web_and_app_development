//Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
var firstName=prompt("what's your first name? ");
var lastName=prompt("what's your last name? ");
var fullName=firstName+" "+lastName;
console.log(fullName);

//2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
var favoriteMobile=prompt("What's you favourite mobile phone model? ");
var lengthFavouriteMobile=favoriteMobile.length;
console.log("My favourite phone is: " + favoriteMobile);
console.log("Length of string is: "+lengthFavouriteMobile);



// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
var country="Pakistan";
var charAtCountry=country.indexOf("n");
console.log("String: "+country);
console.log("Index of letter 'n' is "+ charAtCountry);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
var helloString="Hello World";
var stringIndex=helloString.lastIndexOf("l");
console.log("Last index of letter 'l' "+stringIndex);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
var country="Pakistan";
var characterAt=country.charAt(3);

// 6. Repeat Q1 using string concat() method.
var firstName=prompt("what's your first name? ");
var lastName=prompt("what's your last name? ");
var fullName=firstName.concat(" ",lastName);
console.log(fullName);



// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
var word1="Hyder";
var word2="Islam";
var finalWord=word1.concat("abad");
console.log("City: "+finalWord);
console.log(finalWord.replace("Hyder","Islam"));


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace = message.replace(/and/g,"&");
console.log(replace);



// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
var number=parseInt("472");
console.log(number);


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
var userInput=prompt("type any sentennce");
var upperCaseWord=userInput.toUpperCase();
console.log(upperCaseWord);


// 11. Write a program that takes user input. Convert and
// show the input in title case.
var userInput = prompt("Type any sentence:");
var words = userInput.toLowerCase().split(" ");

for (var i = 0; i < words.length-1; i++) {
    var letters = words[i].split(""); 
    var firstLetter = letters[0].toUpperCase(); 

    letters.splice(0, 1, firstLetter); 

    words[i] = letters.join("");
}

var fullSentence = words.join(" ");
console.log(fullSentence);




// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num=35.36;
var string=num.toString();
var finalOutut=string.split(".");
var fullNumber=finalOutut.join("");
console.log(fullNumber);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
var username = prompt("Enter your username?");
var specialSymbols = ["@", ".", ",", "!"];
var isInvalid = false;

for (var i = 0; i < specialSymbols.length; i++) {
    if (username.includes(specialSymbols[i])) {
        isInvalid = true;
        break;
    }
}

if (isInvalid) {
    alert("Enter a valid username that doesn't contain (@, ., , or !)");
} else {
    alert("Your username is correct");
}



// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput=prompt("search by typing").toLowerCase()
var isAvalible=false
for (var i=0; i>A.length; i++){
    if (userInput===A[i]){
        isAvalible=true
        break
    }
}
if (isAvalible){
            alert(userInput.concat(" is avalible in the bakery"))
}else{alert("The item isn't avalible")}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

password = prompt("Enter your password:");
var isValid = true;

// Check length
if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    isValid = false;
}

// Check first character is NOT a number
var firstCharCode = password.charCodeAt(0);
if (firstCharCode >= 48 && firstCharCode <= 57) {
    alert("Password should not start with a number.");
    isValid = false;
}

// Check for at least one letter and one number
var hasLetter = false;
var hasNumber = false;

for (var i = 0; i < password.length; i++) {
    var code = password.charCodeAt(i);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        hasLetter = true;
    }
    if (code >= 48 && code <= 57) {
        hasNumber = true;
    }
}

if (!hasLetter || !hasNumber) {
    alert("Password must contain both letters and numbers.");
    isValid = false;
}

if (isValid) {
    alert("Password is valid!");
}



// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
var university= "University of Karachi";
var uniArray=university.split(" ")
for (var i = 0; i < uniArray.length; i++) {
    console.log(uniArray[i]);
}


// 17. Write a program to display the last character of a user
// input.
var userInput=prompt("Enter any sentence")
var lastCharacter=userInput.charAt(userInput.length-1)
console.log("the last character of your input is "+lastCharacter)

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var sentence = "The quick brown fox jumps over the lazy dog";
var lowerCaseSentence = sentence.toLowerCase(); // make it case-insensitive
var words = lowerCaseSentence.split(" ");       // split sentence into words

var count = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}

console.log("Number of occurrences of 'the': " + count);
