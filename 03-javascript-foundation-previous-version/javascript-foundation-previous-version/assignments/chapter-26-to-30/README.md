JavaScript Math Methods Assignment
==================================

This project contains solutions to a series of JavaScript exercises focused on mathematical operations and random number generation, as outlined in the Math Methods curriculum. The exercises cover various Math object methods and user input handling, implemented in a web application using HTML and JavaScript.

Project Structure
-----------------

-   **index.html**: The main HTML file that provides the structure for the web page and links to the JavaScript file.
-   **script.js**: Contains the JavaScript code implementing all 8 Math method exercises.
-   **README.md**: This file, providing an overview of the project and instructions.

Exercises Overview
------------------

The following exercises demonstrate proficiency in JavaScript Math methods, user input handling, and DOM manipulation. Each solution is implemented in the `script.js` file and outputs results to the browser.

1.  **Positive Integer Operations**: Takes a positive integer via prompt and displays the number, its rounded value (`Math.round`), floor value (`Math.floor`), and ceil value (`Math.ceil`).
2.  **Negative Floating Point Operations**: Takes a negative floating-point number via prompt and displays the number, its rounded value, floor value, and ceil value.
3.  **Absolute Value**: Displays the absolute value of a user-entered number using `Math.abs` (e.g., `-4` → `4`, `5` → `5`).
4.  **Dice Simulator**: Simulates a dice roll using `Math.random()` and displays a value between 1 and 6.
5.  **Coin Toss Simulator**: Simulates a coin toss using `Math.random()` and displays "Heads" or "Tails".
6.  **Random Number (1-100)**: Generates and displays a random number between 1 and 100 using `Math.random()`.
7.  **Weight Parser**: Parses user-entered weight (e.g., "50", "50kgs", "50.2kgs", "50.2kilograms") and displays the numeric weight.
8.  **Secret Number Game**: Generates a random secret number (1-10), asks for user input, and congratulates if the input matches using `Math.random()`.

Setup Instructions
------------------

1.  **Clone or Download the Repository**:

    -   Clone the repository or download the project files to your local machine.
2.  **Open the Project**:

    -   Open `index.html` in a web browser to run the application.
    -   The JavaScript code in `script.js` will execute automatically, prompting for inputs and displaying results.
3.  **Dependencies**:

    -   No external libraries are required. The project uses vanilla JavaScript and runs in any modern web browser.

Usage
-----

-   Open `index.html` in a browser.
-   Follow the prompt dialogs to provide inputs for each exercise.
-   Results will be displayed in the browser using `document.write()` or alerts, as specified.
-   To view specific exercise outputs, comment/uncomment sections in `script.js` or modify the code to focus on individual solutions.

Notes
-----

-   The solutions are designed to be simple and educational, focusing on Math methods and basic JavaScript concepts.
-   Outputs use `document.write()` or alerts for simplicity, as per assignment requirements. In production, consider DOM manipulation for better user experience.
-   Ensure pop-up blockers are disabled to allow prompt dialogs.
-   Weight parsing assumes inputs like "50", "50kgs", "50.2kgs", or "50.2kilograms" and extracts
