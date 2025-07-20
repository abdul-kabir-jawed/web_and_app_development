JavaScript Date and Time Notes
==============================

Overview
--------

-   Retrieve and manipulate current date and time using the `Date` object.

Key Concepts
------------

-   **Current Date and Time**:
    -   Create: `var rightNow = new Date();`.
    -   Contains: day of week, month, date, year, hours (24-hour), minutes, seconds, GMT offset, time zone.
    -   Depends on user's computer settings (e.g., incorrect if time zone not updated).
-   **Not a String**:
    -   `Date` object isn't a string; can't use string methods (`charAt`, `indexOf`, `slice`).
    -   Convert to string: `var dateString = rightNow.toString();`.
-   **Extracting Day of Week**:
    -   Use `getDay()`: Returns day as number (0 = Sunday, 6 = Saturday).
        -   Example: `var theDay = rightNow.getDay();`.
    -   Convert to name using array:

        ```
        var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var now = new Date();
        var theDay = now.getDay();
        var nameOfToday = dayNames[theDay];

        ```
