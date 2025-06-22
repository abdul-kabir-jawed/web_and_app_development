# Stairs to Success - HTML Forms Assignment

## Assignment Overview

This project consists of **4 interconnected HTML form pages** created as part of the "Stairs to Success" assignment. The assignment demonstrates the creation of functional HTML forms without any CSS styling, focusing purely on HTML structure and form elements.

## Assignment Requirements Fulfilled

### ✅ **Requirement 1: Four Form Pages Created**
- **Register Form** (`register.html`)
- **Sign In Form** (`signin.html`) 
- **General Information Form** (`general-info.html`)
- **Contact Form** (`contact.html`)

### ✅ **Requirement 2: All Forms Linked to Each Other**
- Each form contains navigation links using relative paths (`./`, `../`, `../../`, `../../../`)
- Users can navigate between all forms seamlessly

### ✅ **Requirement 3: No CSS Used**
- Pure HTML implementation
- No inline styles, external stylesheets, or embedded CSS
- Styling achieved through HTML elements like tables, fieldsets, and basic formatting

### ✅ **Requirement 4: Comprehensive Input Fields**
- All standard HTML input types implemented
- Extensive form validation using HTML5 attributes
- Various form controls including text inputs, dropdowns, checkboxes, radio buttons, textareas, and file uploads

## File Structure

```
project-root/
├── register.html          # Main registration form
├── signin.html           # User login form  
├── general-info.html     # Comprehensive user information form
├── contact.html          # Contact and inquiry form
└── README.md            # This documentation file
```

## Form Descriptions

### 1. Register Form (`register.html`)
**Purpose**: New user account creation

**Key Features**:
- Personal information collection (name, email, phone, date of birth)
- Password and confirmation fields
- Gender selection with radio buttons
- Terms and conditions checkbox
- Form validation with required fields
- Links to other forms using `./` relative paths

**Navigation Links**:
- `./signin.html` (Sign In Form)
- `./general-info.html` (General Information Form)
- `./contact.html` (Contact Form)

### 2. Sign In Form (`signin.html`)
**Purpose**: Existing user authentication

**Key Features**:
- Email/username input field
- Password field
- "Remember Me" checkbox option
- Forgot password link
- Clean and simple login interface
- Links to other forms using `../` relative paths

**Navigation Links**:
- `../register.html` (Register Form)
- `../general-info.html` (General Information Form)
- `../contact.html` (Contact Form)

### 3. General Information Form (`general-info.html`)
**Purpose**: Comprehensive user profile completion

**Key Features**:
- **Personal Information Section**:
  - Full name, nickname, age, nationality
  - Marital status selection
- **Contact Details Section**:
  - Primary and secondary phone numbers
  - Email address and website/portfolio URL
- **Address Information Section**:
  - Complete address with street, city, state, postal code, country
- **Education & Career Section**:
  - Education level, field of study, occupation, company, experience
- **Additional Information Section**:
  - Skills (comma-separated text area)
  - Languages known (multiple checkboxes)
  - Hobbies and interests
  - File upload for profile picture and resume
  - Biography text area
- **Preferences Section**:
  - Newsletter subscription options
  - Email notification preferences
- Links to other forms using `../../` relative paths

**Navigation Links**:
- `../../register.html` (Register Form)
- `../../signin.html` (Sign In Form)
- `../../contact.html` (Contact Form)

### 4. Contact Form (`contact.html`)
**Purpose**: Customer inquiries and support requests

**Key Features**:
- **Contact Information Section**:
  - Full name, email, phone, company details
- **Inquiry Details Section**:
  - Inquiry type dropdown (General, Support, Sales, Partnership, etc.)
  - Priority level selection (Low, Medium, High, Urgent)
  - Subject line and detailed message area
- **Additional Information Section**:
  - Preferred contact method (multiple checkboxes)
  - Best time to contact dropdown
  - How they heard about us
  - File attachment option
- **Feedback Section**:
  - Website rating (1-5 scale)
  - Improvement suggestions
- **Company Contact Information Display**:
  - Business address, phone, email, hours
- Agreement checkbox for data consent
- Links to other forms using `../../../` relative paths

**Navigation Links**:
- `../../../register.html` (Register Form)  
- `../../../signin.html` (Sign In Form)
- `../../../general-info.html` (General Information Form)

## Technical Implementation Details

### Relative Path Navigation System
The assignment specifically required the use of relative paths (`./`, `../`, `../../`, `../../../`) for navigation:

- **Register Form**: Uses `./` (same directory level)
- **Sign In Form**: Uses `../` (one directory up)
- **General Information Form**: Uses `../../` (two directories up)
- **Contact Form**: Uses `../../../` (three directories up)

This demonstrates understanding of relative path navigation in web development.

### HTML Form Elements Used

#### Input Types Implemented:
- `text` - Standard text input fields
- `email` - Email validation input
- `password` - Hidden password fields
- `tel` - Telephone number input
- `date` - Date picker input
- `number` - Numeric input with min/max validation
- `url` - URL validation input
- `file` - File upload functionality
- `radio` - Single selection options
- `checkbox` - Multiple selection options
- `hidden` - Hidden form fields (if needed)

#### Form Controls Used:
- `<input>` - Various input types
- `<select>` with `<option>` - Dropdown menus
- `<textarea>` - Multi-line text input
- `<button>` - Form submission and reset buttons
- `<fieldset>` and `<legend>` - Form grouping and labeling
- `<label>` - Input field labels for accessibility

#### HTML5 Validation Attributes:
- `required` - Mandatory field validation
- `maxlength` - Maximum character limits
- `min` and `max` - Numeric range validation
- `accept` - File type restrictions for uploads
- `placeholder` - Input field hints
- `pattern` - Custom validation patterns (where applicable)

### Accessibility Features
- Proper `<label>` associations with form inputs using `for` and `id` attributes
- Semantic HTML structure with appropriate headings
- `<fieldset>` and `<legend>` for logical form grouping
- Descriptive button text and form instructions
- Table structure for organized form layout

### Form Validation Strategy
- **Client-side validation** using HTML5 attributes
- **Required field indicators** for mandatory inputs
- **Input type validation** (email, URL, telephone formats)
- **File type restrictions** for uploads
- **Numeric range validation** for age and experience fields
- **Checkbox agreements** for terms and conditions

## Usage Instructions

### How to Use This Assignment:

1. **Download all files** and place them in the same directory
2. **Open any HTML file** in a web browser to start
3. **Navigate between forms** using the provided navigation links
4. **Test form functionality** by filling out fields and submitting
5. **Validate navigation** by clicking different relative path links

### Recommended Testing Sequence:
1. Start with `register.html` (main entry point)
2. Navigate to `signin.html` using the provided links
3. Explore `general-info.html` for comprehensive form features  
4. Complete testing with `contact.html`
5. Test all navigation links to ensure proper relative path functionality

### Browser Compatibility:
- Works on all modern web browsers (Chrome, Firefox, Safari, Edge)
- HTML5 form validation supported
- No external dependencies or libraries required
- Responsive to different screen sizes (basic HTML responsiveness)

## Assignment Learning Objectives Achieved

### 1. **HTML Form Mastery**
- Comprehensive understanding of HTML form elements
- Implementation of various input types and form controls
- Proper form structure and organization

### 2. **Navigation and Linking**
- Mastery of relative path navigation
- Understanding of directory structure relationships
- Implementation of interconnected page navigation

### 3. **Web Development Best Practices**
- Semantic HTML structure
- Accessibility considerations with labels and fieldsets
- Form validation using HTML5 attributes
- Clean, organized code structure

### 4. **User Experience Design**
- Logical form flow and organization
- Clear navigation between related forms
- Comprehensive information collection
- User-friendly form layouts using tables


## Conclusion

This "Stairs to Success" assignment successfully demonstrates mastery of HTML form creation, navigation linking, and web development fundamentals. The project showcases a comprehensive understanding of HTML5 form elements, relative path navigation, and user-centered design principles, all while adhering to the strict requirement of using no CSS styling.

The four interconnected forms provide a complete user journey from registration through profile completion and contact, representing a real-world web application flow that could serve as the foundation for a larger web development project.
