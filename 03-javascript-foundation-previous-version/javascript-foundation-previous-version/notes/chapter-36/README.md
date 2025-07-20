JavaScript Functions with Arguments Notes
=========================================

Overview
--------

-   Functions can receive data through arguments, making them versatile and reusable.

Key Concepts
------------

-   **Arguments**:
    -   Data passed in the function call (e.g., string, number, variable).
        -   Example: `greetUser("Hello, there.");` or `var msg = "Hello"; greetUser(msg);`.
-   **Parameters**:
    -   Variables in the function definition that catch arguments.
        -   Example: `greeting` in `function greetUser(greeting) { alert(greeting); }`.
    -   Implicitly declared; no `var` needed.
    -   Names don't need to match arguments; matched by order.
-   **Multiple Arguments**:
    -   Pass multiple arguments with commas: `showMessage(month, " is great", 23);`.
    -   Function definition has matching parameters: `function showMessage(m, str, num) { alert(m + str + num); }`.
    -   Arguments can be variables, strings, or numbers.
-   **Usage**:
    -   Parameters are used like regular variables in the function body.
    -   Not all parameters must be used; order of use is flexible.

Example
-------

```
function showMessage(m, str, num) {
  alert(m + str + num);
}
var month = "March";
showMessage(month, " is great", 23); // Alerts: "March is great 23"

```