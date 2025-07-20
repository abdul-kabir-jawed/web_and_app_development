JavaScript Multiple Conditions Notes
====================================

Overview
--------

-   **Multiple Conditions**: Use `&&` (AND) and `||` (OR) to test sets of conditions in `if` statements.
    -   `&&`: All conditions must be true for the block to execute.
    -   `||`: At least one condition must be true for the block to execute.

Examples
--------

-   `if (weight > 300 && time < 6) { ... }`: Executes if both conditions are true (e.g., NFL lineman tryout).
-   Use parentheses to clarify logic:
    -   `if (age > 65 || (age < 21 && res === "U.S.")) { ... }`: Pass if over 65 anywhere or under 21 and in U.S.
    -   Without parentheses, `&&` takes precedence over `||`, which may change the logic.

Style
-----

-   Use `===` for equality checks.
-   Always use curly brackets `{}` for `if` blocks, no semicolon after.
-   Parentheses improve readability and ensure correct condition grouping.
