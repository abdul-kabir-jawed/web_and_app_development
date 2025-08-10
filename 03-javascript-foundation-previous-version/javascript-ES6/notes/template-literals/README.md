JavaScript Template Literals Notes
==================================

Overview
--------

Template literals (template strings) are a feature introduced in ES6 that provide an easy way to create strings with embedded expressions, multi-line strings, and advanced string formatting.

Basic Syntax
------------

Template literals use backticks (```) instead of quotes and allow embedded expressions with `${}`.

```
// Traditional string concatenation
const name = 'John';
const age = 30;
const message = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template literal
const message2 = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message2); // "Hello, my name is John and I am 30 years old."

```

Expression Interpolation
------------------------

You can embed any JavaScript expression inside `${}`.

```
const a = 10;
const b = 20;

// Arithmetic operations
console.log(`The sum is: ${a + b}`); // "The sum is: 30"
console.log(`The product is: ${a * b}`); // "The product is: 200"

// Function calls
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(`${greet('Alice')}`); // "Hello, Alice!"

// Conditional expressions
const user = { isAdmin: true, name: 'Bob' };
console.log(`Welcome ${user.isAdmin ? 'Admin' : 'User'} ${user.name}`);
// "Welcome Admin Bob"

// Object properties
const person = { firstName: 'Jane', lastName: 'Doe' };
console.log(`Full name: ${person.firstName} ${person.lastName}`);
// "Full name: Jane Doe"

```

Multi-line Strings
------------------

Template literals preserve line breaks, making multi-line strings easy.

```
// Traditional approach (awkward)
const multiLine1 = 'Line 1\n' +
                  'Line 2\n' +
                  'Line 3';

// Template literal approach (clean)
const multiLine2 = `Line 1
Line 2
Line 3`;

console.log(multiLine2);
// Line 1
// Line 2
// Line 3

// HTML template example
const htmlTemplate = `
    <div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
        <button>Click me</button>
    </div>
`;

```

Advanced Examples
-----------------

### Dynamic HTML Generation

```
function createUserCard(user) {
    return `
        <div class="user-card" data-id="${user.id}">
            <img src="${user.avatar}" alt="${user.name}">
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Role: ${user.role.toUpperCase()}</p>
            <div class="actions">
                ${user.isActive ?
                    '<button class="btn-primary">Edit</button>' :
                    '<button class="btn-secondary">Activate</button>'
                }
            </div>
        </div>
    `;
}

const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    avatar: 'avatar.jpg',
    isActive: true
};

document.body.innerHTML = createUserCard(user);

```

### SQL Query Building

```
function buildQuery(table, conditions, fields = '*') {
    const whereClause = Object.entries(conditions)
        .map(([key, value]) => `${key} = '${value}'`)
        .join(' AND ');

    return `
        SELECT ${Array.isArray(fields) ? fields.join(', ') : fields}
        FROM ${table}
        WHERE ${whereClause}
    `;
}

const query = buildQuery(
    'users',
    { status: 'active', role: 'admin' },
    ['id', 'name', 'email']
);

console.log(query);
// SELECT id, name, email
// FROM users
// WHERE status = 'active' AND role = 'admin'

```

### CSS-in-JS Style Generation

```
function generateCSS(selector, styles) {
    const cssRules = Object.entries(styles)
        .map(([property, value]) => `    ${property}: ${value};`)
        .join('\n');

    return `
${selector} {
${cssRules}
}`;
}

const buttonStyles = generateCSS('.btn-primary', {
    'background-color': '#007bff',
    'color': 'white',
    'padding': '10px 20px',
    'border': 'none',
    'border-radius': '4px'
});

console.log(buttonStyles);

```

Tagged Template Literals
------------------------

Tagged templates allow you to parse template literals with a function.

### Basic Tagged Template

```
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? `<mark>${values[i]}</mark>` : '';
        return result + string + value;
    }, '');
}

const searchTerm = 'JavaScript';
const text = highlight`Learning ${searchTerm} is fun and ${searchTerm} is powerful!`;
console.log(text);
// "Learning <mark>JavaScript</mark> is fun and <mark>JavaScript</mark> is powerful!"

```

### Safe HTML Template

```
function safeHTML(strings, ...values) {
    function escapeHTML(str) {
        return str.toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    return strings.reduce((result, string, i) => {
        const value = values[i] ? escapeHTML(values[i]) : '';
        return result + string + value;
    }, '');
}

const userInput = '<script>alert("XSS")</script>';
const safeOutput = safeHTML`User said: ${userInput}`;
console.log(safeOutput);
// "User said: &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;"

```

### Internationalization (i18n)

```
const translations = {
    en: {
        welcome: 'Welcome',
        user: 'User',
        admin: 'Administrator'
    },
    es: {
        welcome: 'Bienvenido',
        user: 'Usuario',
        admin: 'Administrador'
    }
};

function i18n(strings, ...keys) {
    const language = 'es'; // Could be dynamic

    return strings.reduce((result, string, i) => {
        const key = keys[i];
        const translation = key ? translations[language][key] || key : '';
        return result + string + translation;
    }, '');
}

const message = i18n`${'welcome'} ${'admin'} John!`;
console.log(message); // "Bienvenido Administrador John!"

```

Practical Use Cases
-------------------

### Configuration Strings

```
const config = {
    host: 'localhost',
    port: 3000,
    database: 'myapp',
    ssl: false
};

const connectionString = `mongodb://${config.host}:${config.port}/${config.database}${config.ssl ? '?ssl=true' : ''}`;
console.log(connectionString); // "mongodb://localhost:3000/myapp"

```

### Log Message Formatting

```
function createLogger(level) {
    return (message, ...args) => {
        const timestamp = new Date().toISOString();
        const formattedArgs = args.map(arg =>
            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ');

        console.log(`[${timestamp}] ${level.toUpperCase()}: ${message} ${formattedArgs}`);
    };
}

const logger = createLogger('info');
logger`User logged in`, { userId: 123, ip: '192.168.1.1' };
// [2023-12-07T10:30:00.000Z] INFO: User logged in {"userId":123,"ip":"192.168.1.1"}

```

### Email Template Generation

```
function emailTemplate(recipient) {
    return `
Subject: Welcome to Our Platform!

Dear ${recipient.name},

Thank you for joining our platform! Here are your account details:

Username: ${recipient.username}
Email: ${recipient.email}
Account Type: ${recipient.isPremium ? 'Premium' : 'Standard'}

${recipient.isPremium ? `
As a premium member, you have access to:
- Unlimited downloads
- Priority support
- Advanced features
` : `
Upgrade to Premium for additional benefits:
- Unlimited downloads
- Priority support
- Advanced features

Upgrade here: ${generateUpgradeLink(recipient.id)}
`}

Best regards,
The Team

---
This email was sent to ${recipient.email}
Unsubscribe: ${generateUnsubscribeLink(recipient.id)}
    `.trim();
}

```

### URL Builder

```
class URLBuilder {
    constructor(baseURL) {
        this.base = baseURL;
        this.params = new Map();
    }

    addParam(key, value) {
        this.params.set(key, value);
        return this;
    }

    build() {
        const queryString = Array.from(this.params.entries())
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');

        return `${this.base}${queryString ? '?' + queryString : ''}`;
    }

    // Using template literal for clean API
    static create(strings, ...values) {
        const url = strings.reduce((result, string, i) => {
            return result + string + (values[i] || '');
        }, '');

        return new URLBuilder(url);
    }
}

// Usage
const apiEndpoint = URLBuilder.create`https://api.example.com/users/${'123'}/posts`
    .addParam('page', 1)
    .addParam('limit', 10)
    .addParam('sort', 'created_date')
    .build();

console.log(apiEndpoint);
// "https://api.example.com/users/123/posts?page=1&limit=10&sort=created_date"

```

Performance Considerations
--------------------------

### Template Literal Caching

```
// Inefficient - creates new template each time
function badExample(users) {
    return users.map(user => `
        <div class="user">
            <h3>${user.name}</h3>
            <p>${user.email}</p>
        </div>
    `).join('');
}

// Better - separate template creation from data processing
const userTemplate = (user) => `
    <div class="user">
        <h3>${user.name}</h3>
        <p>${user.email}</p>
    </div>
`;

function goodExample(users) {
    return users.map(userTemplate).join('');
}

```

### Avoiding Unnecessary Computations

```
// Inefficient - expensive operation in template
const expensiveOperation = (data) => {
    // Simulate expensive computation
    return data.reduce((sum, item) => sum + item.value, 0);
};

// Bad
function badTemplate(items) {
    return `Total: ${expensiveOperation(items)}`;
}

// Good - compute once, use in template
function goodTemplate(items) {
    const total = expensiveOperation(items);
    return `Total: ${total}`;
}

```

Common Patterns and Idioms
--------------------------

### Default Values in Templates

```
const user = { name: 'John' }; // email is undefined

// Using || for defaults
const message1 = `Welcome ${user.name || 'Guest'}! Your email: ${user.email || 'Not provided'}`;

// Using nullish coalescing (??) for more precise defaults
const message2 = `Welcome ${user.name ?? 'Guest'}! Your email: ${user.email ?? 'Not provided'}`;

```

### Conditional Sections

```
function renderUserProfile(user) {
    return `
        <div class="profile">
            <h2>${user.name}</h2>
            ${user.bio ? `<p class="bio">${user.bio}</p>` : ''}
            ${user.isVerified ? '<span class="verified">✓ Verified</span>' : ''}
            ${user.socialLinks ? `
                <div class="social">
                    ${user.socialLinks.map(link =>
                        `<a href="${link.url}">${link.platform}</a>`
                    ).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

```

Best Practices
--------------

1.  **Use for string interpolation** instead of concatenation
2.  **Leverage multi-line capabilities** for readable templates
3.  **Escape user input** when generating HTML
4.  **Cache expensive computations** outside templates
5.  **Use tagged templates** for specialized formatting
6.  **Keep expressions simple** - complex logic should be outside
7.  **Consider performance** for frequently used templates

Common Pitfalls
---------------

1.  **Forgetting to escape HTML** when user input is involved
2.  **Complex logic in templates** making them hard to read
3.  **Not handling undefined/null values** properly
4.  **Performance issues** with expensive operations in templates
5.  **Indentation issues** with multi-line templates

Summary
-------

-   **Template literals use backticks** and allow expression interpolation
-   **Perfect for multi-line strings** and dynamic content generation
-   **Tagged templates** provide powerful customization options
-   **Great for HTML, SQL, CSS, and configuration generation**
-   **Always consider security** when dealing with user input
-   **Balance readability with performance** in template design
