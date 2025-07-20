
JavaScript User Input & Conditional Statements Project
======================================================

This project contains a JavaScript application that implements various user input and conditional statement exercises as part of a JavaScript learning module (Chapters 9 to 11: Math Expressions). The application includes an HTML file for the user interface, a JavaScript file for logic, and this README for documentation.

Project Structure
-----------------

-   **index.html**: The main HTML file that provides the user interface for input prompts and displaying results.
-   **script.js**: Contains the JavaScript logic for all 11 exercises, handling user inputs and conditional statements.
-   **README.md**: This file, providing an overview and instructions for the project.

Features
--------

The project implements the following exercises:

1.  **City Name Check**: Prompts the user for a city name and displays "Welcome to city of lights" if the input is "Karachi".
2.  **Gender Greeting**: Takes gender input and displays "Good Morning Sir" for male or "Good Morning Ma'am" for female.
3.  **Traffic Signal Message**: Takes a traffic signal color (Red, Yellow, Green) and shows the corresponding message (e.g., "Must Stop" for Red).
4.  **Fuel Level Warning**: Checks the remaining fuel in a car (in liters) and alerts if it's below 0.25 liters.
5.  **Alert Conditions Check**: Evaluates multiple conditional statements to determine if alerts are triggered (includes variables `a`, `b`, `c`, `materialCost`, `laborCost`, and string comparisons).
6.  **Grade Calculator**: Takes marks for three subjects and total marks, calculates the percentage, and displays the grade and remarks based on a predefined table.
7.  **Guess Game**: Stores a secret number (1--10), prompts the user to guess it, and displays "Bingo! Correct answer" for a correct guess or "Close enough" if the guess is off by 1.
8.  **Divisibility by 3**: Checks if a user-entered number is divisible by 3 and displays an appropriate message.
9.  **Even or Odd Number**: Determines if a user-entered number is even or odd.
10. **Temperature Message**: Takes a temperature input and displays a weather message based on predefined ranges (e.g., "It is too hot outside" for T > 40).
11. **Basic Calculator**: Takes two numbers and an operation (+, -, *, /, %) and computes the result.

Prerequisites
-------------

-   A modern web browser (e.g., Chrome, Firefox, Edge).
-   No additional libraries or dependencies are required, as the project uses vanilla JavaScript.

Setup Instructions
------------------

1.  Clone or download the project files to your local machine.
2.  Open `index.html` in a web browser to run the application.
3.  The `script.js` file is linked to `index.html` and contains all the logic for the exercises.
4.  Interact with the prompts that appear in the browser to test each feature.

Usage
-----

-   Open `index.html` in a browser.
-   Follow the prompts to enter inputs (e.g., city name, gender, numbers, etc.).
-   Results will be displayed via alerts or on the webpage (for the grade calculator).
-   To test specific exercises, you can comment/uncomment the relevant sections in `script.js`.

Notes
-----

-   The project uses `prompt` and `alert` for simplicity in handling user input and output.
-   For the grade calculator (Exercise 6), results are displayed on the webpage using `document.write`.
-   Ensure pop-ups are enabled in your browser, as some exercises rely on `alert` for output.
-   The project is designed to run in a browser environment and does not require a server.

License
-------

This project is for educational purposes and is not licensed for commercial use.