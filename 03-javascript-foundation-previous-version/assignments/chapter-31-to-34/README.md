JavaScript Date Methods Assignment
==================================

This project contains solutions to a series of JavaScript exercises focused on date and time manipulation, as outlined in the Date Methods curriculum. The exercises cover various Date object methods and user input handling, implemented in a web application using HTML and JavaScript.

Project Structure
-----------------

-   **index.html**: The main HTML file that provides the structure for the web page and links to the JavaScript file.
-   **script.js**: Contains the JavaScript code implementing all 14 Date method exercises.
-   **README.md**: This file, providing an overview of the project and instructions.

Exercises Overview
------------------

The following exercises demonstrate proficiency in JavaScript Date methods, user input handling, and DOM manipulation. Each solution is implemented in the `script.js` file and outputs results to the browser.

1.  **Current Date and Time**: Displays the current date and time in the browser using `Date()`.
2.  **Current Month in Words**: Alerts the current month in words (e.g., "December") using `Date.getMonth()` and an array of month names.
3.  **First 3 Letters of Day**: Alerts the first 3 letters of the current day (e.g., "Sun" for Sunday) using `Date.getDay()` and an array of day names.
4.  **Fun Day Check**: Displays "It's Fun day" if today is Saturday or Sunday using `Date.getDay()`.
5.  **First or Last Half of Month**: Shows "First fifteen days of the month" if the date is before the 16th, else "Last days of the month" using `Date.getDate()`.
6.  **Minutes Since Epoch**: Calculates and assigns the minutes since midnight, Jan. 1, 1970, to a variable using `Date.getTime()`.
7.  **AM/PM Check**: Alerts "It's AM" if before noon, else "It's PM" using `Date.getHours()`.
8.  **Last Day of 2020**: Creates a Date object for the last day of the last month of 2020 and assigns it to `laterDate`.
9.  **Days Since 1st Ramadan**: Calculates days passed since June 18, 2015 (1st Ramadan) using `Date` objects and alerts the result.
10. **Seconds Since 2015**: Displays seconds elapsed between a reference date and the start of 2015 using `Date.getTime()`.
11. **Reset Hours Ahead**: Creates a Date object for the current date/time, advances it by one hour using `Date.setHours()`, and displays it.
12. **100 Years Back**: Creates a Date object and resets it to 100 years back using `Date.setFullYear()`, then shows it in an alert.
13. **Calculate Birth Year**: Asks the user's age, calculates their birth year using `Date.getFullYear()`, and displays it.
14. **K-Electric Bill Generator**: Generates a K-Electric bill with fields: Customer Name, Current Month, Number of Units, Charges per Unit, Net Amount Payable (within Due Date), Late Payment Surcharge, and Gross Amount Payable (after Due Date). Uses `Date.getMonth()` for the current month and rounds amounts to 2 decimal places with `toFixed(2)`.

Setup Instructions
------------------

1.  **Clone or Download the Repository**:

    -   Clone the repository or download the project files to your local machine.
2.  **Open the Project**:

    -   Open `index.html` in a web browser to run the application.
    -   The JavaScript code in `script.js` will execute automatically, prompting the user for inputs and displaying results in the browser.
3.  **Dependencies**:

    -   No external libraries are required. The project uses vanilla JavaScript and runs in any modern web browser.

Usage
-----

-   Open `index.html` in a browser.
-   Follow the prompt dialogs to provide inputs for each exercise.
-   Results will be displayed in the browser using `document.write()` or alerts, as specified in each exercise.
-   To view specific exercise outputs, you can comment/uncomment sections in `script.js` or modify the code to focus on individual solutions.

Notes
-----

-   The solutions are designed to be simple and educational, focusing on Date methods and basic JavaScript concepts.
-   Outputs are displayed using `document.write()` or alerts for simplicity, as per the assignment requirements. In a production environment, consider using DOM manipulation for a better user experience.
-   Ensure pop-up blockers are disabled in the browser to allow prompt dialogs.
-   Calculations for time differences (e.g., minutes, seconds, days) use `Date.getTime()` for precision.
-   The K-Electric bill uses `toFixed(2)` to ensure amounts are rounded to 2 decimal places.

License
-------

This project is for educational purposes and does not include a
