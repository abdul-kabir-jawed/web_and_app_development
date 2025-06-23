JavaScript for Loops Notes
==========================

Overview
--------

-   **for Loops**: Repeat code a set number of times, often for array iteration.
    -   Example: Check if `cityToCheck` is in `cleanestCities` array:

        ```
        var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
        for (var i = 0; i <= 4; i++) {
            if (cityToCheck === cleanestCities[i]) {
                alert("It's one of the cleanest cities");
            }
        }

        ```

Syntax
------

-   `for (initialization; condition; update) { code }`
    -   **Initialization**: Declare counter (e.g., `var i = 0`).
    -   **Condition**: Loop runs while true (e.g., `i <= 4`).
    -   **Update**: Change counter after iteration (e.g., `i++`).

Key Points
----------

-   Counter (usually `i`) tracks iterations and can act as array index.
-   Loop runs until condition is false (e.g., `i <= 4` or `i < 5` for 5 iterations).
-   Counter can start anywhere, increment/decrement by any value.
-   `i` is conventional, but any valid variable name works.
-   More concise than multiple `if`/`else if` for array iteration.
