Calculator App 🧮✨
==================

Welcome to the **Calculator App**! This is a sleek, iPhone-inspired calculator built from scratch using HTML, CSS, and JavaScript. It performs basic arithmetic operations with a smooth user experience and handles edge cases like a pro! 🚀

Features 🎉
-----------

-   **Basic Operations**: Addition (+), subtraction (-), multiplication (×), and division (÷).
-   **Decimal Support**: Add decimal points for precise calculations.
-   **Clear Functionality**: Toggle between "All Clear" (AC) and "Clear Entry" (CE) for flexible resets.
-   **Responsive Design**: Looks great on any screen size with a modern, clean UI.
-   **Edge Case Handling**: Robust against quirky inputs (e.g., multiple decimals, consecutive operators).
-   **Visual Feedback**: Operator keys highlight when active for better UX.

Tech Stack 🛠️
--------------

-   **HTML**: Structures the calculator's display and buttons.
-   **CSS**: Styles the app with a grid layout, smooth animations, and a polished look.
-   **JavaScript**: Powers the logic, event handling, and state management.

How to Run 🏃‍♂️
----------------

1.  **Clone the Repository**:

    ```
    git clone https://github.com/your-repo/calculator-app.git

    ```

2.  **Open `index.html`**:
    -   Simply open the `index.html` file in your browser, or
    -   Use a local server (e.g., `Live Server` in VS Code) for the best experience.
3.  **Start Calculating!**:
    -   Click the buttons to perform calculations.
    -   Use `AC` to reset everything or `CE` to clear the current entry.

File Structure 📂
-----------------

```
calculator-app/
├── index.html      # Main HTML file
├── styles.css      # CSS for styling
├── script.js       # JavaScript for functionality
└── README.md       # You're reading it! 😄

```

How It Works 🔍
---------------

-   **HTML**: Defines the calculator layout with a display and a grid of buttons.
-   **CSS**: Uses CSS Grid for button layout, with hover and active states for interactivity.
-   **JavaScript**:
    -   **Event Delegation**: Listens for clicks on buttons using a single event listener.
    -   **State Management**: Tracks the calculator's state (e.g., first value, operator) using `dataset` attributes.
    -   **Pure Functions**: Separates logic (e.g., `createResultString`) from side effects (e.g., `updateVisualState`).
    -   **Edge Cases**: Handles scenarios like consecutive operators, multiple decimals, and repeated equals.


Future Improvements 🚧
----------------------

-   Add support for percentage (%) and sign toggle (+/-).
-   Implement keyboard input for accessibility.
-   Enhance animations for a more dynamic feel.
-   Add a history panel to track calculations.

Contributing 🤝
---------------

Got ideas to make this calculator even cooler? Feel free to:

1.  Fork the repo.
2.  Create a new branch (`git checkout -b feature/awesome-feature`).
3.  Commit your changes (`git commit -m 'Add awesome feature'`).
4.  Push to the branch (`git push origin feature/awesome-feature`).
5.  Open a Pull Request!

License 📜
----------

This project is licensed under the MIT License. See the [LICENSE](https://grok.com/chat/LICENSE) file for details.

Happy calculating! 🎈
