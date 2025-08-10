JavaScript Local Storage Notes
==============================

Overview
--------

Local Storage is a web storage API that allows you to store data locally within a user's browser. Data persists until explicitly removed or the user clears their browser data.

Basic Operations
----------------

### Storing Data

```
// Store a simple string
localStorage.setItem('username', 'john_doe');

// Store numbers (converted to strings)
localStorage.setItem('userAge', '25');

// Store complex data using JSON
const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    preferences: {
        theme: 'dark',
        language: 'en'
    }
};

localStorage.setItem('user', JSON.stringify(user));

// Alternative syntax (property assignment)
localStorage.theme = 'dark';
localStorage['settings'] = JSON.stringify({ notifications: true });

```

### Retrieving Data

```
// Get simple data
const username = localStorage.getItem('username');
console.log(username); // 'john_doe'

// Get and parse JSON data
const userData = localStorage.getItem('user');
const user = userData ? JSON.parse(userData) : null;

// Alternative syntax
const theme = localStorage.theme;
const settings = localStorage['settings'];

// Check if item exists
if (localStorage.getItem('username') !== null) {
    console.log('Username exists');
}

```

### Removing Data

```
// Remove specific item
localStorage.removeItem('username');

// Clear all localStorage data
localStorage.clear();

// Check if item was removed
if (!localStorage.getItem('username')) {
    console.log('Username was removed');
}

```

Helper Functions
----------------

### Safe Storage Operations

```
// Safe setItem with error handling
function safeSetItem(key, value) {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (error) {
        console.error('Failed to store item:', error);
        if (error.name === 'QuotaExceededError') {
            console.error('Storage quota exceeded');
        }
        return false;
    }
}

// Safe getItem with JSON parsing
function safeGetItem(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        if (item === null) return defaultValue;

        // Try to parse as JSON, fall back to string
        try {
            return JSON.parse(item);
        } catch (parseError) {
            return item; // Return as string if not JSON
        }
    } catch (error) {
        console.error('Failed to retrieve item:', error);
        return defaultValue;
    }
}

// Safe removeItem
function safeRemoveItem(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Failed to remove item:', error);
        return false;
    }
}

// Usage examples
safeSetItem('user', JSON.stringify({ name: 'John' }));
const user = safeGetItem('user', {});
safeRemoveItem('oldData');

```

### Storage Utility Class

```
class StorageManager {
    constructor(prefix = '') {
        this.prefix = prefix;
    }

    // Generate prefixed key
    _key(key) {
        return this.prefix ? `${this.prefix}_${key}` : key;
    }

    // Set item with automatic JSON stringification
    set(key, value) {
        try {
            const serializedValue = typeof value === 'string' ? value : JSON.stringify(value);
            localStorage.setItem(this._key(key), serializedValue);
            return true;
        } catch (error) {
            console.error(`Failed to store ${key}:`, error);
            return false;
        }
    }

    // Get item with automatic JSON parsing
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(this._key(key));
            if (item === null) return defaultValue;

            // Try JSON parse first
            try {
                return JSON.parse(item);
            } catch (parseError) {
                return item; // Return as string if not JSON
            }
        } catch (error) {
            console.error(`Failed to retrieve ${key}:`, error);
            return defaultValue;
        }
    }

    // Remove item
    remove(key) {
        try {
            localStorage.removeItem(this._key(key));
            return true;
        } catch (error) {
            console.error(`Failed to remove ${key}:`, error);
            return false;
        }
    }

    // Check if key exists
    has(key) {
        return localStorage.getItem(this._key(key)) !== null;
    }

    // Get all keys with prefix
    keys() {
        const keys = [];
        const prefixPattern = this.prefix ? `${this.prefix}_` : '';

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!prefixPattern || key.startsWith(prefixPattern)) {
                keys.push(prefixPattern ? key.substring(prefixPattern.length) : key);
            }
        }
        return keys;
    }

    // Clear all items with prefix
    clear() {
        const keysToRemove = [];
        const prefixPattern = this.prefix ? `${this.prefix}_` : '';

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!prefixPattern || key.startsWith(prefixPattern)) {
                keysToRemove.push(key);
            }
        }

        keysToRemove.forEach(key => localStorage.removeItem(key));
    }

    // Get storage size (approximate)
    getSize() {
        let totalSize = 0;
        const prefixPattern = this.prefix ? `${this.prefix}_` : '';

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!prefixPattern || key.startsWith(prefixPattern)) {
                const value = localStorage.getItem(key);
                totalSize += key.length + (value ? value.length : 0);
            }
        }

        return totalSize;
    }
}

// Usage
const userStorage = new StorageManager('user');
const appStorage = new StorageManager('app');

userStorage.set('profile', { name: 'John', age: 30 });
appStorage.set('settings', { theme: 'dark' });

console.log(userStorage.get('profile'));
console.log(userStorage.keys()); // Keys without prefix

```

Advanced Patterns
-----------------

### Data Expiration

```
class ExpiringStorage {
    set(key, value, ttlMinutes = 60) {
        const expirationTime = Date.now() + (ttlMinutes * 60 * 1000);
        const item = {
            value: value,
            expiration: expirationTime
        };

        try {
            localStorage.setItem(key, JSON.stringify(item));
            return true;
        } catch (error) {
            console.error('Failed to store expiring item:', error);
            return false;
        }
    }

    get(key) {
        try {
            const itemStr = localStorage.getItem(key);
            if (!itemStr) return null;

            const item = JSON.parse(itemStr);

            // Check if expired
            if (Date.now() > item.expiration) {
                localStorage.removeItem(key);
                return null;
            }

            return item.value;
        } catch (error) {
            console.error('Failed to retrieve expiring item:', error);
            return null;
        }
    }

    // Clean up expired items
    cleanup() {
        const keysToRemove = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = this.get(key); // This will remove expired items
        }
    }
}

// Usage
const cache = new ExpiringStorage();
cache.set('tempData', { message: 'Hello' }, 30); // Expires in 30 minutes

setTimeout(() => {
    console.log(cache.get('tempData')); // null if expired
}, 31 * 60 * 1000);

```

### Versioned Storage

```
class VersionedStorage {
    constructor(version = 1) {
        this.version = version;
        this.versionKey = '_storage_version';
        this.checkVersion();
    }

    checkVersion() {
        const storedVersion = parseInt(localStorage.getItem(this.versionKey) || '0');

        if (storedVersion < this.version) {
            console.log(`Upgrading storage from v${storedVersion} to v${this.version}`);
            this.migrate(storedVersion, this.version);
            localStorage.setItem(this.versionKey, this.version.toString());
        }
    }

    migrate(fromVersion, toVersion) {
        // Define migration strategies
        const migrations = {
            1: () => {
                // Migration from v0 to v1
                const oldUserData = localStorage.getItem('user');
                if (oldUserData) {
                    const userData = JSON.parse(oldUserData);
                    // Transform data structure
                    const newUserData = {
                        ...userData,
                        createdAt: Date.now(),
                        version: 1
                    };
                    localStorage.setItem('user_v1', JSON.stringify(newUserData));
                    localStorage.removeItem('user');
                }
            },
            2: () => {
                // Migration from v1 to v2
                // Add more transformations
            }
        };

        // Apply migrations
        for (let version = fromVersion + 1; version <= toVersion; version++) {
            if (migrations[version]) {
                migrations[version]();
            }
        }
    }

    set(key, value) {
        const versionedData = {
            data: value,
            version: this.version,
            timestamp: Date.now()
        };

        localStorage.setItem(key, JSON.stringify(versionedData));
    }

    get(key) {
        const item = localStorage.getItem(key);
        if (!item) return null;

        try {
            const versionedData = JSON.parse(item);

            // Check if data is from current version
            if (versionedData.version !== this.version) {
                console.warn(`Data version mismatch for ${key}`);
                return null;
            }

            return versionedData.data;
        } catch (error) {
            console.error('Failed to parse versioned data:', error);
            return null;
        }
    }
}

```

### Event-Driven Storage

```
class EventStorage extends EventTarget {
    set(key, value) {
        const oldValue = this.get(key);

        try {
            localStorage.setItem(key, JSON.stringify(value));

            // Dispatch change event
            this.dispatchEvent(new CustomEvent('storagechange', {
                detail: { key, oldValue, newValue: value, action: 'set' }
            }));

            return true;
        } catch (error) {
            console.error('Failed to set storage item:', error);
            return false;
        }
    }

    get(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    remove(key) {
        const oldValue = this.get(key);
        localStorage.removeItem(key);

        this.dispatchEvent(new CustomEvent('storagechange', {
            detail: { key, oldValue, newValue: null, action: 'remove' }
        }));
    }
}

// Usage
const eventStorage = new EventStorage();

eventStorage.addEventListener('storagechange', (event) => {
    console.log('Storage changed:', event.detail);
});

eventStorage.set('user', { name: 'John' });
eventStorage.remove('user');

```

Common Use Cases
----------------

### User Preferences

```
class UserPreferences {
    constructor() {
        this.key = 'user_preferences';
        this.defaults = {
            theme: 'light',
            language: 'en',
            fontSize: 'medium',
            notifications: true,
            autoSave: true
        };
    }

    get() {
        const stored = localStorage.getItem(this.key);
        const preferences = stored ? JSON.parse(stored) : {};

        // Merge with defaults
        return { ...this.defaults, ...preferences };
    }

    set(key, value) {
        const current = this.get();
        current[key] = value;
        localStorage.setItem(this.key, JSON.stringify(current));

        // Apply the preference immediately
        this.apply(key, value);
    }

    setMultiple(preferences) {
        const current = this.get();
        const updated = { ...current, ...preferences };
        localStorage.setItem(this.key, JSON.stringify(updated));

        // Apply all preferences
        Object.entries(preferences).forEach(([key, value]) => {
            this.apply(key, value);
        });
    }

    apply(key, value) {
        switch (key) {
            case 'theme':
                document.body.setAttribute('data-theme', value);
                break;
            case 'fontSize':
                document.body.setAttribute('data-font-size', value);
                break;
            case 'language':
                document.documentElement.lang = value;
                break;
        }
    }

    reset() {
        localStorage.removeItem(this.key);
        // Apply defaults
        Object.entries(this.defaults).forEach(([key, value]) => {
            this.apply(key, value);
        });
    }

    // Initialize preferences on page load
    init() {
        const preferences = this.get();
        Object.entries(preferences).forEach(([key, value]) => {
            this.apply(key, value);
        });
    }
}

// Usage
const userPrefs = new UserPreferences();
userPrefs.init(); // Apply stored preferences on page load

// Update individual preference
userPrefs.set('theme', 'dark');

// Update multiple preferences
userPrefs.setMultiple({
    theme: 'dark',
    fontSize: 'large',
    notifications: false
});

```

### Shopping Cart

```
class ShoppingCart {
    constructor() {
        this.key = 'shopping_cart';
        this.items = this.load();
    }

    load() {
        const stored = localStorage.getItem(this.key);
        return stored ? JSON.parse(stored) : [];
    }

    save() {
        localStorage.setItem(this.key, JSON.stringify(this.items));
    }

    addItem(product, quantity = 1) {
        const existingItemIndex = this.items.findIndex(item => item.id === product.id);

        if (existingItemIndex >= 0) {
            this.items[existingItemIndex].quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
                addedAt: Date.now()
            });
        }

        this.save();
        this.notifyChange();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.save();
        this.notifyChange();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.save();
                this.notifyChange();
            }
        }
    }

    clear() {
        this.items = [];
        localStorage.removeItem(this.key);
        this.notifyChange();
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    notifyChange() {
        // Dispatch custom event for UI updates
        window.dispatchEvent(new CustomEvent('cartchange', {
            detail: {
                items: this.items,
                total: this.getTotal(),
                count: this.getItemCount()
            }
        }));
    }
}

// Usage
const cart = new ShoppingCart();

// Listen for cart changes
window.addEventListener('cartchange', (event) => {
    document.getElementById('cart-count').textContent = event.detail.count;
    document.getElementById('cart-total').textContent = `${event.detail.total.toFixed(2)}`;
});

cart.addItem({ id: 1, name: 'Widget', price: 9.99 });

```

### Form Data Persistence

```
class FormPersistence {
    constructor(formId, options = {}) {
        this.formId = formId;
        this.storageKey = `form_${formId}`;
        this.excludeFields = options.excludeFields || ['password', 'confirmPassword'];
        this.autoSave = options.autoSave !== false;
        this.saveDelay = options.saveDelay || 1000;

        this.form = document.getElementById(formId);
        if (this.form && this.autoSave) {
            this.setupAutoSave();
        }
    }

    setupAutoSave() {
        let saveTimeout;

        this.form.addEventListener('input', (event) => {
            if (this.excludeFields.includes(event.target.name)) {
                return;
            }

            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
                this.save();
            }, this.saveDelay);
        });

        this.form.addEventListener('change', () => {
            clearTimeout(saveTimeout);
            this.save();
        });
    }

    save() {
        if (!this.form) return false;

        const formData = new FormData(this.form);
        const data = {};

        for (const [key, value] of formData.entries()) {
            if (!this.excludeFields.includes(key)) {
                data[key] = value;
            }
        }

        // Also save checkbox states
        const checkboxes = this.form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (!this.excludeFields.includes(checkbox.name)) {
                data[checkbox.name] = checkbox.checked;
            }
        });

        try {
            localStorage.setItem(this.storageKey, JSON.stringify({
                data: data,
                timestamp: Date.now()
            }));
            return true;
        } catch (error) {
            console.error('Failed to save form data:', error);
            return false;
        }
    }

    restore() {
        if (!this.form) return false;

        try {
            const stored = localStorage.getItem(this.storageKey);
            if (!stored) return false;

            const { data, timestamp } = JSON.parse(stored);

            // Check if data is not too old (optional)
            const maxAge = 24 * 60 * 60 * 1000; // 24 hours
            if (Date.now() - timestamp > maxAge) {
                this.clear();
                return false;
            }

            // Restore form fields
            Object.entries(data).forEach(([key, value]) => {
                const field = this.form.querySelector(`[name="${key}"]`);
                if (field) {
                    if (field.type === 'checkbox') {
                        field.checked = value;
                    } else if (field.type === 'radio') {
                        const radio = this.form.querySelector(`[name="${key}"][value="${value}"]`);
                        if (radio) radio.checked = true;
                    } else {
                        field.value = value;
                    }
                }
            });

            return true;
        } catch (error) {
            console.error('Failed to restore form data:', error);
            return false;
        }
    }

    clear() {
        localStorage.removeItem(this.storageKey);
    }

    // Get saved data without restoring to form
    getSavedData() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored).data : null;
        } catch (error) {
            console.error('Failed to get saved form data:', error);
            return null;
        }
    }
}

// Usage
const formPersistence = new FormPersistence('userForm', {
    excludeFields: ['password', 'creditCard'],
    autoSave: true,
    saveDelay: 500
});

// Restore on page load
formPersistence.restore();

// Manual save
document.getElementById('saveButton').addEventListener('click', () => {
    formPersistence.save();
});

// Clear on form submit
document.getElementById('userForm').addEventListener('submit', () => {
    formPersistence.clear();
});

```

Storage Events and Cross-Tab Communication
------------------------------------------

### Storage Event Listener

```
// Listen for storage changes from other tabs
window.addEventListener('storage', (event) => {
    if (event.key === 'user_preferences') {
        console.log('User preferences changed in another tab');
        console.log('Old value:', event.oldValue);
        console.log('New value:', event.newValue);

        // Update UI accordingly
        updateUIFromPreferences();
    }
});

function updateUIFromPreferences() {
    const prefs = JSON.parse(localStorage.getItem('user_preferences') || '{}');
    // Update current tab's UI
    if (prefs.theme) {
        document.body.setAttribute('data-theme', prefs.theme);
    }
}

```

### Cross-Tab Messaging

```
class CrossTabMessaging {
    constructor(channel = 'app_messages') {
        this.channel = channel;
        this.listeners = new Map();
        this.setupStorageListener();
    }

    setupStorageListener() {
        window.addEventListener('storage', (event) => {
            if (event.key === this.channel && event.newValue) {
                try {
                    const message = JSON.parse(event.newValue);
                    this.handleMessage(message);
                } catch (error) {
                    console.error('Failed to parse cross-tab message:', error);
                }
            }
        });
    }

    send(type, data = {}) {
        const message = {
            type: type,
            data: data,
            timestamp: Date.now(),
            tabId: this.getTabId()
        };

        try {
            localStorage.setItem(this.channel, JSON.stringify(message));
            // Remove immediately to allow repeated messages
            localStorage.removeItem(this.channel);
        } catch (error) {
            console.error('Failed to send cross-tab message:', error);
        }
    }

    on(type, callback) {
        if (!this.listeners.has(type)) {
            this.listeners.set(type, []);
        }
        this.listeners.get(type).push(callback);
    }

    off(type, callback) {
        const callbacks = this.listeners.get(type);
        if (callbacks) {
            const index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
            }
        }
    }

    handleMessage(message) {
        const callbacks = this.listeners.get(message.type);
        if (callbacks) {
            callbacks.forEach(callback => {
                try {
                    callback(message.data, message);
                } catch (error) {
                    console.error('Error in message callback:', error);
                }
            });
        }
    }

    getTabId() {
        if (!this.tabId) {
            this.tabId = Math.random().toString(36).substr(2, 9);
        }
        return this.tabId;
    }
}

// Usage
const messenger = new CrossTabMessaging();

// Listen for user login events from other tabs
messenger.on('user_login', (userData) => {
    console.log('User logged in from another tab:', userData);
    updateUserInterface(userData);
});

// Send login event to other tabs
messenger.send('user_login', { userId: 123, name: 'John Doe' });

```

Limitations and Considerations
------------------------------

### Storage Quotas

```
function checkStorageQuota() {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
        navigator.storage.estimate().then(estimate => {
            console.log('Storage quota:', estimate.quota);
            console.log('Storage usage:', estimate.usage);
            console.log('Usage percentage:', (estimate.usage / estimate.quota * 100).toFixed(2) + '%');
        });
    } else {
        // Fallback: try to measure localStorage size
        let totalSize = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                totalSize += localStorage[key].length + key.length;
            }
        }
        console.log('Approximate localStorage size:', totalSize, 'characters');
    }
}

function testStorageLimit() {
    const testKey = 'storage_test';
    let size = 0;
    const increment = 1024 * 1024; // 1MB chunks

    try {
        while (true) {
            const data = 'x'.repeat(increment);
            localStorage.setItem(testKey, data);
            size += increment;
            console.log('Stored:', size / (1024 * 1024), 'MB');
        }
    } catch (error) {
        console.log('Storage limit reached at approximately:', size / (1024 * 1024), 'MB');
        localStorage.removeItem(testKey);
    }
}

```

### Privacy Mode Detection

```
function detectPrivateMode() {
    return new Promise((resolve) => {
        // Test localStorage availability
        try {
            localStorage.setItem('private_test', '1');
            localStorage.removeItem('private_test');
            resolve(false); // Not private mode
        } catch (error) {
            resolve(true); // Likely private mode
        }
    });
}

// Usage
detectPrivateMode().then(isPrivate => {
    if (isPrivate) {
        console.log('Private browsing detected - localStorage may not work');
        // Implement fallback storage strategy
        useSessionStorageOrMemory();
    }
});

function useSessionStorageOrMemory() {
    // Fallback to sessionStorage or in-memory storage
    const storage = sessionStorage || new Map();
    // Implement your storage logic here
}

```

Security Considerations
-----------------------

### Data Sanitization

```
class SecureStorage {
    // Sanitize data before storage
    static sanitize(data) {
        if (typeof data === 'string') {
            // Remove potential XSS vectors
            return data.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        }

        if (typeof data === 'object') {
            const sanitized = {};
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    sanitized[key] = this.sanitize(data[key]);
                }
            }
            return sanitized;
        }

        return data;
    }

    static set(key, value) {
        try {
            const sanitizedValue = this.sanitize(value);
            const serialized = JSON.stringify(sanitizedValue);
            localStorage.setItem(key, serialized);
            return true;
        } catch (error) {
            console.error('Failed to store sanitized data:', error);
            return false;
        }
    }

    static get(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Failed to retrieve data:', error);
            return null;
        }
    }
}

// Never store sensitive information in localStorage
const SENSITIVE_FIELDS = [
    'password', 'creditCard', 'ssn', 'token', 'apiKey'
];

function isSensitiveData(key, value) {
    if (SENSITIVE_FIELDS.some(field => key.toLowerCase().includes(field))) {
        return true;
    }

    if (typeof value === 'string' && value.length > 100) {
        // Long strings might contain sensitive data
        console.warn('Storing long string data - ensure it\'s not sensitive');
    }

    return false;
}

```

Best Practices
--------------

1.  **Always handle exceptions** when working with localStorage
2.  **Don't store sensitive data** like passwords or tokens
3.  **Use JSON for complex data** but be aware of serialization limitations
4.  **Implement fallbacks** for private browsing mode
5.  **Consider data expiration** for temporary data
6.  **Use prefixes** to organize data and avoid conflicts
7.  **Clean up unused data** to avoid quota issues
8.  **Validate data** when retrieving from storage
9.  **Use storage events** for cross-tab communication
10. **Monitor storage usage** in production applications

Common Pitfalls
---------------

1.  **Assuming localStorage is always available**

```
// Bad
localStorage.setItem('key', 'value');

// Good
try {
    localStorage.setItem('key', 'value');
} catch (error) {
    console.error('Storage not available:', error);
}

```

1.  **Not handling JSON parsing errors**

```
// Bad
const data = JSON.parse(localStorage.getItem('data'));

// Good
let data = null;
try {
    const stored = localStorage.getItem('data');
    data = stored ? JSON.parse(stored) : null;
} catch (error) {
    console.error('Failed to parse stored data:', error);
    data = null;
}

```

1.  **Storing functions or complex objects**

```
// Bad - functions and dates don't serialize properly
const data = {
    callback: () => console.log('hello'),
    date: new Date(),
    regex: /pattern/g
};
localStorage.setItem('data', JSON.stringify(data));

// Good - store serializable data only
const data = {
    timestamp: Date.now(),
    pattern: 'pattern',
    flags: 'g'
};
localStorage.setItem('data', JSON.stringify(data));

```

Summary
-------

-   **localStorage persists data** across browser sessions until manually cleared
-   **Always handle errors** with try-catch blocks
-   **Use JSON** for storing complex objects
-   **Don't store sensitive information** like passwords or tokens
-   **Implement helper classes** for better organization and error handling
-   **Consider storage quotas** and implement cleanup strategies
-   **Use storage events** for cross-tab communication
-   **Test in private browsing mode** to ensure fallbacks work
-   **Sanitize data** when necessary to prevent XSS attacks
