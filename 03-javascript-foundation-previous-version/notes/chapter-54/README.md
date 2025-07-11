Summary of JavaScript Image and Class Manipulation
==================================================

This document explains manipulating HTML element properties using `document.getElementById`, focusing on image swapping and class setting:

1.  **Image Swapping**:
    -   The `swapPic` function changes an image's source (e.g., `<img id="before" src="before-pic.jpg">` to `after-pic.jpg`) with `document.getElementById("before").src = "after-pic.jpg"`.
    -   The verbose approach uses a variable (e.g., `var pic = document.getElementById("before"); pic.src = "after-pic.jpg";`) for clarity.
2.  **Reading Link Properties**:
    -   The `getAddress` function retrieves a link's `href` (e.g., `<a id="link1" href="http://wikipedia.org">`) using `var link = document.getElementById("link1"); var address = link.href;`.
3.  **Setting Classes**:
    -   The `enlargeForm` function sets a form's class (e.g., `<form id="f12">`) to `jumbo` using `var frm = document.getElementById("f12"); frm.className = "jumbo";`, altering formatting.
4.  **Verbose Approach**: Assigning `document.getElementById` to a variable before manipulating `src`, `href`, or `className` improves readability.
5.  **Note**: The `enlargeForm` example incorrectly uses `id="link1"` instead of `id="f12"`. Inline event handling is implied, with professional methods to be covered later.