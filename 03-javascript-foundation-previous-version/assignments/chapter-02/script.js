// Task 1: Declare a variable called age & assign your age, show in alert box
var age = 18; // Example age
alert("My age is " + age);

// Task 2: Declare & initialize a variable to track visits, show number of visits
var visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) + 1 : 1;
localStorage.setItem('visitCount', visitCount);
document.write("<p>You have visited this site " + visitCount + " time(s)</p>");

// Task 3: Declare a variable called birthYear & assign your birth year, show message
var birthYear = 2007; // Example birth year (2025 - 18)
document.write("<p>My birth year is " + birthYear + "</p>");

// Task 4: Store visitor’s name, product title, quantity, and show order message
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write("<p>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store</p>");