JavaScript Specifying Date and Time Notes
=========================================

Overview
--------

-   Create and manipulate specific dates and times using the `Date` object.

Key Concepts
------------

-   **Specifying a Date**:
    -   Create a `Date` object: `var doomsday = new Date("June 30, 2035");`.
        -   Format: Month spelled out, day, 4-digit year (e.g., `"June 30, 2035"`).
-   **Specifying Date and Time**:
    -   Include time (24-hour): `var d = new Date("July 21, 1983 13:25:00");`.
        -   Format: No comma after date, colons for hours:minutes:seconds.
-   **Calculating Days Between Dates**:
    -   Get milliseconds since Jan 1, 1970: `getTime()`.
    -   Subtract: `var msDiff = doomsday.getTime() - today.getTime();`.
    -   Convert to days: `var days = msDiff / (1000 * 60 * 60 * 24);`.
    -   Round down: `var daysTillDoom = Math.floor(days);`.
-   **Example (Condensed)**:

    ```
    var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
    var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));

    ```