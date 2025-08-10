JavaScript Promises Notes
=========================

Overview
--------

Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never. Promises provide a cleaner alternative to callbacks for managing asynchronous code.

Promise States
--------------

A Promise can be in one of three states:

-   **Pending**: Initial state, neither fulfilled nor rejected
-   **Fulfilled**: Operation completed successfully
-   **Rejected**: Operation failed

Creating Promises
-----------------

### Basic Promise Constructor

```
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    const success = Math.random() > 0.5;

    setTimeout(() => {
        if (success) {
            resolve('Operation successful!');
        } else {
            reject(new Error('Operation failed!'));
        }
    }, 1000);
});

console.log(myPromise); // Promise { <pending> }

```

### Immediately Resolved/Rejected Promises

```
// Immediately resolved
const resolvedPromise = Promise.resolve('Success!');
const resolvedWithValue = Promise.resolve({ id: 1, name: 'John' });

// Immediately rejected
const rejectedPromise = Promise.reject(new Error('Failed!'));

console.log(resolvedPromise); // Promise { 'Success!' }

```

Consuming Promises
------------------

### Using .then() and .catch()

```
myPromise
    .then(result => {
        console.log('Success:', result);
        return result.toUpperCase(); // Transform the data
    })
    .then(upperResult => {
        console.log('Transformed:', upperResult);
    })
    .catch(error => {
        console.error('Error:', error.message);
    })
    .finally(() => {
        console.log('Promise completed');
    });

```

### Promise Chaining

```
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, name: 'User' + id });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'Post 1', userId: userId },
                { id: 2, title: 'Post 2', userId: userId }
            ]);
        }, 500);
    });
}

function fetchComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: 'Comment 1', postId: postId },
                { id: 2, text: 'Comment 2', postId: postId }
            ]);
        }, 300);
    });
}

// Promise chaining
fetchUser(1)
    .then(user => {
        console.log('User:', user);
        return fetchPosts(user.id);
    })
    .then(posts => {
        console.log('Posts:', posts);
        return fetchComments(posts[0].id);
    })
    .then(comments => {
        console.log('Comments:', comments);
    })
    .catch(error => {
        console.error('Chain failed:', error);
    });

```

Promise Utility Methods
-----------------------

### Promise.all()

Waits for all promises to resolve or any to reject.

```
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 1000));
const promise3 = Promise.resolve(42);

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // [3, 'foo', 42]
    })
    .catch(error => {
        console.error('One or more promises failed:', error);
    });

// Real-world example: fetching multiple resources
function loadPageData() {
    const userPromise = fetchUser(1);
    const postsPromise = fetchPosts(1);
    const settingsPromise = fetchSettings(1);

    return Promise.all([userPromise, postsPromise, settingsPromise])
        .then(([user, posts, settings]) => {
            return { user, posts, settings };
        });
}

loadPageData()
    .then(pageData => {
        console.log('All data loaded:', pageData);
    })
    .catch(error => {
        console.error('Failed to load page data:', error);
    });

```

### Promise.allSettled()

Waits for all promises to settle (resolve or reject).

```
const promises = [
    Promise.resolve('Success 1'),
    Promise.reject(new Error('Error 1')),
    Promise.resolve('Success 2'),
    Promise.reject(new Error('Error 2'))
];

Promise.allSettled(promises)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index} fulfilled:`, result.value);
            } else {
                console.log(`Promise ${index} rejected:`, result.reason.message);
            }
        });
    });

// Practical example: processing multiple API calls
async function processMultipleAPIs() {
    const apiCalls = [
        fetch('/api/users'),
        fetch('/api/posts'),
        fetch('/api/comments')
    ];

    const results = await Promise.allSettled(apiCalls);

    const successes = results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);

    const failures = results
        .filter(result => result.status === 'rejected')
        .map(result => result.reason);

    console.log(`${successes.length} APIs succeeded, ${failures.length} failed`);

    return { successes, failures };
}

```

### Promise.race()

Returns the first promise to settle (resolve or reject).

```
const slowPromise = new Promise(resolve =>
    setTimeout(() => resolve('Slow'), 2000)
);

const fastPromise = new Promise(resolve =>
    setTimeout(() => resolve('Fast'), 500)
);

Promise.race([slowPromise, fastPromise])
    .then(result => {
        console.log(result); // 'Fast'
    });

// Timeout implementation using Promise.race()
function withTimeout(promise, ms) {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), ms)
    );

    return Promise.race([promise, timeout]);
}

// Usage
const slowAPI = fetch('/api/slow-endpoint');

withTimeout(slowAPI, 5000)
    .then(response => response.json())
    .then(data => console.log('Data received:', data))
    .catch(error => {
        if (error.message === 'Timeout') {
            console.error('Request timed out');
        } else {
            console.error('Request failed:', error);
        }
    });

```

### Promise.any()

Returns the first promise to fulfill, ignoring rejections.

```
const promises = [
    Promise.reject(new Error('Error 1')),
    Promise.resolve('Success 1'),
    Promise.resolve('Success 2')
];

Promise.any(promises)
    .then(result => {
        console.log('First success:', result); // 'Success 1'
    })
    .catch(error => {
        console.error('All promises rejected:', error);
    });

// Fallback API endpoints
function fetchFromMultipleSources(data) {
    const sources = [
        fetch('/api/primary/data'),
        fetch('/api/secondary/data'),
        fetch('/api/backup/data')
    ];

    return Promise.any(sources)
        .then(response => response.json())
        .catch(error => {
            throw new Error('All API sources failed');
        });
}

```

Advanced Promise Patterns
-------------------------

### Promise Retry Logic

```
function retryPromise(promiseFactory, maxRetries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        let attempts = 0;

        function attempt() {
            attempts++;

            promiseFactory()
                .then(resolve)
                .catch(error => {
                    if (attempts >= maxRetries) {
                        reject(new Error(`Failed after ${maxRetries} attempts: ${error.message}`));
                    } else {
                        console.log(`Attempt ${attempts} failed, retrying in ${delay}ms...`);
                        setTimeout(attempt, delay);
                    }
                });
        }

        attempt();
    });
}

// Usage
const unreliableAPI = () => fetch('/api/unreliable');

retryPromise(unreliableAPI, 3, 2000)
    .then(response => response.json())
    .then(data => console.log('Data received:', data))
    .catch(error => console.error('All retries failed:', error));

```

### Promise Queue (Sequential Execution)

```
class PromiseQueue {
    constructor() {
        this.queue = [];
        this.running = false;
    }

    add(promiseFactory) {
        return new Promise((resolve, reject) => {
            this.queue.push({
                promiseFactory,
                resolve,
                reject
            });

            this.process();
        });
    }

    async process() {
        if (this.running || this.queue.length === 0) {
            return;
        }

        this.running = true;

        while (this.queue.length > 0) {
            const { promiseFactory, resolve, reject } = this.queue.shift();

            try {
                const result = await promiseFactory();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }

        this.running = false;
    }
}

// Usage
const queue = new PromiseQueue();

// Add tasks to queue (they'll execute sequentially)
queue.add(() => fetch('/api/task1'))
    .then(response => response.json())
    .then(data => console.log('Task 1 complete:', data));

queue.add(() => fetch('/api/task2'))
    .then(response => response.json())
    .then(data => console.log('Task 2 complete:', data));

```

### Promise Pool (Controlled Concurrency)

```
class PromisePool {
    constructor(concurrency = 3) {
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }

    add(promiseFactory) {
        return new Promise((resolve, reject) => {
            this.queue.push({
                promiseFactory,
                resolve,
                reject
            });

            this.process();
        });
    }

    async process() {
        if (this.running >= this.concurrency || this.queue.length === 0) {
            return;
        }

        this.running++;

        const { promiseFactory, resolve, reject } = this.queue.shift();

        try {
            const result = await promiseFactory();
            resolve(result);
        } catch (error) {
            reject(error);
        } finally {
            this.running--;
            this.process(); // Process next item
        }
    }
}

// Usage
const pool = new PromisePool(2); // Max 2 concurrent requests

// Add multiple tasks (only 2 will run concurrently)
for (let i = 1; i <= 10; i++) {
    pool.add(() => fetch(`/api/item/${i}`))
        .then(response => response.json())
        .then(data => console.log(`Item ${i} loaded:`, data))
        .catch(error => console.error(`Item ${i} failed:`, error));
}

```

Error Handling Patterns
-----------------------

### Centralized Error Handling

```
class APIError extends Error {
    constructor(message, status, response) {
        super(message);
        this.name = 'APIError';
        this.status = status;
        this.response = response;
    }
}

function handleAPIResponse(response) {
    if (!response.ok) {
        throw new APIError(
            `HTTP ${response.status}: ${response.statusText}`,
            response.status,
            response
        );
    }
    return response.json();
}

function makeAPICall(url) {
    return fetch(url)
        .then(handleAPIResponse)
        .catch(error => {
            if (error instanceof APIError) {
                console.error(`API Error ${error.status}:`, error.message);

                // Handle specific status codes
                switch (error.status) {
                    case 401:
                        // Redirect to login
                        window.location.href = '/login';
                        break;
                    case 404:
                        // Show not found message
                        showNotFoundMessage();
                        break;
                    case 500:
                        // Show server error message
                        showServerErrorMessage();
                        break;
                }
            } else {
                console.error('Network error:', error.message);
                showNetworkErrorMessage();
            }

            throw error; // Re-throw for caller to handle
        });
}

```

### Promise-based Circuit Breaker

```
class CircuitBreaker {
    constructor(options = {}) {
        this.failureThreshold = options.failureThreshold || 5;
        this.recoveryTimeout = options.recoveryTimeout || 30000;
        this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
        this.failures = 0;
        this.lastFailureTime = null;
    }

    async execute(promiseFactory) {
        if (this.state === 'OPEN') {
            if (Date.now() - this.lastFailureTime > this.recoveryTimeout) {
                this.state = 'HALF_OPEN';
                this.failures = 0;
            } else {
                throw new Error('Circuit breaker is OPEN');
            }
        }

        try {
            const result = await promiseFactory();

            if (this.state === 'HALF_OPEN') {
                this.state = 'CLOSED';
                this.failures = 0;
            }

            return result;
        } catch (error) {
            this.failures++;
            this.lastFailureTime = Date.now();

            if (this.failures >= this.failureThreshold) {
                this.state = 'OPEN';
            }

            throw error;
        }
    }

    getState() {
        return this.state;
    }
}

// Usage
const breaker = new CircuitBreaker({
    failureThreshold: 3,
    recoveryTimeout: 10000
});

async function callExternalAPI() {
    try {
        const result = await breaker.execute(() => fetch('/api/external'));
        return result.json();
    } catch (error) {
        if (error.message === 'Circuit breaker is OPEN') {
            console.log('Service temporarily unavailable');
            return getDefaultData();
        }
        throw error;
    }
}

```

Promise-based Utilities
-----------------------

### Debounced Promise

```
function debouncePromise(fn, delay) {
    let timeoutId;
    let latestResolve;
    let latestReject;

    return function(...args) {
        return new Promise((resolve, reject) => {
            if (latestResolve) {
                latestReject(new Error('Debounced'));
            }

            latestResolve = resolve;
            latestReject = reject;

            clearTimeout(timeoutId);

            timeoutId = setTimeout(async () => {
                try {
                    const result = await fn.apply(this, args);
                    latestResolve(result);
                } catch (error) {
                    latestReject(error);
                } finally {
                    latestResolve = null;
                    latestReject = null;
                }
            }, delay);
        });
    };
}

// Usage
const debouncedSearch = debouncePromise(async (query) => {
    const response = await fetch(`/api/search?q=${query}`);
    return response.json();
}, 300);

// Only the last call within 300ms will execute
debouncedSearch('javascript')
    .then(results => console.log('Search results:', results))
    .catch(error => {
        if (error.message !== 'Debounced') {
            console.error('Search failed:', error);
        }
    });

```

### Promise Timeout

```
function promiseTimeout(promise, ms, timeoutMessage = 'Promise timed out') {
    const timeout = new Promise((_, reject) => {
        const id = setTimeout(() => {
            reject(new Error(timeoutMessage));
        }, ms);
    });

    return Promise.race([promise, timeout]);
}

// Alternative implementation with cleanup
function promiseTimeoutWithCleanup(promise, ms) {
    let timeoutId;

    const timeout = new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
            reject(new Error('Promise timed out'));
        }, ms);
    });

    return Promise.race([
        promise.finally(() => clearTimeout(timeoutId)),
        timeout
    ]);
}

// Usage
const slowPromise = new Promise(resolve =>
    setTimeout(() => resolve('Done!'), 3000)
);

promiseTimeout(slowPromise, 2000)
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error.message));

```

### Promise Cache

```
class PromiseCache {
    constructor(ttl = 60000) { // 1 minute default TTL
        this.cache = new Map();
        this.ttl = ttl;
    }

    get(key, promiseFactory) {
        const cached = this.cache.get(key);

        if (cached && Date.now() - cached.timestamp < this.ttl) {
            return cached.promise;
        }

        const promise = promiseFactory()
            .then(result => {
                // Update cache with resolved value
                this.cache.set(key, {
                    promise: Promise.resolve(result),
                    timestamp: Date.now()
                });
                return result;
            })
            .catch(error => {
                // Remove failed promises from cache
                this.cache.delete(key);
                throw error;
            });

        this.cache.set(key, {
            promise,
            timestamp: Date.now()
        });

        return promise;
    }

    clear() {
        this.cache.clear();
    }

    delete(key) {
        return this.cache.delete(key);
    }

    has(key) {
        const cached = this.cache.get(key);
        return cached && Date.now() - cached.timestamp < this.ttl;
    }
}

// Usage
const cache = new PromiseCache(30000); // 30 seconds TTL

function fetchUserData(userId) {
    return cache.get(`user:${userId}`, () => {
        console.log(`Fetching user ${userId} from API`);
        return fetch(`/api/users/${userId}`).then(r => r.json());
    });
}

// First call hits the API
fetchUserData(1).then(user => console.log('User 1:', user));

// Second call (within 30 seconds) uses cache
setTimeout(() => {
    fetchUserData(1).then(user => console.log('User 1 (cached):', user));
}, 5000);

```

Converting Callbacks to Promises
--------------------------------

### Promisifying Node.js-style Callbacks

```
function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    };
}

// Example: Converting setTimeout to Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Example: Converting XMLHttpRequest to Promise
function makeRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`));
            }
        };

        xhr.onerror = function() {
            reject(new Error('Network error'));
        };

        xhr.send();
    });
}

// Usage
makeRequest('/api/data')
    .then(data => JSON.parse(data))
    .then(jsonData => console.log('Data:', jsonData))
    .catch(error => console.error('Request failed:', error));

```

Real-world Examples
-------------------

### Image Loading with Promise

```
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));

        img.src = src;
    });
}

function loadImages(urls) {
    const imagePromises = urls.map(url => loadImage(url));

    return Promise.allSettled(imagePromises)
        .then(results => {
            const loaded = results
                .filter(result => result.status === 'fulfilled')
                .map(result => result.value);

            const failed = results
                .filter(result => result.status === 'rejected')
                .map(result => result.reason.message);

            return { loaded, failed };
        });
}

// Usage
const imageUrls = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg'
];

loadImages(imageUrls)
    .then(({ loaded, failed }) => {
        console.log(`Loaded ${loaded.length} images`);
        if (failed.length > 0) {
            console.error('Failed to load:', failed);
        }

        // Add loaded images to DOM
        loaded.forEach(img => {
            document.body.appendChild(img);
        });
    });

```

### Database Transaction Pattern

```
class Database {
    constructor() {
        this.connected = false;
    }

    connect() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.connected = true;
                resolve();
            }, 100);
        });
    }

    query(sql, params = []) {
        if (!this.connected) {
            return Promise.reject(new Error('Not connected to database'));
        }

        return new Promise((resolve, reject) => {
            // Simulate database query
            setTimeout(() => {
                if (Math.random() > 0.1) { // 90% success rate
                    resolve({ rows: [], affected: 1 });
                } else {
                    reject(new Error('Query failed'));
                }
            }, Math.random() * 100);
        });
    }

    transaction(queries) {
        return this.connect()
            .then(() => this.beginTransaction())
            .then(() => {
                // Execute all queries
                const queryPromises = queries.map(({ sql, params }) =>
                    this.query(sql, params)
                );

                return Promise.all(queryPromises);
            })
            .then(results => {
                return this.commit().then(() => results);
            })
            .catch(error => {
                return this.rollback().then(() => {
                    throw error;
                });
            });
    }

    beginTransaction() {
        return Promise.resolve();
    }

    commit() {
        console.log('Transaction committed');
        return Promise.resolve();
    }

    rollback() {
        console.log('Transaction rolled back');
        return Promise.resolve();
    }
}

// Usage
const db = new Database();

const queries = [
    { sql: 'INSERT INTO users (name) VALUES (?)', params: ['John'] },
    { sql: 'INSERT INTO profiles (user_id, bio) VALUES (?, ?)', params: [1, 'Developer'] }
];

db.transaction(queries)
    .then(results => {
        console.log('Transaction successful:', results);
    })
    .catch(error => {
        console.error('Transaction failed:', error.message);
    });

```

### Progress Tracking with Promises

```
class ProgressTracker {
    constructor() {
        this.progress = 0;
        this.total = 0;
        this.callbacks = [];
    }

    onProgress(callback) {
        this.callbacks.push(callback);
    }

    updateProgress(completed, total) {
        this.progress = completed;
        this.total = total;
        const percentage = Math.round((completed / total) * 100);

        this.callbacks.forEach(callback => {
            callback({ completed, total, percentage });
        });
    }

    trackPromises(promises) {
        this.total = promises.length;
        let completed = 0;

        const trackedPromises = promises.map((promise, index) => {
            return promise
                .then(result => {
                    completed++;
                    this.updateProgress(completed, this.total);
                    return result;
                })
                .catch(error => {
                    completed++;
                    this.updateProgress(completed, this.total);
                    throw error;
                });
        });

        return Promise.allSettled(trackedPromises);
    }
}

// Usage
const tracker = new ProgressTracker();

tracker.onProgress(({ completed, total, percentage }) => {
    console.log(`Progress: ${percentage}% (${completed}/${total})`);
    // Update progress bar in UI
    document.getElementById('progress').style.width = `${percentage}%`;
});

const tasks = Array.from({ length: 10 }, (_, i) =>
    new Promise(resolve =>
        setTimeout(() => resolve(`Task ${i + 1} complete`), Math.random() * 2000)
    )
);

tracker.trackPromises(tasks)
    .then(results => {
        console.log('All tasks completed');
        const successful = results.filter(r => r.status === 'fulfilled').length;
        console.log(`${successful}/${results.length} tasks succeeded`);
    });

```

Performance Considerations
--------------------------

### Avoiding Promise Constructor Anti-pattern

```
// Anti-pattern: unnecessary Promise constructor
function badExample() {
    return new Promise((resolve, reject) => {
        fetch('/api/data')
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

// Good: return the promise directly
function goodExample() {
    return fetch('/api/data');
}

// Anti-pattern: mixing async/await with Promise constructor
async function badAsyncExample() {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await fetch('/api/data');
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

// Good: use async/await properly
async function goodAsyncExample() {
    return await fetch('/api/data');
    // Or even simpler:
    // return fetch('/api/data');
}

```

### Memory Management

```
// Be careful with long-running promise chains
function memoryEfficientChain(data) {
    return Promise.resolve(data)
        .then(result => {
            // Process result and return only what's needed
            const processed = heavyProcessing(result);
            result = null; // Help GC
            return processed;
        })
        .then(processed => {
            // Continue chain with minimal data
            return finalProcessing(processed);
        });
}

// Avoid creating too many promises at once
function processLargeDataset(items) {
    const batchSize = 10;
    const batches = [];

    for (let i = 0; i < items.length; i += batchSize) {
        batches.push(items.slice(i, i + batchSize));
    }

    return batches.reduce((promise, batch) => {
        return promise.then(results => {
            const batchPromise = Promise.all(
                batch.map(item => processItem(item))
            );

            return batchPromise.then(batchResults => {
                return results.concat(batchResults);
            });
        });
    }, Promise.resolve([]));
}

```

Best Practices
--------------

1.  **Always return promises** in promise chains
2.  **Use Promise.all()** for independent parallel operations
3.  **Use Promise.allSettled()** when you need all results regardless of failures
4.  **Handle errors appropriately** - don't ignore .catch()
5.  **Avoid the Promise constructor anti-pattern**
6.  **Use async/await** for cleaner code (covered in separate notes)
7.  **Implement proper timeout handling** for network requests
8.  **Consider using libraries** like Axios for HTTP requests
9.  **Use promise utilities** for complex scenarios (retry, circuit breaker, etc.)
10. **Be mindful of memory usage** in long-running applications

Common Mistakes
---------------

1.  **Forgetting to return promises in chains**

```
// Wrong
promise
    .then(result => {
        processResult(result); // Missing return!
    })
    .then(processed => {
        console.log(processed); // undefined
    });

// Correct
promise
    .then(result => {
        return processResult(result);
    })
    .then(processed => {
        console.log(processed); // Has value
    });

```

1.  **Nesting promises instead of chaining**

```
// Wrong (callback hell with promises)
getData()
    .then(result1 => {
        processData(result1)
            .then(result2 => {
                saveData(result2)
                    .then(result3 => {
                        console.log('Done');
                    });
            });
    });

// Correct
getData()
    .then(result1 => processData(result1))
    .then(result2 => saveData(result2))
    .then(result3 => console.log('Done'));

```

1.  **Not handling promise rejections**

```
// Wrong - unhandled promise rejection
fetch('/api/data')
    .then(response => response.json());

// Correct
fetch('/api/data')
    .then(response => response.json())
    .catch(error => console.error('Failed to fetch:', error));

```

Summary
-------

-   **Promises represent future values** and provide better async flow control than callbacks
-   **Three states**: pending, fulfilled, rejected
-   **Chain promises** with .then() for sequential operations
-   **Use utility methods**: Promise.all(), Promise.allSettled(), Promise.race(), Promise.any()
-   **Always handle errors** with .catch() or try-catch with async/await
-   **Implement advanced patterns** like retry logic, circuit breakers, and promise pools for robust applications
-   **Avoid anti-patterns** like unnecessary Promise constructors and nested promises
-   **Consider performance implications** when working with large datasets or many concurrent promises
