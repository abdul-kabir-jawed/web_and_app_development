JavaScript Date Extraction Notes
================================

Overview
--------

-   Extract specific parts of a `Date` object using built-in methods.
-   All methods return numbers, not strings (e.g., month as `0-11`, not "January").

Methods and Details
-------------------

-   **Methods**:
    -   `getDay()`: Day of week (0 = Sunday, 6 = Saturday).
    -   `getMonth()`: Month (0 = January, 11 = December).
    -   `getDate()`: Day of month (1--31).
    -   `getFullYear()`: 4-digit year (e.g., 2015).
    -   `getHours()`: Hour (0--23, 0 = midnight, 12 = noon, 23 = 11 p.m.).
    -   `getMinutes()`: Minutes (0--59).
    -   `getSeconds()`: Seconds (0--59).
    -   `getMilliseconds()`: Milliseconds (0--999).
    -   `getTime()`: Milliseconds since midnight, Jan. 1, 1970.

Example Usage
-------------

```
var d = new Date();
var currentMonth = d.getMonth(); // e.g., 5 for June
var dayOfMonth = d.getDate(); // e.g., 27
var currYr = d.getFullYear(); // e.g., 2025
var currentHrs = d.getHours(); // e.g., 14 for 2 p.m.
var currMins = d.getMinutes(); // e.g., 29
var currSecs = d.getSeconds(); // e.g., 45
var currMills = d.getMilliseconds(); // e.g., 123
var millsSince = d.getTime(); // e.g., 1753616985123

```
