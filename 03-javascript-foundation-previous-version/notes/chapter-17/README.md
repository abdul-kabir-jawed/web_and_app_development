JavaScript Array Methods Notes
==============================

Overview
--------

-   **Array Methods**: Manipulate arrays by adding, removing, or copying elements.

Methods
-------

-   **`shift()`**: Removes the first element.
    -   Example: `pets.shift();` removes `"dog"` from `["dog", "cat", "bird"]`, leaving `["cat", "bird"]`.
-   **`unshift()`**: Adds elements to the beginning.
    -   Example: `pets.unshift("fish", "ferret");` adds `"fish", "ferret"` to start.
-   **`splice()`**: Inserts and/or removes elements at a specific index.
    -   Syntax: `array.splice(start, deleteCount, item1, item2, ...)`
    -   Example: `pets.splice(2, 2, "pig", "duck", "emu");` (from `["dog", "cat", "fly", "bug", "ox"]`, removes `"fly", "bug"`, adds `"pig", "duck", "emu"`, results in `["dog", "cat", "pig", "duck", "emu", "ox"]`).
    -   Add without removing: `pets.splice(2, 0, "pig", "duck");`.
    -   Remove without adding: `pets.splice(3, 2);` removes `"bug", "ox"`.
-   **`slice()`**: Copies elements to a new array, leaving original unchanged.
    -   Syntax: `array.slice(start, end)` (copies from `start` to `end-1`).
    -   Example: `var noPets = pets.slice(2, 4);` copies `"fly", "bug"` from `["dog", "cat", "fly", "bug", "ox"]` to `noPets`.

Key Points
----------

-   `splice`: First number is start index; second is number of elements to remove.
-   `slice`: Second number is index after the last element to copy.
-   Assign `slice` results to a new array; original array remains unchanged.
