JavaScript Arrays Assignment
============================

This project demonstrates various array operations in JavaScript as part of the Arrays chapter (Chapters 14-16). The code is implemented in a `script.js` file and displayed through an `index.html` file. Below is a description of the tasks accomplished and instructions to run the project.

Project Structure
-----------------

-   `index.html`: The main HTML file that sets up the page and links to the JavaScript file.
-   `script.js`: Contains all the JavaScript code for the array operations.
-   `README.md`: This file, providing an overview and instructions.

Tasks Implemented
-----------------

1.  **Declare an empty array using literal notation** for future student names.
2.  **Declare an empty array using object notation** for future student names.
3.  **Declare and initialize a strings array**.
4.  **Declare and initialize a numbers array**.
5.  **Declare and initialize a boolean array**.
6.  **Declare and initialize a mixed array**.
7.  **Education qualifications array**: Stores qualifications in Pakistan (e.g., SSC, HSC, BCS, BS, BCOM, MS, M.Phil, PhD) and displays them in the browser.
8.  **Student scores and percentages**: Stores 3 student names and their scores, calculates percentages (out of 500 marks), and displays them.
9.  **Color array operations**:
    -   Initialize an array with color names and display it.
    -   Add a color to the beginning (user input).
    -   Add a color to the end (user input).
    -   Add two colors to the beginning.
    -   Delete the first color.
    -   Delete the last color.
    -   Add a color at a user-specified index.
    -   Delete a user-specified number of colors from a user-specified index.
10. **Sort student scores**: Store student scores in an array and sort them in ascending order using the `sort` method.
11. **Copy city names**: Initialize a cities array and copy 3 elements to a `selectedCities` array.
12. **Join array elements**: Create a single string from an array (`["This ", " is ", " my ", " cat"]`) using the `join` method.
13. **FIFO array (Queue)**: Store values in an array to access them in First-In-First-Out order.
14. **LIFO array (Stack)**: Store values in an array to access them in Last-In-First-Out order.
15. **Phone manufacturers dropdown**: Store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony, Haier) in an array and display them in a dropdown menu using `document.write()`.

How to Run
----------

1.  Clone or download this repository.
2.  Open `index.html` in a web browser to view the output of the JavaScript operations.
3.  Some tasks (e.g., adding colors, deleting colors) require user input via `prompt`. Ensure pop-ups are enabled in your browser.
4.  The `script.js` file contains all the logic, and outputs are displayed in the browser or console.

Prerequisites
-------------

-   A modern web browser (e.g., Chrome, Firefox).
-   No additional dependencies are required, as the project uses vanilla JavaScript.

Notes
-----

-   The project uses `document.write()` for some outputs, which may overwrite the page. For better interactivity, consider using DOM manipulation methods like `appendChild` in a production environment.
-   User inputs via `prompt` are used for simplicity. In a real application, consider using HTML input fields for a better user experience.
-   The code is structured to be clear and commented for educational purposes.

Example Output
--------------

-   **Task 7**: Displays a list of qualifications like "1) SSC, 2) HSC, 3) BCS, ..." in the browser.
-   **Task 8**: Shows student names, scores, and percentages, e.g., "Score of Ali: 400. Percentage: 80%".
-   **Task 9**: Displays the color array after each operation, e.g., "Colors: [red, blue, green]".
-   **Task 15**: Renders a dropdown menu with phone manufacturers like Apple, Samsung, etc.
