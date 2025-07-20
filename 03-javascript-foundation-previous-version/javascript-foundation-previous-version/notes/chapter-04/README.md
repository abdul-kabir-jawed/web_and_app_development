JavaScript Number Variables Notes
=================================

Overview
--------

-   **Number Variables**: Assign numbers to variables: `var weight = 150;`
    -   No quotes for numbers; quotes make it a string (e.g., `"150"` is not a number).
-   **Math Operations**: Use variables in calculations: `weight + 25` evaluates to `175` if `weight = 150;`.

Key Rules
---------

-   Numbers without quotes are not variables; numbers can't start variable names (e.g., `var 1st = 150;` is invalid).
-   Strings (quoted numbers) can't be used for math (e.g., `"23" + 7` doesn't equal `30`).
-   Variables can hold numbers or strings, and their type can change: `var num = 23; num = "text";`

Calculations
------------

-   Use variables in expressions: `var newNum = originalNum + numToBeAdded;`
-   Update a variable using itself: `originalNum = originalNum + 10;`
-   Mix variables and literal numbers: `var newNumber = originalNumber + 2;`

Variable Naming
---------------

-   Numbers allowed in names if not first: `var prezWhoCame_1st = "Washington";`
-   Variable names don't denote type (number or string).

Alerts
------

-   Numbers or number variables in `alert()` are auto-converted to strings for display:
    -   Example: `alert(144);` or `alert(caseQty);` where `caseQty = 144;`.
