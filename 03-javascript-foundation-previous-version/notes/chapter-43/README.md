Summary of JavaScript File Placement
====================================

This document explains how to structure and include JavaScript code in web development:

1.  **JavaScript File Structure**: A JavaScript file is a plain text file containing only JavaScript code, without headers or `<script>` tags. It uses the `.js` extension, with flexible filenames like `scripts.js` or `coreJs.js`.
2.  **Example Content**: A sample JavaScript file includes two functions, `sayHi()` and `sayBye()`, each displaying an alert with a message.
3.  **Including JavaScript in HTML**: External JavaScript files are linked in HTML using the `<script>` tag with a `src` attribute (e.g., `<script src="whatever.js"></script>`), similar to CSS file inclusion.
4.  **Placement Best Practice**: Place `<script>` tags at the end of the HTML `<body>` section to ensure the page loads before scripts run.
5.  **Flexibility**: Multiple JavaScript files can be included, and inline JavaScript code can be used alongside external file references.