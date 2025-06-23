JavaScript Concatenation Notes
==============================

Overview
--------

-   **Concatenation**: Use `+` to combine text strings.
    -   Example: `alert("Thanks, " + userName + "!");` displays `Thanks, Susan!` if `userName = "Susan"`.

Key Points
----------

-   Include spaces in strings as needed (e.g., `"Thanks, "` has a space).
-   Concatenate strings, variables, or both: `var message = "Thanks, "; var banger = "!"; alert(message + userName + banger);`.
-   Assign result to a variable: `var customMess = message + userName + banger;`.

Numbers in Quotes
-----------------

-   Quoted numbers are strings: `alert("2" + "2");` displays `22`, not `4`.
-   Mixing strings and numbers: `alert("2 plus 2 equals " + 2 + 2);` displays `2 plus 2 equals 22` (numbers auto-convert to strings).
