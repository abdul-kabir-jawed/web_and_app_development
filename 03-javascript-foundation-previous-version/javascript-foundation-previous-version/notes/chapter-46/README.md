Summary of JavaScript Button and Image Event Handling
=====================================================

This document explores inline event handling for buttons and images in JavaScript, extending the concept from links:

1.  **Buttons vs. Links**: Buttons (`<input type="button">`) are preferred over links for triggering events, as links typically suggest navigation.
2.  **Button Event Handling**: A button can trigger an event like an alert using inline JavaScript (e.g., `<input type="button" value="Click" onclick="alert('Hello world!')">`). The `onclick` handler matches that used for links.
3.  **Form Tags**: Enclosing buttons in `<form>` tags is recommended by some professionals but not mandatory, especially with inline handlers.
4.  **Images as Event Triggers**: Images can trigger events like buttons or links (e.g., `<img src="button-greet.png" onclick="alert('Hello world!')">`). A cleaner approach calls a function (e.g., `onclick="greetTheUser()"`).
5.  **Inline Event Handling Limitations**: Inline handlers are used for simplicity but are not best practice. Advanced scripting methods will be covered later.