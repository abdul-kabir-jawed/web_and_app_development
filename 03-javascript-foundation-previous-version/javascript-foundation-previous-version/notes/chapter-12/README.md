JavaScript if...else Statements Notes
=====================================

Overview
--------

-   **if...else**: Handles true and false conditions.
    -   Example: `if (x === "Vatican") { alert("Correct!"); } else { alert("Wrong answer"); }`
    -   `else` executes if `if` condition is false.
-   **else if**: Tests additional conditions if previous ones fail.
    -   Example: `if (x === "Vatican") { alert("Correct!"); } else if (x === "Rome") { alert("Incorrect but close"); } else { alert("Incorrect"); }`

Behavior
--------

-   JavaScript stops at the first true condition in `if`/`else if` series.
-   Multiple statements can execute in `if`, `else if`, or `else` blocks.

Style
-----

-   Use `===` for equality checks.
-   Consistent formatting: space after `if`/`else if`/`else`, always use curly brackets `{}`, no semicolon after.
-   More concise and readable than multiple `if` statements.
