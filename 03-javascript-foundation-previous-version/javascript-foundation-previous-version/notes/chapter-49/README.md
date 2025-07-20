Summary of JavaScript Field Value Reading
=========================================

This document explains reading form field values in JavaScript, focusing on validating a required email field:

1.  **Form Setup**: A form includes a text input for an email address with an ID and a submit button (`<form><input type="text" id="email"><input type="submit" value="Submit"></form>`).
2.  **Event Handler**: The `onSubmit` event on the form tag (`<form onSubmit="checkAddress('email')">`) triggers the `checkAddress` function on form submission, applied to the form, not the button.
3.  **Reading Field Values**: The `checkAddress` function uses `document.getElementById(fieldId).value` to check the email field's value. If empty (`""`), it triggers an alert: "Email address required."
4.  **Syntax Details**: The sequence `document.getElementById(fieldId).value` requires strict camelCase for `getElementById`. Dots separate components.
5.  **Alternative Approach**: Storing the value in a variable (e.g., `var val = document.getElementById(fieldId).value`) improves clarity before checking if it's empty.
6.  **Note on Inline Handling**: Inline `onSubmit` is used for simplicity, with professional methods to be covered later.