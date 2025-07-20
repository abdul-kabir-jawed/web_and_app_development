
JavaScript Exercises (Chapters 1-20)
====================================

This project contains a collection of 16 JavaScript exercises designed to practice fundamental programming concepts from Chapters 1 to 20. Each exercise focuses on key skills such as user input handling, loops, arrays, conditionals, and basic calculations. The exercises are implemented in a single `script.js` file and can be run in a browser alongside the `index.html` file.

Project Structure
-----------------

```
├── index.html
├── script.js
└── README.md

```

-   **`index.html`**: A minimal HTML file that links to `script.js` and serves as the entry point for running the exercises in a browser.
-   **`script.js`**: Contains the JavaScript code for all 16 exercises, each implemented as a separate function or block of code.
-   **`README.md`**: This file, providing an overview of the project and details about each exercise.

Exercises Overview
------------------

Below is a summary of the 16 exercises included in this project:

1.  **Calculate Age**: Prompts the user for their birth year and alerts their current age based on the year 2025.
2.  **Average of Numbers**: Collects 5 numbers via `prompt()`, stores them in an array, and logs their average using a loop.
3.  **Divisible by 3**: Declares an array of 10 numbers and prints only those divisible by 3 using a loop.
4.  **Factorial Calculation**: Computes the factorial of a user-entered number using a `for` loop.
5.  **Reverse String**: Accepts a string via `prompt()` and prints it in reverse using a loop.
6.  **Count Specific Letter**: Counts occurrences of a specific letter in a user-entered string.
7.  **Sort Names**: Collects 5 names via `prompt()`, stores them in an array, sorts, and logs the result.
8.  **Multiplication Table**: Displays a multiplication table (1-10) for a user-entered number.
9.  **Vowel Counter**: Counts vowels in a user-entered sentence and logs the result.
10. **Product and Price List**: Displays product names alongside their prices using two arrays and a loop.
11. **Celsius to Fahrenheit**: Converts a user-entered Celsius temperature to Fahrenheit and alerts the result.
12. **Palindrome Check**: Checks if a user-entered string is a palindrome.
13. **Prime Number Check**: Determines if a user-entered number is prime and alerts the result.
14. **Largest Number**: Finds the largest number in an array of 10 random numbers (1-100).
15. **Simple Calculator**: Performs basic arithmetic (+, -, ×, ÷) on two user-entered numbers based on a chosen operation.
16. **Filter Numbers > 50**: Creates a new array containing only numbers greater than 50 from an input array.

Getting Started
---------------

### Prerequisites

-   A modern web browser (e.g., Chrome, Firefox, Edge).
-   No additional software or dependencies are required.

### Running the Project

1.  Clone or download the project directory.
2.  Open `index.html` in a web browser.
3.  Open the browser's Developer Tools (usually `F12` or `Ctrl+Shift+I`) and navigate to the **Console** tab to view outputs and interact with prompts.
4.  The exercises run sequentially, prompting for inputs as needed. Follow the prompts to provide inputs and view results via `alert()` or `console.log()`.

Usage Notes
-----------

-   **Prompts**: Most exercises use `prompt()` for user input. Ensure you enter valid data (e.g., numbers for calculations, strings for text-based exercises) to avoid errors.
-   **Outputs**: Results are displayed using `alert()` or `console.log()`. Check the console for logged outputs.
-   **Error Handling**: Basic input validation is included, but entering unexpected values (e.g., letters instead of numbers) may cause unexpected behavior.
-   **Running Specific Exercises**: To test a single exercise, comment out other exercise code in `script.js` or call the specific function manually in the console.

Example Interaction
-------------------

For Exercise 1 (Calculate Age):

1.  A prompt appears asking for your birth year.
2.  Enter a year (e.g., `1995`).
3.  An alert displays your age (e.g., `You are 30 years old`).

For Exercise 9 (Vowel Counter):

1.  A prompt asks for a sentence.
2.  Enter a sentence (e.g., `Hello World`).
3.  The console logs the vowel count (e.g., `Number of vowels: 3`).

Learning Objectives
-------------------

These exercises cover essential JavaScript concepts, including:

-   User input/output with `prompt()`, `alert()`, and `console.log()`.
-   Loops (`for`, `while`) for iteration.
-   Arrays for data storage and manipulation.
-   Conditionals for decision-making.
-   String and number operations.
-   Basic mathematical calculations.

Contributing
------------

Feel free to fork this project, add improvements, or suggest new exercises. To contribute:

1.  Fork the repository.
2.  Create a new branch for your changes.
3.  Submit a pull request with a clear description of your updates.

License
-------

This project is licensed under the MIT License. See the [LICENSE](https://grok.com/chat/LICENSE) file for details.

Acknowledgments
---------------

-   Exercises are inspired by common programming challenges for learning JavaScript.
-   Built with simplicity in mind to help beginners practice core concepts.