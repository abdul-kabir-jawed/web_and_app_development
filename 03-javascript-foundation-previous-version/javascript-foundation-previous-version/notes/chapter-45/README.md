Summary of JavaScript Event Handling
====================================

This document introduces inline event handling in JavaScript for creating responsive websites:

1.  **Events and Responsiveness**: User actions like clicking, hovering, switching fields, or selecting options are events. JavaScript event handlers respond to these, enhancing interactivity.
2.  **Inline Event Handling**: JavaScript is embedded in HTML using attributes like `onclick`. For example, `<a href="#" onclick="alert('Hi');">Click</a>` triggers an alert instead of navigation.
3.  **Syntax Details**:
    -   Use `href="#"` to avoid navigation, but it may scroll to the top. Prefer `href="JavaScript:void(0)"` to prevent this.
    -   `onclick` contains JavaScript in double quotes, with string literals in single quotes to avoid nesting issues.
    -   Multiple statements can be used (e.g., `onclick="var greet='hi'; alert(greet);"`) but should be kept minimal.
4.  **Best Practice**: Call a function (e.g., `<a href="JavaScript:void(0)" onclick="popup('Hi')">Click</a>` with a `popup` function) for cleaner code.
5.  **Limitations**: Inline event handling is simple but not ideal for production, similar to inline CSS. Advanced scripting methods are preferred and covered later.