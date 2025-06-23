JavaScript Math Ambiguity Notes
===============================

Overview
--------

-   **Ambiguity**: Math expression order affects results.
    -   Example: `var totalCost = 1 + 3 * 4;` (is it `(1 + 3) * 4 = 16` or `1 + (3 * 4) = 13`?).
-   **Precedence Rules**: JavaScript prioritizes multiplication over addition (e.g., `1 + 3 * 4 = 13`).

Parentheses
-----------

-   Use `()` to override precedence and clarify order.
    -   `(1 + 3) * 4` yields `16`.
    -   `1 + (3 * 4)` yields `13`.
-   **Complex Expressions**: Add parentheses for clarity.
    -   `((2 * 4) * 4) + 2` yields `34`.
    -   `(2 * 4) * (4 + 2)` yields `48`.

Benefits
--------

-   Parentheses ensure correct results and improve code readability for others and future self.
