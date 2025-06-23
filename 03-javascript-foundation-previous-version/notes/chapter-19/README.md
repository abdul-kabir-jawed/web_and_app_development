JavaScript for Loops Enhancements Notes
=======================================

Overview
--------

-   Enhance `for` loops with flags, Booleans, `break`, and `array.length` for efficiency and clarity.

Features
--------

-   **Flags**: Track conditions with a variable.
    -   Example: `var matchFound = false;` set to `true` if match found, alert if still `false`.
-   **Booleans**: Use `true`/`false` (no quotes) for flags.
    -   Example: `if (matchFound === false) { alert("It's not on the list"); }`.
-   **Breaking Loops**: Use `break` to exit early when condition is met.
    -   Example: Stop after finding a match to save cycles.
-   **Array Length**: Use `array.length` for dynamic loop limits.
    -   Example: `var numElements = cleanestCities.length;`.

Example
-------

```
var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; i < numElements; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
        break;
    }
}
if (!matchFound) { alert("It's not on the list"); }

```

Notes
-----

-   Use `< numElements` (not `<=`) as indices are 0-based, `length` is 1-based.
-   `!matchFound` is shorthand for `matchFound === false`.