JavaScript If...Else & Else If Statements Project
=================================================

This project demonstrates the use of **If...Else** and **Else If** statements in JavaScript to test various conditions. It includes a collection of programs that solve specific tasks, showcasing conditional logic for decision-making in JavaScript. The solutions are implemented in a `script.js` file and displayed through an `index.html` page.

Project Structure
-----------------

-   **index.html**: The main HTML file that provides a simple interface to interact with the JavaScript programs via the browser console.
-   **script.js**: Contains JavaScript code for all the tasks listed below.
-   **README.md**: This file, providing an overview and instructions for the project.

Tasks Implemented
-----------------

1.  **Character Type Checker**: Takes a character input and determines if it is a number, uppercase letter, or lowercase letter using ASCII codes (A=65, Z=90, a=97, z=122).
2.  **Compare Two Integers**: Accepts two integers and displays the larger one, or indicates if they are equal.
3.  **Number Sign Checker**: Takes a number input and identifies whether it is positive, negative, or zero.
4.  **Vowel Checker**: Checks if a single character is a vowel (returns `true` or `false`).
5.  **Password Validator**:
    -   Stores a correct password in a variable.
    -   Prompts the user to enter a password.
    -   Validates if the input is empty or matches the stored password, displaying appropriate messages.
6.  **Fix Greeting Program**: Corrects a faulty if/else statement to assign a greeting ("Good day" or "Good evening") based on the hour of the day.
7.  **Time to 12-Hour Format Converter**: Converts a 24-hour clock time (e.g., 1900) to a 12-hour format (e.g., 7:00 PM) using conditional logic.

How to Run
----------

1.  **Clone or Download the Project**:
    -   Clone the repository or download the project files (`index.html`, `script.js`, `README.md`).
2.  **Open the Application**:
    -   Open `index.html` in a web browser.
    -   Open the browser's console (usually by pressing `F12` or `Ctrl+Shift+J` and navigating to the "Console" tab).
3.  **Interact with the Programs**:
    -   The `script.js` file contains all the logic, and the programs use `prompt()` for input and `console.log()` or `alert()` for output.
    -   Follow the prompts in the browser to provide inputs and view results in the console or via alerts.

Prerequisites
-------------

-   A modern web browser (e.g., Chrome, Firefox, Edge).
-   Basic understanding of JavaScript and how to use the browser console.

Example Usage
-------------

-   For Task 1: Enter a character (e.g., "A", "5", or "z") when prompted, and the console will display whether it's a number, uppercase letter, or lowercase letter.
-   For Task 5: Enter a password when prompted, and the program will validate it against the stored password (`mySecret123`).
-   For Task 7: Input a time in 24-hour format (e.g., "1900"), and the program will output the equivalent 12-hour format (e.g., "7:00 PM").

Notes
-----

-   The programs use `prompt()` and `console.log()` for simplicity, making it easy to test in a browser environment.
-   Ensure the browser allows pop-ups for `prompt()` to work correctly.
-   The code is well-commented to explain the logic for each task.
-   All tasks are implemented in a single `script.js` file for simplicity, with clear separation between each task.

Sample Code
-----------

Below is a snippet from `script.js` for Task 1 (Character Type Checker):

```
// Task 1: Check if input is a number, uppercase letter, or lowercase letter
let char = prompt("Enter a single character:");
let ascii = char.charCodeAt(0);
if (ascii >= 48 && ascii <= 57) {
    console.log(`${char} is a number.`);
} else if (ascii >= 65 && ascii <= 90) {
    console.log(`${char} is an uppercase letter.`);
} else if (ascii >= 97 && ascii <= 122) {
    console.log(`${char} is a lowercase letter.`);
} else {
    console.log(`${char} is neither a number nor a letter.`);
}

```

License
-------

This project is for educational purposes and is not licensed for commercial use.
