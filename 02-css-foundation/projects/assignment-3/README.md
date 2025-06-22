
# Poetry Website Project

A beautiful, multi-page poetry website showcasing different poetic styles with unique typography for each page.

## 📋 Project Overview

This project creates a responsive poetry website with 5 distinct pages, each featuring different fonts and styling to match the mood and theme of the poetry presented.

## 🎯 Project Requirements

- **5 Different Pages**: Each with unique content and typography
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Unique Fonts**: Different font families for each page to create distinct atmospheres
- **Clean Navigation**: Easy-to-use navigation between pages
- **Semantic HTML**: Proper HTML structure and accessibility

## 📁 Project Structure

```
poetry-website/
│
├── index.html              # Home page with site introduction
├── nature-poems.html       # Nature poetry page
├── love-poems.html         # Love poetry page
├── melancholy-poems.html   # Melancholic poetry page
├── inspirational-poems.html # Inspirational poetry page
├── css/
│   └── styles.css          # Main stylesheet
├── fonts/                  # Custom font files (if using local fonts)
├── images/                 # Background images and decorative elements
└── README.md              # This file
```

## 🎨 Page Designs & Fonts

### 1. Home Page (index.html)
- **Font**: Playfair Display (elegant serif)
- **Theme**: Welcome and introduction to the poetry collection
- **Color Scheme**: Deep purple and gold
- **Features**: Site navigation, brief introduction, featured poem preview

### 2. Nature Poems (nature-poems.html)
- **Font**: Merriweather (readable serif for nature themes)
- **Theme**: Poems about landscapes, seasons, and natural beauty
- **Color Scheme**: Earth tones (greens, browns, sky blue)
- **Features**: Collection of 3-4 nature poems with nature-inspired styling

### 3. Love Poems (love-poems.html)
- **Font**: Dancing Script (romantic cursive)
- **Theme**: Romantic and heartfelt poetry
- **Color Scheme**: Soft roses, pinks, and warm tones
- **Features**: Elegant romantic poems with decorative elements

### 4. Melancholy Poems (melancholy-poems.html)
- **Font**: Crimson Text (contemplative serif)
- **Theme**: Reflective and introspective poetry
- **Color Scheme**: Muted blues, grays, and dark themes
- **Features**: Thoughtful poems with minimalist, contemplative design

### 5. Inspirational Poems (inspirational-poems.html)
- **Font**: Montserrat (modern, uplifting sans-serif)
- **Theme**: Motivational and uplifting poetry
- **Color Scheme**: Bright, energetic colors (oranges, yellows, bright blues)
- **Features**: Encouraging poems with dynamic, energetic styling

## 🔧 Technical Features

### HTML Structure
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- Proper heading hierarchy (h1, h2, h3)
- Accessible navigation with proper link structure
- Meta tags for responsive design and SEO

### CSS Features
- **Responsive Design**: Mobile-first approach with media queries
- **Font Integration**: Google Fonts integration for web fonts
- **Flexbox/Grid Layout**: Modern CSS layout techniques
- **Custom Properties**: CSS variables for consistent theming
- **Smooth Transitions**: Hover effects and smooth animations
- **Typography**: Careful attention to line-height, spacing, and readability

### Navigation
- Consistent navigation bar across all pages
- Active page highlighting
- Mobile-responsive hamburger menu (optional)
- Smooth scrolling effects

## 🚀 Getting Started

### Prerequisites
- Basic knowledge of HTML and CSS
- Text editor (VS Code, Sublime Text, etc.)
- Web browser for testing
- Internet connection (for Google Fonts)

### Setup Instructions

1. **Create Project Structure**
   ```bash
   mkdir poetry-website
   cd poetry-website
   mkdir css images fonts
   ```

2. **Create HTML Files**
   - Create all 5 HTML files as listed in the project structure
   - Start with a basic HTML5 template for each

3. **Set Up CSS**
   - Create the main stylesheet in `css/styles.css`
   - Import Google Fonts at the top of your CSS file
   - Define CSS variables for colors and spacing

4. **Build Navigation**
   - Create a consistent navigation structure
   - Add it to all pages
   - Style with CSS for responsive behavior

5. **Add Content**
   - Write or source appropriate poems for each page
   - Ensure content matches the theme of each page

6. **Style Each Page**
   - Apply unique fonts and color schemes
   - Create responsive layouts
   - Add hover effects and transitions

## 🎨 Font Recommendations

### Google Fonts to Use
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Merriweather:wght@300;400&family=Dancing+Script:wght@400;700&family=Crimson+Text:wght@400;600&family=Montserrat:wght@300;400;600&display=swap');
```

### Font Pairings
- **Headers**: Use the primary font for each page
- **Body Text**: Consider using complementary fonts for readability
- **Accents**: Use font weights and styles for emphasis

## 📱 Responsive Design Guidelines

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Key Responsive Features
- Scalable typography using `rem` and `em` units
- Flexible grid layouts
- Responsive images
- Touch-friendly navigation on mobile
- Readable font sizes across all devices

## 🔍 Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works between all pages
- [ ] Fonts load properly from Google Fonts
- [ ] Responsive design works on different screen sizes
- [ ] All content is readable and accessible
- [ ] CSS validates without errors
- [ ] HTML validates without errors
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

## 🎯 Enhancement Ideas

### Basic Enhancements
- Add favicon for the website
- Include meta descriptions for SEO
- Add smooth scrolling navigation
- Include a back-to-top button

### Advanced Features
- Dark/light mode toggle
- Search functionality for poems
- Print-friendly stylesheets
- CSS animations for page transitions
- Interactive elements (poem favorites, sharing)

## 📚 Learning Resources

### HTML & CSS Fundamentals
- MDN Web Docs (HTML & CSS)
- W3Schools tutorials
- CSS-Tricks for advanced techniques

### Typography & Design
- Google Fonts documentation
- Typography best practices
- Color theory for web design

### Responsive Design
- CSS Grid and Flexbox guides
- Mobile-first design principles
- Media query best practices

## 🤝 Best Practices

### Code Quality
- Use consistent indentation and formatting
- Add comments to explain complex CSS
- Use meaningful class and ID names
- Organize CSS with logical sections

### Performance
- Optimize images for web
- Minimize CSS and HTML where possible
- Use efficient selectors
- Limit the number of font weights loaded

### Accessibility
- Use proper heading hierarchy
- Ensure sufficient color contrast
- Add alt text for decorative images
- Test with screen readers

## 📝 Submission Guidelines

### Required Files
1. All 5 HTML pages
2. CSS stylesheet(s)
3. Any custom images used
4. This README.md file
5. Project explanation document

### Documentation
- Comment your code appropriately
- Include any special instructions for viewing
- Note any external resources or fonts used
- Provide information about browser compatibility

## 🏆 Success Criteria

Your project will be successful when:
- All 5 pages display correctly with unique fonts
- Navigation works seamlessly between pages
- Design is responsive across different devices
- Code is clean, well-organized, and commented
- Content is engaging and appropriate for each theme
- Typography enhances the reading experience

---

*Happy coding! Create something beautiful that showcases the power of typography in web design.*
