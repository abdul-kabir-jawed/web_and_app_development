Notes on Changing Case in JavaScript
====================================

Overview
--------

This document explains how to handle case sensitivity in JavaScript when comparing user input against a predefined list, using the example of checking a user-entered city against a list of the cleanest cities.

Key Points
----------

1.  **Case Sensitivity Issue**:

    -   JavaScript is case-sensitive, so "Cheyenne" and "cheyenne" are treated as different strings.
    -   Users may enter city names in various cases (e.g., "cheyenne", "Cheyenne", "sAnta Fe"), causing mismatches with the predefined list.
2.  **Inefficient Solution**:

    -   One approach is to include all possible case variations in the array (e.g., `["Cheyenne", "cheyenne", "Santa Fe", "santa fe"]`).
    -   This is impractical due to the large number of possible combinations and increased code complexity.
3.  **Efficient Solution**:

    -   Convert the user's input to a consistent case (lowercase or uppercase) and compare it against a list in the same case.
    -   Preferred method: Convert both the user input and the array elements to lowercase for consistency.
4.  **Implementation**:

    -   Use the `toLowerCase()` method to convert the user's input to lowercase.
    -   Example code:

        ```
        var cityToCheck = prompt("Enter your city");
        cityToCheck = cityToCheck.toLowerCase();
        var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
        for (var i = 0; i < cleanestCities.length; i++) {
            if (cityToCheck === cleanestCities[i]) {
                alert("It's one of the cleanest cities");
            }
        }

        ```

    -   The `toLowerCase()` method converts all characters in the string to lowercase (e.g., "ChEyEnNe" becomes "cheyenne").
    -   Note: The original code contains a typo (`LolowerCase` should be `toLowerCase`).
5.  **Alternative Approach**:

    -   Convert input to uppercase using `toUpperCase()` and compare against an uppercase array (e.g., `["CHEYENNE", "SANTA FE"]`).
    -   Example: `cityToCheck = cityToCheck.toUpperCase();`
    -   Lowercase is more commonly used by developers.
6.  **Key Notes**:

    -   The `toLowerCase()` and `toUpperCase()` methods are written in camelCase.
    -   These methods convert the entire string, not just the first letter.
    -   The converted string must be assigned to a variable (can be the same variable, e.g., `cityToCheck`).

Observations
------------

-   The original code has a typo in `toUperCaseU` (should be `toUpperCase`).
-   The loop condition `i < 4` is incorrect since the array has 5 elements; it should be `i < cleanestCities.length` to avoid missing the last element.
