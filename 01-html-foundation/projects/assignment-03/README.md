# Assignment 3: Stairs to Success - File Structure & Navigation

## 📋 Assignment Overview

This is the **third assignment** in the "Stairs to Success" series. The goal is to create a well-organized file structure with interconnected HTML files that demonstrate proper navigation using relative paths.

## 🎯 Assignment Requirements

### ✅ Completed Requirements:

1. **Minimum 8 Files Structure** ✓
   - Created 12 HTML files total
   - Each file is accessible from every other file
   - Proper hierarchical organization

2. **Minimum 3 Nested Routes** ✓
   - Root level files
   - `/pages/` directory (1 level deep)
   - `/pages/admin/` directory (2 levels deep)
   - `/pages/products/` directory (2 levels deep)

3. **Relevant File & Folder Names** ✓
   - `index.html` - Main homepage
   - `about.html` - About page
   - `contact.html` - Contact page
   - `pages/` - Main content directory
   - `pages/admin/` - Admin section
   - `pages/products/` - Product catalog

4. **Navigation Requirements** ✓
   - Every file contains a complete list of links
   - Each file has a clear heading with its name
   - Proper relative path format (`./`, `../`, `../../`)

5. **No CSS Styling** ✓
   - Pure HTML structure
   - No inline or external CSS
   - Clean, semantic markup only

## 📁 File Structure

```
project-root/
├── index.html                  (Homepage)
├── about.html                  (About Us)
├── contact.html                (Contact Information)
├── services.html               (Our Services)
└── pages/
    ├── portfolio.html          (Portfolio Showcase)
    ├── blog.html               (Blog Posts)
    ├── team.html               (Team Members)
    ├── admin/
    │   ├── dashboard.html      (Admin Dashboard)
    │   ├── users.html          (User Management)
    │   └── settings.html       (System Settings)
    └── products/
        ├── catalog.html        (Product Catalog)
        └── details.html        (Product Details)
```

## 🧭 Navigation Logic

### Root Level Files (/, ./)
- `index.html`, `about.html`, `contact.html`, `services.html`
- Access pages folder: `./pages/filename.html`
- Access nested admin: `./pages/admin/filename.html`
- Access nested products: `./pages/products/filename.html`

### Pages Level Files (./pages/)
- `portfolio.html`, `blog.html`, `team.html`
- Access root files: `../filename.html`
- Access admin files: `./admin/filename.html`
- Access product files: `./products/filename.html`

### Admin Level Files (./pages/admin/)
- `dashboard.html`, `users.html`, `settings.html`
- Access root files: `../../filename.html`
- Access pages files: `../filename.html`
- Access products files: `../products/filename.html`

### Products Level Files (./pages/products/)
- `catalog.html`, `details.html`
- Access root files: `../../filename.html`
- Access pages files: `../filename.html`
- Access admin files: `../admin/filename.html`

## 🔗 Relative Path Examples

| From Location | To Location | Path Used |
|---------------|-------------|-----------|
| Root | Root | `./filename.html` |
| Root | Pages | `./pages/filename.html` |
| Root | Admin | `./pages/admin/filename.html` |
| Pages | Root | `../filename.html` |
| Pages | Pages | `./filename.html` |
| Admin | Root | `../../filename.html` |
| Admin | Pages | `../filename.html` |
| Products | Admin | `../admin/filename.html` |

## 🚀 How to Use

1. **Download** all files maintaining the folder structure
2. **Open** `index.html` in your web browser
3. **Navigate** using the links in each file
4. **Test** that every file is accessible from every other file
5. **Verify** that all relative paths work correctly

## 📝 File Contents

Each HTML file contains:
- **Heading** with the file's name/purpose
- **Complete navigation menu** with links to all other files
- **Proper relative paths** using `./`, `../`, `../../` format
- **Semantic HTML structure** without any CSS styling

## 🔍 Testing Checklist

- [ ] All 12 files load correctly
- [ ] Navigation works from every file to every other file
- [ ] Relative paths are correct for each directory level
- [ ] No broken links exist
- [ ] Folder structure matches the specification
- [ ] No CSS styling is present
- [ ] Each file has proper heading and navigation

## 🎓 Learning Objectives

This assignment teaches:
- **File Organization** - Creating logical folder structures
- **Relative Path Navigation** - Understanding `./`, `../`, `../../` usage
- **HTML Structure** - Building semantic, accessible markup
- **Project Planning** - Organizing interconnected web files
- **Web Development Fundamentals** - Core navigation concepts

## 📚 Assignment Series

This is **Assignment 3** in the "Stairs to Success" series:
- Assignment 1: [Previous Topic]
- Assignment 2: [Previous Topic]
- **Assignment 3: File Structure & Navigation** ← You are here
- Assignment 4: [Upcoming Topic]

## 🏆 Success Criteria

**Full marks achieved when:**
- Minimum 8 files created ✓
- 3+ nested route levels implemented ✓
- All files accessible from all other files ✓
- Proper relative path usage ✓
- Relevant naming conventions ✓
- Complete navigation menus ✓
- No CSS styling used ✓

---

**Good luck, Champs! 🌟**

*Remember: This assignment builds the foundation for understanding web project structure and navigation - essential skills for any web developer!*
