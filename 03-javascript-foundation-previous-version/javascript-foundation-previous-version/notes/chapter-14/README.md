JavaScript Nested if Statements Notes
=====================================

Overview
--------

-   **Nested if Statements**: Place `if` statements inside others to test complex conditions.
    -   Example:

        ```
        if (c === d) {
            if (x === y) {
                g = h;
            } else if (a === b) {
                g = h;
            } else {
                e = f;
            }
        } else {
            e = f;
        }

        ```

    -   Equivalent to: `if ((x === y || a === b) && c === d) { g = h; } else { e = f; }`

Structure
---------

-   Nested blocks are enclosed in curly brackets `{}`.
-   Indent 2 spaces per level for readability.
-   Outer `if` condition must be true for inner blocks to execute.

Usage
-----

-   Useful for complex logic but less concise than multiple conditions with `&&` and `||`.
-   Prefer multiple conditions for simpler cases.

Style
-----

-   Use `===` for equality checks.
-   Always use curly brackets `{}` and indent consistently.