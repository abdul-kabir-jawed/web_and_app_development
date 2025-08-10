JavaScript Fetch API - Complete Guide
=====================================

What is Fetch?
--------------

**Fetch** is a modern JavaScript API for making HTTP requests to servers. It's the modern replacement for `XMLHttpRequest` and provides a cleaner, promise-based way to handle network requests.

### Key Features:

-   **Promise-based** - Works great with async/await
-   **Flexible** - Handles various data types (JSON, text, files, etc.)
-   **Built-in** - No external libraries needed
-   **Modern** - Supported in all modern browsers

Basic Syntax
------------

```
fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

```

### With Async/Await (Recommended):

```
async function fetchData() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

```

Simple GET Request
------------------

### Basic GET Request:

```
// Using promises
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(users => console.log(users))
    .catch(error => console.error('Error:', error));

// Using async/await
async function getUsers() {
    try {
        const response = await fetch('https://api.example.com/users');
        const users = await response.json();
        console.log(users);
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

```

### GET with Query Parameters:

```
async function searchUsers(query) {
    const url = `https://api.example.com/users?search=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Search failed:', error);
        throw error;
    }
}

// Usage
searchUsers('john doe');

```

POST Requests
-------------

### POST with JSON Data:

```
async function createUser(userData) {
    try {
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const newUser = await response.json();
        console.log('User created:', newUser);
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

// Usage
createUser({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
});

```

### POST with Form Data:

```
async function uploadFile(file, additionalData) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', additionalData.title);
    formData.append('description', additionalData.description);

    try {
        const response = await fetch('https://api.example.com/upload', {
            method: 'POST',
            body: formData // Don't set Content-Type header for FormData
        });

        if (!response.ok) {
            throw new Error(`Upload failed: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Upload error:', error);
        throw error;
    }
}

```

PUT and PATCH Requests
----------------------

### PUT (Replace entire resource):

```
async function updateUser(userId, userData) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`Update failed: ${response.status}`);
        }

        const updatedUser = await response.json();
        return updatedUser;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

```

### PATCH (Partial update):

```
async function updateUserPartial(userId, changes) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(changes)
        });

        if (!response.ok) {
            throw new Error(`Patch failed: ${response.status}`);
        }

        const updatedUser = await response.json();
        return updatedUser;
    } catch (error) {
        console.error('Error patching user:', error);
        throw error;
    }
}

// Usage - only update email
updateUserPartial(123, { email: 'newemail@example.com' });

```

DELETE Request
--------------

```
async function deleteUser(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Delete failed: ${response.status}`);
        }

        // Some APIs return 204 (No Content) for successful deletes
        if (response.status === 204) {
            return { success: true, message: 'User deleted successfully' };
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

```

Request Options (Complete List)
-------------------------------

```
const options = {
    method: 'POST',           // GET, POST, PUT, PATCH, DELETE, etc.

    headers: {                // Request headers
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123',
        'Accept': 'application/json',
        'User-Agent': 'MyApp/1.0'
    },

    body: JSON.stringify(data), // Request body (string, FormData, Blob, etc.)

    mode: 'cors',             // cors, no-cors, same-origin
    credentials: 'include',   // omit, same-origin, include
    cache: 'default',         // default, no-store, reload, no-cache, force-cache
    redirect: 'follow',       // manual, follow, error
    referrer: 'no-referrer', // no-referrer, client, or a URL

    signal: abortController.signal, // For request cancellation

    integrity: 'sha256-...',  // Subresource integrity value
    keepalive: false,         // Keep connection alive
    referrerPolicy: 'no-referrer-when-downgrade'
};

```

Response Handling
-----------------

### Understanding Response Object:

```
async function handleResponse() {
    const response = await fetch('https://api.example.com/data');

    // Response properties
    console.log('Status:', response.status);        // 200, 404, 500, etc.
    console.log('Status Text:', response.statusText); // 'OK', 'Not Found', etc.
    console.log('Headers:', response.headers);      // Headers object
    console.log('URL:', response.url);              // Final URL after redirects
    console.log('OK:', response.ok);                // true if status 200-299
    console.log('Redirected:', response.redirected); // true if redirected
    console.log('Type:', response.type);            // 'basic', 'cors', etc.
}

```

### Different Response Types:

```
async function handleDifferentTypes(url) {
    const response = await fetch(url);

    // JSON data
    const jsonData = await response.json();

    // Plain text
    const textData = await response.text();

    // Binary data (images, files)
    const blobData = await response.blob();

    // Form data
    const formData = await response.formData();

    // Array buffer (for binary operations)
    const arrayBuffer = await response.arrayBuffer();
}

```

Error Handling
--------------

### Comprehensive Error Handling:

```
async function robustFetch(url, options = {}) {
    try {
        const response = await fetch(url, options);

        // Fetch doesn't reject on HTTP error status codes (404, 500, etc.)
        if (!response.ok) {
            // Try to get error details from response
            let errorMessage = `HTTP error! status: ${response.status}`;

            try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorMessage;
            } catch {
                // If response isn't JSON, use status text
                errorMessage = `${response.status}: ${response.statusText}`;
            }

            throw new Error(errorMessage);
        }

        return response;
    } catch (error) {
        // Network errors, parsing errors, etc.
        if (error.name === 'TypeError') {
            throw new Error('Network error - please check your internet connection');
        }

        throw error; // Re-throw other errors
    }
}

// Usage
async function getData() {
    try {
        const response = await robustFetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to get data:', error.message);
        // Handle error (show user message, retry, etc.)
        throw error;
    }
}

```

### Specific Error Types:

```
function handleFetchError(error) {
    if (error.name === 'AbortError') {
        console.log('Request was cancelled');
    } else if (error.name === 'TypeError') {
        console.log('Network error or CORS issue');
    } else if (error.message.includes('404')) {
        console.log('Resource not found');
    } else if (error.message.includes('500')) {
        console.log('Server error');
    } else {
        console.log('Unknown error:', error.message);
    }
}

```

Request Cancellation (AbortController)
--------------------------------------

### Basic Cancellation:

```
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();

    // Set timeout
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        }
        throw error;
    }
}

```

### User-Triggered Cancellation:

```
class APIClient {
    constructor() {
        this.currentRequest = null;
    }

    async fetchData(url) {
        // Cancel previous request if still running
        if (this.currentRequest) {
            this.currentRequest.abort();
        }

        this.currentRequest = new AbortController();

        try {
            const response = await fetch(url, {
                signal: this.currentRequest.signal
            });

            const data = await response.json();
            this.currentRequest = null;
            return data;
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Request was cancelled');
                return null;
            }
            throw error;
        }
    }

    cancelCurrentRequest() {
        if (this.currentRequest) {
            this.currentRequest.abort();
            this.currentRequest = null;
        }
    }
}

```

Authentication Examples
-----------------------

### Bearer Token:

```
async function authenticatedRequest(url, token) {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 401) {
            throw new Error('Authentication failed - token may be expired');
        }

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Authenticated request failed:', error);
        throw error;
    }
}

```

### API Key:

```
async function apiKeyRequest(url, apiKey) {
    try {
        const response = await fetch(url, {
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API key request failed:', error);
        throw error;
    }
}

```

### Basic Authentication:

```
async function basicAuthRequest(url, username, password) {
    const credentials = btoa(`${username}:${password}`);

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Basic auth failed: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Basic auth request failed:', error);
        throw error;
    }
}

```

File Upload Examples
--------------------

### Single File Upload:

```
async function uploadSingleFile(file, uploadUrl) {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(uploadUrl, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Upload failed: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('File upload failed:', error);
        throw error;
    }
}

// Usage with file input
document.getElementById('fileInput').addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (file) {
        try {
            const result = await uploadSingleFile(file, '/api/upload');
            console.log('Upload successful:', result);
        } catch (error) {
            console.error('Upload error:', error);
        }
    }
});

```

### Multiple Files with Progress:

```
async function uploadMultipleFiles(files, uploadUrl, onProgress) {
    const formData = new FormData();

    Array.from(files).forEach((file, index) => {
        formData.append(`file_${index}`, file);
    });

    try {
        const response = await fetch(uploadUrl, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Upload failed: ${response.status}`);
        }

        // Read response with progress tracking
        const reader = response.body.getReader();
        const contentLength = +response.headers.get('Content-Length');
        let receivedLength = 0;
        let chunks = [];

        while (true) {
            const { done, value } = await reader.read();

            if (done) break;

            chunks.push(value);
            receivedLength += value.length;

            if (onProgress) {
                onProgress((receivedLength / contentLength) * 100);
            }
        }

        const responseText = new TextDecoder().decode(
            new Uint8Array(chunks.reduce((acc, chunk) => [...acc, ...chunk], []))
        );

        return JSON.parse(responseText);
    } catch (error) {
        console.error('Multiple file upload failed:', error);
        throw error;
    }
}

```

Practical Examples
------------------

### API Client Class:

```
class APIClient {
    constructor(baseURL, defaultHeaders = {}) {
        this.baseURL = baseURL;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            ...defaultHeaders
        };
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: { ...this.defaultHeaders, ...options.headers },
            ...options
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                throw new Error(`Request failed: ${response.status} ${response.statusText}`);
            }

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            }

            return await response.text();
        } catch (error) {
            console.error(`API request failed: ${endpoint}`, error);
            throw error;
        }
    }

    // Convenience methods
    get(endpoint, headers = {}) {
        return this.request(endpoint, { method: 'GET', headers });
    }

    post(endpoint, data, headers = {}) {
        return this.request(endpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        });
    }

    put(endpoint, data, headers = {}) {
        return this.request(endpoint, {
            method: 'PUT',
            headers,
            body: JSON.stringify(data)
        });
    }

    delete(endpoint, headers = {}) {
        return this.request(endpoint, { method: 'DELETE', headers });
    }
}

// Usage
const api = new APIClient('https://api.example.com', {
    'Authorization': 'Bearer your-token-here'
});

// Use the client
async function example() {
    try {
        const users = await api.get('/users');
        const newUser = await api.post('/users', { name: 'John', email: 'john@example.com' });
        await api.delete(`/users/${newUser.id}`);
    } catch (error) {
        console.error('API operations failed:', error);
    }
}

```

### Retry Logic:

```
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            return response;
        } catch (error) {
            lastError = error;
            console.warn(`Attempt ${attempt} failed:`, error.message);

            if (attempt < maxRetries) {
                // Exponential backoff: wait 1s, 2s, 4s...
                const delay = Math.pow(2, attempt - 1) * 1000;
                console.log(`Retrying in ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }

    throw new Error(`All ${maxRetries} attempts failed. Last error: ${lastError.message}`);
}

```

Best Practices
--------------

### 1\. Always Handle Errors:

```
// Good
async function getData() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
}

// Bad
async function getBadData() {
    const response = await fetch('/api/data');
    return await response.json(); // No error handling!
}

```

### 2\. Set Appropriate Headers:

```
// For JSON requests
const jsonHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

// For file uploads, let browser set Content-Type
const formData = new FormData();
// Don't set Content-Type header for FormData

```

### 3\. Use AbortController for Long Requests:

```
async function fetchWithTimeout(url, timeoutMs = 10000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        }
        throw error;
    }
}

```

### 4\. Validate Response Content:

```
async function safeJsonFetch(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not JSON');
    }

    return await response.json();
}

```

Common Pitfalls to Avoid
------------------------

### 1\. Not Checking response.ok:

```
// Wrong - fetch doesn't reject on HTTP errors
fetch('/api/data')
    .then(response => response.json()) // This runs even for 404, 500, etc.
    .then(data => console.log(data));

// Right
fetch('/api/data')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));

```

### 2\. Reading Response Body Multiple Times:

```
// Wrong - can only read response body once
const response = await fetch('/api/data');
const text = await response.text();
const json = await response.json(); // This will fail!

// Right - choose one method
const response = await fetch('/api/data');
const json = await response.json();

```

### 3\. Not Encoding URL Parameters:

```
// Wrong
const query = "user@example.com";
fetch(`/api/search?email=${query}`); // Invalid URL

// Right
const query = "user@example.com";
fetch(`/api/search?email=${encodeURIComponent(query)}`);

```

Summary
-------

**Key Points to Remember:**

-   **Always check `response.ok`** - fetch doesn't reject on HTTP errors
-   **Use async/await** for cleaner, more readable code
-   **Handle errors properly** with try/catch blocks
-   **Set appropriate headers** for your request type
-   **Use AbortController** for request cancellation and timeouts
-   **Don't read response body multiple times**
-   **Encode URL parameters** with `encodeURIComponent()`

Fetch is a powerful and flexible API that makes HTTP requests straightforward once you understand these core concepts!
