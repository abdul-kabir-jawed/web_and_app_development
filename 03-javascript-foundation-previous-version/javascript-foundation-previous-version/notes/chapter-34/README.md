JavaScript Changing Date Elements Notes
=======================================

Overview
--------

-   Modify specific parts of a `Date` object using `set` methods without affecting other components.

Methods and Details
-------------------

-   **Methods**:
    -   `setFullYear(year)`: Sets the year (e.g., `d.setFullYear(2006);` → year is 2006).
    -   `setMonth(month)`: Sets the month (0--11, e.g., `d.setMonth(6);` → July).
    -   `setDate(day)`: Sets the day of the month (1--31, e.g., `d.setDate(15);` → 15th).
    -   `setHours(hour)`: Sets the hour (0--23, e.g., `d.setHours(13);` → 1 p.m.).
    -   `setMinutes(minute)`: Sets the minute (0--59, e.g., `d.setMinutes(5);` → 5 minutes past).
    -   `setSeconds(second)`: Sets the second (0--59, e.g., `d.setSeconds(55);` → 55 seconds past).
    -   `setMilliseconds(ms)`: Sets the millisecond (0--999, e.g., `d.setMilliseconds(867);` → 867 ms past).

Example Usage
-------------

```
var d = new Date();
d.setFullYear(2001); // Year to 2001
d.setMonth(11); // Month to December
d.setDate(15); // Day to 15th
d.setHours(13); // Hour to 1 p.m.
d.setMinutes(5); // Minutes to 5
d.setSeconds(55); // Seconds to 55
d.setMilliseconds(867); // Milliseconds to 867

```