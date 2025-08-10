JavaScript Try-Catch Notes
==========================

Overview
--------

Try-catch statements allow you to handle errors gracefully in JavaScript, preventing your application from crashing and providing better user experience.

Basic Syntax
------------

### Try-Catch Structure

```
try {
    // Code that might throw an error
    let result = riskyOperation();
} catch (error) {
    // Handle the error
    console.log('An error occurred:', error.message);
}

```

### Try-Catch-Finally

```
try {
    // Risky code
    performOperation();
} catch (error) {
    // Handle error
    console.error('Error:', error.message);
} finally {
    // Always executes (cleanup code)
    console.log('Cleanup operations');
}

```

Types of Errors
---------------

### Built-in Error Types

```
try {
    // ReferenceError
    console.log(undefinedVariable);
} catch (error) {
    console.log(error.name); // "ReferenceError"
    console.log(error.message); // "undefinedVariable is not defined"
}

try {
    // TypeError
    null.someMethod();
} catch (error) {
    console.log(error.name); // "TypeError"
    console.log(error.message); // "Cannot read property 'someMethod' of null"
}

try {
    // SyntaxError (rarely caught at runtime)
    eval('function test() { var x = ; }');
} catch (error) {
    console.log(error.name); // "SyntaxError"
}

try {
    // RangeError
    const arr = new Array(-1);
} catch (error) {
    console.log(error.name); // "RangeError"
    console.log(error.message); // "Invalid array length"
}

```

Throwing Custom Errors
----------------------

### Basic Throw

```
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

try {
    let result = divide(10, 0);
} catch (error) {
    console.log(error.message); // "Division by zero is not allowed"
}

```

### Throwing Different Error Types

```
function validateAge(age) {
    if (typeof age !== 'number') {
        throw new TypeError('Age must be a number');
    }
    if (age < 0) {
        throw new RangeError('Age cannot be negative');
    }
    if (age > 150) {
        throw new RangeError('Age seems unrealistic');
    }
    return true;
}

try {
    validateAge('25'); // TypeError
} catch (error) {
    if (error instanceof TypeError) {
        console.log('Type error:', error.message);
    } else if (error instanceof RangeError) {
        console.log('Range error:', error.message);
    }
}

```

### Custom Error Classes

```
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'NetworkError';
        this.statusCode = statusCode;
    }
}

function validateUserData(userData) {
    if (!userData.email) {
        throw new ValidationError('Email is required', 'email');
    }
    if (!userData.name) {
        throw new ValidationError('Name is required', 'name');
    }
}

try {
    validateUserData({ name: 'John' }); // Missing email
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Validation failed for ${error.field}: ${error.message}`);
    }
}

```

Error Handling Patterns
-----------------------

### Multiple Catch Blocks (Error Type Handling)

```
function handleDifferentErrors() {
    try {
        // Some risky operation
        riskyFunction();
    } catch (error) {
        if (error instanceof ValidationError) {
            // Handle validation errors
            showValidationMessage(error.message);
        } else if (error instanceof NetworkError) {
            // Handle network errors
            showNetworkErrorDialog(error.statusCode);
        } else if (error instanceof TypeError) {
            // Handle type errors
            console.error('Type error occurred:', error.message);
        } else {
            // Handle unknown errors
            console.error('Unexpected error:', error);
            showGenericErrorMessage();
        }
    }
}

```

### Nested Try-Catch

```
function complexOperation() {
    try {
        // Outer operation
        let data = fetchData();

        try {
            // Inner operation that might fail
            let processed = processData(data);
            return processed;
        } catch (processingError) {
            console.log('Processing failed, using default:', processingError.message);
            return getDefaultData();
        }

    } catch (fetchError) {
        console.log('Failed to fetch data:', fetchError.message);
        throw new Error('Cannot complete operation');
    }
}

```

### Try-Catch in Loops

```
function processItems(items) {
    const results = [];
    const errors = [];

    for (let item of items) {
        try {
            const result = processItem(item);
            results.push(result);
        } catch (error) {
            console.error(`Failed to process item ${item.id}:`, error.message);
            errors.push({ item: item.id, error: error.message });
            // Continue processing other items
        }
    }

    return { results, errors };
}

// Alternative: Using forEach with error collection
function processItemsForEach(items) {
    const results = [];
    const errors = [];

    items.forEach(item => {
        try {
            results.push(processItem(item));
        } catch (error) {
            errors.push({ item: item.id, error: error.message });
        }
    });

    return { results, errors };
}

```

Async Error Handling
--------------------

### Promise-based Error Handling

```
// Using .catch()
function fetchUserData(userId) {
    return fetch(`/api/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return processUserData(data);
        })
        .catch(error => {
            console.error('Failed to fetch user data:', error.message);
            throw error; // Re-throw if needed
        });
}

// Using try-catch with async/await
async function fetchUserDataAsync(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return processUserData(data);

    } catch (error) {
        console.error('Failed to fetch user data:', error.message);
        throw error;
    }
}

```

### Multiple Async Operations

```
async function handleMultipleOperations() {
    try {
        // Sequential operations
        const user = await fetchUser();
        const profile = await fetchProfile(user.id);
        const settings = await fetchSettings(user.id);

        return { user, profile, settings };

    } catch (error) {
        console.error('Failed to load user data:', error.message);
        return getDefaultUserData();
    }
}

// Parallel operations with error handling
async function handleParallelOperations(userId) {
    try {
        const [user, profile, settings] = await Promise.all([
            fetchUser(userId),
            fetchProfile(userId),
            fetchSettings(userId)
        ]);

        return { user, profile, settings };

    } catch (error) {
        console.error('One or more operations failed:', error.message);

        // Handle partial failures
        try {
            const user = await fetchUser(userId);
            return {
                user,
                profile: getDefaultProfile(),
                settings: getDefaultSettings()
            };
        } catch (userError) {
            throw new Error('Critical: Cannot load user data');
        }
    }
}

```

Advanced Error Handling
-----------------------

### Global Error Handlers

```
// Global error handler for unhandled errors
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // Log to error service
    logErrorToService({
        message: event.error.message,
        stack: event.error.stack,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
    });
});

// Global handler for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // Log to error service
    logErrorToService({
        type: 'unhandled_promise_rejection',
        reason: event.reason
    });

    // Prevent the default browser behavior
    event.preventDefault();
});

```

### Error Boundary Pattern (React-like concept)

```
class ErrorHandler {
    constructor() {
        this.errorCallbacks = [];
    }

    addErrorCallback(callback) {
        this.errorCallbacks.push(callback);
    }

    handleError(error, context = {}) {
        console.error('Error occurred:', error.message);

        this.errorCallbacks.forEach(callback => {
            try {
                callback(error, context);
            } catch (callbackError) {
                console.error('Error in error callback:', callbackError);
            }
        });
    }

    wrapFunction(fn, context = {}) {
        return (...args) => {
            try {
                const result = fn.apply(this, args);

                // Handle async functions
                if (result && typeof result.catch === 'function') {
                    return result.catch(error => {
                        this.handleError(error, context);
                        throw error;
                    });
                }

                return result;
            } catch (error) {
                this.handleError(error, context);
                throw error;
            }
        };
    }
}

// Usage
const errorHandler = new ErrorHandler();
errorHandler.addErrorCallback((error, context) => {
    // Send to logging service
    logToService(error, context);
});

const safeFunction = errorHandler.wrapFunction(riskyFunction, {
    component: 'UserProfile'
});

```

### Retry Pattern with Error Handling

```
async function retryWithBackoff(fn, maxRetries = 3, baseDelay = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === maxRetries) {
                throw new Error(`Failed after ${maxRetries} attempts: ${error.message}`);
            }

            const delay = baseDelay * Math.pow(2, attempt - 1); // Exponential backoff
            console.log(`Attempt ${attempt} failed, retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

// Usage
async function fetchDataWithRetry() {
    try {
        const data = await retryWithBackoff(
            () => fetch('/api/data').then(r => r.json()),
            3,
            1000
        );
        return data;
    } catch (error) {
        console.error('All retry attempts failed:', error.message);
        return getDefaultData();
    }
}

```

Error Logging and Reporting
---------------------------

### Comprehensive Error Logger

```
class ErrorLogger {
    constructor(options = {}) {
        this.endpoint = options.endpoint || '/api/errors';
        this.enabled = options.enabled !== false;
        this.maxErrors = options.maxErrors || 10;
        this.errorQueue = [];
    }

    log(error, context = {}) {
        if (!this.enabled) return;

        const errorInfo = {
            timestamp: new Date().toISOString(),
            message: error.message,
            stack: error.stack,
            name: error.name,
            context: context,
            userAgent: navigator.userAgent,
            url: window.location.href,
            userId: this.getCurrentUserId()
        };

        this.errorQueue.push(errorInfo);

        if (this.errorQueue.length >= this.maxErrors) {
            this.flush();
        }
    }

    async flush() {
        if (this.errorQueue.length === 0) return;

        try {
            await fetch(this.endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ errors: this.errorQueue })
            });

            this.errorQueue = [];
        } catch (sendError) {
            console.error('Failed to send error logs:', sendError);
        }
    }

    getCurrentUserId() {
        // Implementation depends on your auth system
        return localStorage.getItem('userId') || 'anonymous';
    }
}

const errorLogger = new ErrorLogger({ endpoint: '/api/errors' });

```

Practical Examples
------------------

### Form Validation with Error Handling

```
class FormValidator {
    constructor(form) {
        this.form = form;
        this.errors = {};
    }

    validate() {
        this.errors = {};

        try {
            this.validateRequired();
            this.validateEmail();
            this.validatePassword();

            return Object.keys(this.errors).length === 0;
        } catch (error) {
            console.error('Validation error:', error);
            this.errors.general = 'Validation failed';
            return false;
        }
    }

    validateRequired() {
        const requiredFields = ['name', 'email', 'password'];

        requiredFields.forEach(field => {
            try {
                const value = this.form[field]?.value;
                if (!value || value.trim() === '') {
                    throw new ValidationError(`${field} is required`, field);
                }
            } catch (error) {
                if (error instanceof ValidationError) {
                    this.errors[error.field] = error.message;
                } else {
                    throw error; // Re-throw unexpected errors
                }
            }
        });
    }

    validateEmail() {
        try {
            const email = this.form.email?.value;
            if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                throw new ValidationError('Invalid email format', 'email');
            }
        } catch (error) {
            if (error instanceof ValidationError) {
                this.errors[error.field] = error.message;
            } else {
                throw error;
            }
        }
    }

    validatePassword() {
        try {
            const password = this.form.password?.value;
            if (password && password.length < 8) {
                throw new ValidationError('Password must be at least 8 characters', 'password');
            }
        } catch (error) {
            if (error instanceof ValidationError) {
                this.errors[error.field] = error.message;
            } else {
                throw error;
            }
        }
    }

    getErrors() {
        return this.errors;
    }
}

```

### API Client with Error Handling

```
class ApiClient {
    constructor(baseURL, options = {}) {
        this.baseURL = baseURL;
        this.timeout = options.timeout || 10000;
        this.retries = options.retries || 3;
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            timeout: this.timeout,
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        };

        try {
            return await this.makeRequest(url, config);
        } catch (error) {
            this.handleError(error, endpoint);
            throw error;
        }
    }

    async makeRequest(url, config) {
        for (let attempt = 1; attempt <= this.retries; attempt++) {
            try {
                const response = await fetch(url, config);

                if (!response.ok) {
                    throw new NetworkError(
                        `HTTP ${response.status}: ${response.statusText}`,
                        response.status
                    );
                }

                const data = await response.json();
                return data;

            } catch (error) {
                if (attempt === this.retries) {
                    throw error;
                }

                if (this.shouldRetry(error)) {
                    const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
                    await this.delay(delay);
                    continue;
                } else {
                    throw error;
                }
            }
        }
    }

    shouldRetry(error) {
        // Retry on network errors or 5xx status codes
        return error instanceof NetworkError && error.statusCode >= 500;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    handleError(error, endpoint) {
        console.error(`API request failed for ${endpoint}:`, error.message);

        // Log to error service
        errorLogger.log(error, {
            type: 'api_request',
            endpoint: endpoint
        });
    }
}

```

Best Practices
--------------

1.  **Be Specific with Error Types** - Use custom error classes for different scenarios
2.  **Don't Catch Everything** - Only catch errors you can handle meaningfully
3.  **Log Errors Properly** - Include context and stack traces
4.  **Fail Fast** - Throw errors early when invalid conditions are detected
5.  **Clean Up Resources** - Use finally blocks for cleanup operations
6.  **Handle Async Errors** - Always handle promise rejections
7.  **Provide User-Friendly Messages** - Don't expose technical details to users
8.  **Test Error Paths** - Write tests for error scenarios

Common Pitfalls
---------------

1.  **Empty Catch Blocks** - Never silently ignore errors

```
// Bad
try {
    riskyOperation();
} catch (error) {
    // Silent failure - very bad!
}

// Good
try {
    riskyOperation();
} catch (error) {
    console.error('Operation failed:', error.message);
    // Handle appropriately
}

```

1.  **Not Re-throwing When Necessary**

```
// Bad - error information is lost
try {
    await apiCall();
} catch (error) {
    showErrorMessage('Something went wrong');
    // Error is swallowed, caller can't handle it
}

// Good - preserve error for caller
try {
    await apiCall();
} catch (error) {
    showErrorMessage('Something went wrong');
    throw error; // Let caller decide how to handle
}

```

1.  **Catching Non-Errors**

```
try {
    someFunction();
} catch (error) {
    // Assuming error is always an Error object
    console.log(error.message); // Could fail if error is not an Error
}

// Better
try {
    someFunction();
} catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.log(message);
}

```

Summary
-------

-   **Try-catch blocks handle errors gracefully** and prevent crashes
-   **Use specific error types** and custom error classes for better error handling
-   **Finally blocks always execute** and are perfect for cleanup
-   **Handle async errors** with try-catch in async functions or .catch() with promises
-   **Log errors with context** for better debugging
-   **Don't catch errors you can't handle** meaningfully
-   **Always consider the user experience** when handling errors
