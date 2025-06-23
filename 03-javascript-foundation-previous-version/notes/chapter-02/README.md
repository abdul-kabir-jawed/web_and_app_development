JavaScript Variables Notes
==========================

Overview
--------

-   **Variables**: Words that refer to values, like "my name" refers to "Mark."
    -   Example: `var name = "Mark";` (creates variable `name` with value `"Mark"`)
    -   Variables hold one value at a time but can change: `name = "Ace";`

Declaration and Assignment
--------------------------

-   **Declare**: Use `var` to create a variable: `var name;`
    -   Undefined until assigned a value.
-   **Assign**: Set a value: `name = "value";` (no `var` needed after declaration).
-   Any amount of code can separate declaration and assignment.

Naming
------

-   Choose **meaningful names** for clarity (e.g., `name`, not `floogle`).
-   JavaScript doesn't care about name meaning; `var floogle = "Mark";` is valid.
-   **Variables**: No quotes (e.g., `name`).
-   **Text Strings**: Always in double quotes (e.g., `"Mark"`).

Coding Style
------------

-   Include **spaces** around `=` in assignments: `var name = "Mark";`
-   Use **double quotes** for strings.
-   End statements with a **semicolon** (`;`).

Usage
-----

-   Variables can replace strings in code.
    -   Example: `var thanx = "Thanks for your input!"; alert(thanx);`
    -   Displays same alert as `alert("Thanks for your input!");`.
