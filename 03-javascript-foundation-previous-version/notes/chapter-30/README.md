JavaScript Decimal Control Notes
================================

Overview
--------

-   Control the number of decimal places in numbers using `toFixed()` for formatting.

Key Concepts
------------

-   **Decimal Control with `toFixed()`**:
    -   Rounds a number to a specified number of decimal places, returns a string.
        -   Example: `var total = 10.59675; var prettyTotal = total.toFixed(2);` → `prettyTotal` is `"10.60"`.
    -   Syntax: `number.toFixed(digits)` (e.g., `2` for two decimal places).
    -   Currency formatting: `var currencyTotal = "$" + prettyTotal;` → `"$10.60"`.
    -   Empty parentheses (`toFixed()`) rounds to zero decimals.
-   **Rounding Issue**:
    -   `toFixed()` may round inconsistently for numbers ending in 5 (e.g., `1.555` may become `"1.55"` or `"1.56"`, depending on browser).
-   **Workaround for Rounding Issue**:
    -   Convert number to string, check if last digit is `5`, replace with `6`, convert back, apply `toFixed(2)`.

        ```
        var str = num.toString();
        if (str.charAt(str.length - 1) === "5") {
            str = str.slice(0, str.length - 1) + "6";
        }
        num = Number(str);
        var prettyNum = num.toFixed(2);

        ```

-   **Key Points**:
    -   `toFixed()` returns a string, not a number.
    -   Use `Number()` to convert back to a number for further calculations.
