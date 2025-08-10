JavaScript Regex Validation - Complete Guide
============================================

What is Regex?
--------------

**Regular Expressions (Regex)** are patterns used to match character combinations in strings. They're powerful tools for:

-   **Validating** user input (emails, phone numbers, passwords)
-   **Searching** for specific patterns in text
-   **Replacing** or extracting parts of strings

Basic Syntax
------------

### Creating Regex in JavaScript

```
// Method 1: Literal notation (most common)
const regex = /pattern/flags;

// Method 2: Constructor function
const regex = new RegExp('pattern', 'flags');

// Example:
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = new RegExp('^\\d{3}-\\d{3}-\\d{4}$');

```

### Common Flags

| Flag | Description | Example |
| --- | --- | --- |
| `g` | Global (find all matches) | `/cat/g` |
| `i` | Case insensitive | `/cat/i` |
| `m` | Multiline | `/^cat/m` |

Basic Regex Patterns
--------------------

### Character Classes

| Pattern | Matches | Example |
| --- | --- | --- |
| `.` | Any character except newline | `/c.t/` matches "cat", "cut", "c@t" |
| `\d` | Any digit (0-9) | `/\d+/` matches "123" |
| `\D` | Any non-digit | `/\D+/` matches "abc" |
| `\w` | Word character (a-z, A-Z, 0-9, _) | `/\w+/` matches "hello_123" |
| `\W` | Non-word character | `/\W+/` matches "@#$" |
| `\s` | Whitespace (space, tab, newline) | `/\s+/` matches " " |
| `\S` | Non-whitespace | `/\S+/` matches "hello" |

### Quantifiers

| Pattern | Matches | Example |
| --- | --- | --- |
| `*` | 0 or more | `/ca*t/` matches "ct", "cat", "caat" |
| `+` | 1 or more | `/ca+t/` matches "cat", "caat" |
| `?` | 0 or 1 | `/ca?t/` matches "ct", "cat" |
| `{n}` | Exactly n times | `/\d{3}/` matches "123" |
| `{n,}` | n or more times | `/\d{3,}/` matches "123", "1234" |
| `{n,m}` | Between n and m times | `/\d{3,5}/` matches "123", "1234", "12345" |

### Anchors and Boundaries

| Pattern | Matches | Example |
| --- | --- | --- |
| `^` | Start of string | `/^hello/` matches "hello world" |
| `$` | End of string | `/world$/` matches "hello world" |
| `\b` | Word boundary | `/\bcat\b/` matches "cat" in "the cat runs" |

Validation Methods in JavaScript
--------------------------------

### 1\. test() Method

Returns `true` if pattern matches, `false` otherwise:

```
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailRegex.test("user@example.com")); // true
console.log(emailRegex.test("invalid-email"));    // false

```

### 2\. match() Method

Returns array of matches or `null`:

```
const text = "Call me at 123-456-7890";
const phoneRegex = /\d{3}-\d{3}-\d{4}/;

console.log(text.match(phoneRegex)); // ["123-456-7890"]

```

### 3\. exec() Method

Returns detailed match information:

```
const regex = /(\d{3})-(\d{3})-(\d{4})/;
const phone = "123-456-7890";
const result = regex.exec(phone);

console.log(result[0]); // "123-456-7890" (full match)
console.log(result[1]); // "123" (first group)
console.log(result[2]); // "456" (second group)
console.log(result[3]); // "7890" (third group)

```

Common Validation Patterns
--------------------------

### 1\. Email Validation

```
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Test
console.log(validateEmail("user@example.com"));     // true
console.log(validateEmail("invalid.email"));       // false
console.log(validateEmail("user@domain.co.uk"));   // true

```

### 2\. Phone Number Validation

```
function validatePhone(phone) {
    // Matches: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
    const phoneRegex = /^(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    return phoneRegex.test(phone);
}

// Test
console.log(validatePhone("(123) 456-7890"));  // true
console.log(validatePhone("123-456-7890"));    // true
console.log(validatePhone("1234567890"));      // true
console.log(validatePhone("12345"));           // false

```

### 3\. Password Validation

```
function validatePassword(password) {
    // At least 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Test
console.log(validatePassword("Password123!"));  // true
console.log(validatePassword("password"));      // false
console.log(validatePassword("PASSWORD123"));   // false

```

### 4\. Credit Card Validation

```
function validateCreditCard(cardNumber) {
    // Remove spaces and dashes
    const cleaned = cardNumber.replace(/[\s-]/g, '');

    // Check if it's 13-19 digits
    const cardRegex = /^\d{13,19}$/;
    return cardRegex.test(cleaned);
}

// Test
console.log(validateCreditCard("4532 1234 5678 9012"));  // true
console.log(validateCreditCard("4532-1234-5678-9012"));  // true
console.log(validateCreditCard("123"));                  // false

```

### 5\. URL Validation

```
function validateURL(url) {
    const urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    return urlRegex.test(url);
}

// Test
console.log(validateURL("https://www.example.com"));     // true
console.log(validateURL("http://example.com/path"));     // true
console.log(validateURL("not-a-url"));                   // false

```

### 6\. Username Validation

```
function validateUsername(username) {
    // 3-16 chars, letters, numbers, underscores, hyphens
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    return usernameRegex.test(username);
}

// Test
console.log(validateUsername("user_123"));     // true
console.log(validateUsername("user-name"));    // true
console.log(validateUsername("ab"));           // false (too short)
console.log(validateUsername("user@name"));    // false (invalid char)

```

Advanced Patterns
-----------------

### Lookahead and Lookbehind

```
// Positive lookahead (?=...)
// Password must contain at least one digit
const hasDigit = /(?=.*\d)/;

// Negative lookahead (?!...)
// Username cannot start with a number
const noStartDigit = /^(?!\d)/;

// Combined example: Password validation
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

```

### Groups and Capturing

```
// Capturing groups ()
const dateRegex = /(\d{2})\/(\d{2})\/(\d{4})/;
const date = "12/25/2023";
const match = date.match(dateRegex);

console.log(match[1]); // "12" (month)
console.log(match[2]); // "25" (day)
console.log(match[3]); // "2023" (year)

// Non-capturing groups (?:...)
const colorRegex = /(?:rgb|hsl)\(\d+,\s*\d+,\s*\d+\)/;

```

Practical Form Validation Example
---------------------------------

```
class FormValidator {
    static patterns = {
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phone: /^(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        name: /^[a-zA-Z\s]{2,50}$/,
        zipCode: /^\d{5}(-\d{4})?$/
    };

    static validate(field, value) {
        const pattern = this.patterns[field];
        if (!pattern) {
            throw new Error(`No validation pattern for field: ${field}`);
        }
        return pattern.test(value);
    }

    static getErrorMessage(field) {
        const messages = {
            email: "Please enter a valid email address",
            phone: "Please enter a valid phone number",
            password: "Password must be at least 8 characters with uppercase, lowercase, number, and special character",
            name: "Name must be 2-50 characters and contain only letters and spaces",
            zipCode: "Please enter a valid ZIP code (12345 or 12345-6789)"
        };
        return messages[field] || "Invalid input";
    }
}

// Usage
function validateForm(formData) {
    const errors = {};

    for (const [field, value] of Object.entries(formData)) {
        if (!FormValidator.validate(field, value)) {
            errors[field] = FormValidator.getErrorMessage(field);
        }
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

// Example usage
const formData = {
    email: "user@example.com",
    phone: "123-456-7890",
    password: "Password123!",
    name: "John Doe",
    zipCode: "12345"
};

const validation = validateForm(formData);
console.log(validation.isValid); // true
console.log(validation.errors);  // {}

```

Best Practices
--------------

### 1\. Keep It Simple

```
// Good: Clear and readable
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Avoid: Overly complex patterns
const complexEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

```

### 2\. Test Your Patterns

```
function testPattern(pattern, testCases) {
    testCases.forEach(({ input, expected }) => {
        const result = pattern.test(input);
        console.log(`${input}: ${result === expected ? '✅' : '❌'} (expected ${expected})`);
    });
}

// Test email pattern
testPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, [
    { input: "user@example.com", expected: true },
    { input: "invalid-email", expected: false },
    { input: "user@domain.co.uk", expected: true }
]);

```

### 3\. Provide Clear Error Messages

```
function validateWithMessages(value, pattern, errorMessage) {
    return {
        isValid: pattern.test(value),
        error: pattern.test(value) ? null : errorMessage
    };
}

```

Common Mistakes to Avoid
------------------------

### 1\. Not Escaping Special Characters

```
// Wrong: . matches any character
const badRegex = /user.example.com/;

// Right: \. matches literal dot
const goodRegex = /user\.example\.com/;

```

### 2\. Forgetting Anchors

```
// Wrong: Matches anywhere in string
const badEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/;
console.log(badEmail.test("invalid email@example.com text")); // true (wrong!)

// Right: Must match entire string
const goodEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(goodEmail.test("invalid email@example.com text")); // false (correct!)

```

### 3\. Not Handling Edge Cases

```
function validateEmail(email) {
    // Handle null, undefined, empty string
    if (!email || typeof email !== 'string') {
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim()); // Trim whitespace
}

```

Quick Reference Cheat Sheet
---------------------------

### Common Patterns

-   **Email**: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
-   **Phone**: `/^\d{3}-\d{3}-\d{4}$/`
-   **Password**: `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/`
-   **Numbers only**: `/^\d+$/`
-   **Letters only**: `/^[a-zA-Z]+$/`
-   **Alphanumeric**: `/^[a-zA-Z0-9]+$/`

### Testing Methods

-   `regex.test(string)` → boolean
-   `string.match(regex)` → array or null
-   `regex.exec(string)` → array or null

### Flags

-   `g` → global, `i` → case insensitive, `m` → multiline

Remember: Regex is powerful but can be complex. Start simple and build up complexity as needed!
