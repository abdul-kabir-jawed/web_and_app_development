Summary of JavaScript Setting Field Values
==========================================

This document explains how to set form field values in JavaScript using an inline event handler to auto-fill a city field based on a ZIP code:

1.  **Scenario**: A function auto-fills a city field when a user enters one of three valid ZIP codes and clicks out, omitting error checking and state fields for simplicity.
2.  **Form Markup**: Includes a ZIP input (`<input type="text" id="zip" onBlur="fillCity()">`) and a city input (`<input type="text" id="city">`). The `onBlur` event triggers `fillCity` when the ZIP field loses focus.
3.  **Function Logic**: The `fillCity` function:
    -   Reads the ZIP code with `document.getElementById("zip").value`, stored in `zipEntered`.
    -   Uses a `switch` statement to map ZIP codes (`60608`, `68114`, `53212`) to cities (`Chicago`, `Omaha`, `Milwaukee`), stored in `cityName`.
    -   Sets the city field with `document.getElementById("city").value = cityName`.
4.  **Reading and Writing Values**: `document.getElementById().value` is used to both read and write field values.
5.  **Limitations**: Inline `onBlur` is used for simplicity, error checking is skipped, and only the city is filled. Professional event-handling methods will be covered later.