Summary of JavaScript Reading and Setting Paragraph Text
========================================================

This document explains how to read and set HTML element content using JavaScript's `innerHTML` property:

1.  **Purpose**: JavaScript can read or modify an element's HTML content (e.g., paragraphs, divs) using `document.getElementById(elementId).innerHTML`.
2.  **Setting Content Example**: The `placeAList` function creates an ordered list string (`<ol><li>Slow Loris</li><li>Fast Loris</li><li>Last-right Loris</li></ol>`) and sets it as the content of a div with ID `lorisList` using `document.getElementById("lorisList").innerHTML`.
3.  **Reading Content Example**: The `peekAtContent` function retrieves the HTML content of an element with ID `content` (e.g., `<em>Hello, Sailor!</em>`) and stores it in a variable using `document.getElementById("content").innerHTML`.
4.  **Key Mechanism**: The `innerHTML` property enables both reading and writing of HTML content within elements for dynamic updates or retrieval.
5.  **Context**: Inline event handling is used for simplicity, with advanced methods to be covered later.