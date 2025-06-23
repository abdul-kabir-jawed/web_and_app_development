Notes on Rounding Numbers in JavaScript
=======================================

Overview
--------

This document explains how to round numbers in JavaScript for an online music service where customer ratings are averaged and converted to a 0--5 star scale. It covers the `Math.round`, `Math.ceil`, and `Math.floor` methods for handling decimal numbers.

Key Points
----------

1.  **Objective**:

    -   Round a fractional average (e.g., `scoreAvg`) to the nearest integer to assign a star rating (0--5).
    -   Use JavaScript's `Math` object methods to control rounding behavior.
2.  **The `Math.round` Method**:

    -   Rounds a number to the nearest integer.
    -   Example:

        ```
        var numberOfStars = Math.round(scoreAvg);

        ```

    -   **How it works**:
        -   Rounds up if the decimal is ≥ 0.5 (e.g., 1.5 → 2, 2.5 → 3).
        -   Rounds down if the decimal is < 0.5 (e.g., 1.4 → 1).
        -   For negative numbers: -1.5 → -1, -2.5 → -2.
    -   **Assignment**:
        -   Assign to a new variable (`numberOfStars`) to preserve the original `scoreAvg`.
        -   Overwrite the original variable to replace it:

            ```
            scoreAvg = Math.round(scoreAvg);

            ```

    -   **With literals**:

        ```
        var scoreAvg = Math.round(0.0678437); // Returns 0

        ```

3.  **The `Math.ceil` Method**:

    -   Rounds up to the nearest integer, regardless of the decimal value.
    -   Example:

        ```
        var scoreAvg = Math.ceil(0.000001); // Returns 1

        ```

    -   **How it works**:
        -   "Ceiling" rounds any positive fraction up (e.g., 0.000001 → 1, 1.00001 → 2).
        -   For negative numbers: -0.000001 → 0, -1.9999 → -1.
4.  **The `Math.floor` Method**:

    -   Rounds down to the nearest integer, regardless of the decimal value.
    -   Example:

        ```
        var scoreAvg = Math.floor(0.999999); // Returns 0

        ```

    -   **How it works**:
        -   "Floor" rounds any positive fraction down (e.g., 0.999999 → 0, 1.9999 → 1).
        -   For negative numbers: -0.000001 → -1, -1.9999 → -2.
5.  **Additional Notes**:

    -   All `Math` methods begin with `Math.` (capital `M` required).
    -   These methods do not modify the original number unless assigned back to the variable.
    -   Applicable to both variables and literal numbers.
    -   Numbers are not constrained to the 0--5 range in these examples; additional logic would be needed to enforce this for star ratings.

Observations
------------

-   **Errors in Original Code**:
    -   `Math.roundathe scoreAvg` contains a typo; it should be `Math.round(scoreAvg)`.
    -   The rounding behavior for negative numbers is incorrectly described for `Math.round`: it rounds -1.5 to -1 (not -2 as implied).
-   **Improvements**:
    -   For star ratings, ensure the rounded result is clamped to 0--5 using `Math.max(0, Math.min(5, Math.round(scoreAvg)))`.
    -   The document could clarify that `Math.round(-1.5)` rounds to -1 due to JavaScript's "round half away from zero" behavior.
-   **Edge Cases**:
    -   The code does not handle non-numeric inputs or `NaN`, which would return `NaN` with `Math.round`, `Math.ceil`, or `Math.floor`.
    -   Ensure `scoreAvg` is a valid number before rounding to avoid errors in a production environment.