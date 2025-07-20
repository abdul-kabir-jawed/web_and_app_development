Summary of JavaScript Field Event Handling
==========================================

This document covers inline event handling for form fields in JavaScript, focusing on `onFocus` and `onBlur`:

1.  **Field Events**: The `onFocus` event triggers when a user clicks into a form field, and `onBlur` triggers when the user clicks out or tabs away.
2.  **Example**: A text field for an email turns yellow on focus and white on blur (`<input type="text" size="30" onFocus="this.style.backgroundColor='yellow';" onBlur="this.style.backgroundColor='white';"`).
3.  **Syntax**: Inline event handlers use a keyword (`onFocus` or `onBlur`), an equal sign, and JavaScript/HTML in quotes, with single quotes for values to avoid nesting issues.
4.  **Best Practice**: Calling functions (e.g., `onFocus="makeFieldYellow();" onBlur="makeFieldWhite();"`) is cleaner than inline style changes.
5.  **Limitations**: Inline event handling is simple but not ideal for production. Advanced scripting methods will be covered later.