Summary of JavaScript Image Swapping
====================================

This document explains how to swap images in JavaScript using inline event handling, extending Chapter 47:

1.  **Basic Image Swap**: An inline handler swaps a "before" image with an "after" image on mouseover (e.g., `<img src="before-pic.jpg" onMouseover="src='after-pic.jpg'">`).
2.  **Function-Based Swap**: A cleaner approach uses the `swapPic` function with `<img src="before-pic.jpg" id="before" onMouseover="swapPic()">`, setting the source via `document.getElementById("before").src = "after-pic.jpg"`.
3.  **General-Purpose Function**: A flexible `swapPic(id, newPic)` function swaps any image, using `<img src="before-pic.jpg" id="before" onMouseover="swapPic('before', 'after-pic.jpg')">` and `document.getElementById(id).src = newPic`.
4.  **Advantages**: The general-purpose function is reusable, accepting element ID and new image source as arguments.
5.  **Context**: Inline event handling is used for simplicity, with professional methods to be covered later.