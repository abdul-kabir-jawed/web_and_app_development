JavaScript Unfamiliar Operators Notes
=====================================

Increment/Decrement Operators
-----------------------------

-   **Increment**: `num++` increases `num` by 1 (same as `num = num + 1`).
-   **Decrement**: `num--` decreases `num` by 1 (same as `num = num - 1`).

Postfix vs. Prefix
------------------

-   **Postfix** (`num++`, `num--`):
    -   Returns original value, then updates `num`.
    -   Example: `var num = 1; var newNum = num++;` (`newNum = 1`, `num = 2`).
    -   Example: `var num = 1; var newNum = num--;` (`newNum = 1`, `num = 0`).
-   **Prefix** (`++num`, `--num`):
    -   Updates `num` first, then returns new value.
    -   Example: `var num = 1; var newNum = ++num;` (`newNum = 2`, `num = 2`).
    -   Example: `var num = 1; var newNum = --num;` (`newNum = 0`, `num = 0`).
