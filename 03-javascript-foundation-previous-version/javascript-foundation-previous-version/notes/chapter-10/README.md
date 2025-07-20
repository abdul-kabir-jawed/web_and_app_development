JavaScript if Statements Notes
==============================

Overview
--------

-   **if Statements**: Execute code if a condition is true.
    -   Example: `if (x === "Vatican") { alert("Correct!"); }` (displays alert if `x` is `"Vatican"`).

Syntax
------

-   Start with `if`, space, condition in parentheses: `if (condition)`.
-   Use `=` for equality (not `=` for assignment).
-   Code block in curly brackets `{}`; no semicolon after closing bracket.

Key Points
----------

-   **Style**: Space after `if` (unlike `alert`); always use `{}`; prefer `=` over `==`.
-   Test variables or strings: `var correctAnswer = "Vatican"; if (x === correctAnswer) { alert("Correct!"); }`.
-   Multiple statements: `if (x === correctAnswer) { score++; alert("Correct!"); }`.
-   Use with `prompt`: `var x = prompt("Where does the Pope live?");`.

Style
-----

-   Always use curly brackets for consistency.
-   Use `=` for equality checks to avoid technical differences with `==`.
