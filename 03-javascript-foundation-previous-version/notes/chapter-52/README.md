Summary of JavaScript Image and Text Manipulation
===========================================

This document explains how to manipulate images and text in JavaScript using inline event handling:

-   **Hiding an Image**:

    -   An image (<img src="blobfish.jpg" id="ugly" onclick="makeInvisible()">) triggers the makeInvisible function on click.

    -   A CSS class .hidden { display: none; } hides elements.

    -   The function uses document.getElementById("ugly").className = "hidden" to hide the image.

-   **Class Manipulation**:

    -   The className property (camelCase) assigns a class, replacing existing ones.

    -   To add a class (e.g., big for 2em font size) to a paragraph with ID p1 while preserving its Verdana styling, a careful approach is needed (not fully detailed).

-   **Example Context**: A paragraph styled in Verdana at 1em can gain a big class on mouseover to increase font size without losing existing styles.

-   **Relation to Previous Concepts**: document.getElementById().className is similar to .value (form fields) and .innerHTML (text content).

-   **Limitations**: Inline event handling is used for simplicity, but professional methods are noted for later. Assigning className overwrites existing classes unless handled carefully.