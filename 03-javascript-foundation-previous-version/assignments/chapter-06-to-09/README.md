
JavaScript Math Expressions Project
===================================

This project demonstrates solutions to JavaScript exercises from Chapter 6 to 9: Math Expressions. It includes interactive programs that utilize alerts, prompts, and basic arithmetic operations to perform calculations and display results in the browser. The project consists of an `index.html` file for the webpage structure and a `script.js` file containing the JavaScript logic.

Features
--------

-   **Number Arithmetic**: Performs arithmetic operations on a user-provided number and displays the results.
-   **Variable Output Analysis**: Evaluates and explains the output of a sequence of increment and decrement operations.
-   **User Greeting**: Prompts the user for their name and displays a personalized greeting.
-   **Multiplication Table**: Generates a multiplication table for a user-specified number (defaults to 5 if no input is provided).
-   **Marks Calculation**: Takes input for three subjects, their obtained marks, calculates the total marks and percentage, and displays the results in a formatted table.

Files
-----

-   **index.html**: The main HTML file that provides the structure of the webpage and links to the JavaScript file.
-   **script.js**: Contains all the JavaScript code to handle user inputs, perform calculations, and display results.
-   **README.md**: This file, providing an overview of the project and its features.

How to Run
----------

1.  Clone or download the project repository.
2.  Open the `index.html` file in a web browser.
3.  The JavaScript code in `script.js` will execute automatically, prompting the user for inputs and displaying results in alerts or the browser window.

Implementation Details
----------------------

-   The programs use `prompt()` for user input and `alert()` or `document.write()` to display outputs.
-   Arithmetic operations include addition, subtraction, multiplication, division, and modulus.
-   Increment (`++`) and decrement (`--`) operators are used and explained in detail for variable manipulation.
-   The marks calculation feature dynamically creates an HTML table to display subject-wise marks, total marks, and percentage.
-   Default values are handled for cases where the user does not provide input (e.g., multiplication table defaults to 5).

Example Outputs
---------------

-   **Arithmetic Program**: If the user enters `10`, the program displays results like `10 + 5 = 15`, `10 - 5 = 5`, etc.
-   **Variable Analysis**: For `var a = 2, b = 1; var result = --a - --b + ++b + b--;`, the output is explained step-by-step, resulting in `a = 1`, `b = 0`, and `result = 3`.
-   **Greeting**: If the user enters "Alice", the output is "Hello, Alice!".
-   **Multiplication Table**: For input `3`, it displays `3 x 1 = 3`, `3 x 2 = 6`, ..., `3 x 10 = 30`.
-   **Marks Calculation**: For subjects Math, English, and Science with marks 85, 90, and 88, it shows a table with total marks (263/300) and percentage (87.67%).

Notes
-----

-   Ensure JavaScript is enabled in your browser for the prompts and alerts to work.
-   The project is designed to be simple and educational, focusing on basic JavaScript concepts like variables, operators, and user interaction.