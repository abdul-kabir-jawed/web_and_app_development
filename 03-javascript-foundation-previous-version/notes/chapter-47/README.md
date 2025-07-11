-   Summary of JavaScript Mouse Event Handling

This document covers inline event handling for mouse-related events in JavaScript, focusing on `onMouseover` and `onMouseout`:

1.  **Mouse Events**: JavaScript handles mouse actions like hovering (`onMouseover`) and moving away (`onMouseout`), alongside clicks (`onclick`). Inline event handling is used for simplicity, with professional scripting methods to be covered later.
2.  **Image Swap Example**: An image tag (`<img src="before-pic.jpg" onMouseover="src='after-pic.jpg'" onMouseout="src='before-pic.jpg'">`) swaps the image source on hover and reverts when the mouse leaves, using HTML attribute syntax with single quotes to avoid nesting issues.
3.  **Other Elements**: `onMouseover` can trigger actions on elements like headings (`<h1 onMouseover="alert('Hello')">`) or paragraphs (`<p onMouseover="expand();">`) for alerts or functions.
4.  **Styling Example**: A link can change color on hover (e.g., `onMouseover="this.style.color='green'"`), though CSS is preferred for styling.
5.  **Best Practice**: Calling functions (e.g., `onMouseover="expand();"`) is cleaner than inline code. Details of functions like `expand()` or `this.style.color` are deferred to later.