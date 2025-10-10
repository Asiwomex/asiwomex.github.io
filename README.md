# Asiwome Boateng - DevOps Engineer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a DevOps Engineer. Built with vanilla HTML, CSS, and JavaScript featuring advanced animations, dark mode, and optimal performance.

## ✨ Features

### 🎨 Modern Design
- **Gradient Accents** - Beautiful color gradients throughout the design
- **Glass Morphism** - Modern frosted glass effects on navigation
- **Smooth Animations** - Intersection Observer API for scroll animations
- **Particle Effects** - Animated background particles on hero section
- **Card Hover Effects** - Interactive 3D-style hover animations

### 🌓 Dark Mode
- **Theme Toggle** - Switch between light and dark themes
- **Persistent Preference** - Theme choice saved in localStorage
- **Smooth Transitions** - Seamless color transitions between themes

### 📱 Fully Responsive
- **Mobile First** - Optimized for all screen sizes
- **Hamburger Menu** - Clean mobile navigation
- **Touch Optimized** - Perfect touch interactions on mobile devices
- **Landscape Support** - Optimized for landscape orientation

### ⚡ Performance Optimized
- **Lazy Loading** - Images load as needed
- **Debounced Scroll** - Optimized scroll event handlers
- **CSS Animations** - Hardware-accelerated animations
- **Minimal Dependencies** - Pure vanilla JavaScript, no frameworks

### ♿ Accessibility
- **Semantic HTML** - Proper HTML5 semantic elements
- **ARIA Labels** - Screen reader friendly
- **Keyboard Navigation** - Full keyboard support
- **Focus Management** - Proper focus trap in mobile menu
- **Reduced Motion** - Respects prefers-reduced-motion

### 🎯 Interactive Features
- **Scroll Progress Bar** - Visual indicator of page scroll position
- **Active Nav Links** - Highlights current section in navigation
- **Back to Top Button** - Quick navigation to top of page
- **Smooth Scrolling** - Smooth scroll to sections
- **Typing Effect** - Animated typing effect on hero title
- **Parallax Effects** - Subtle parallax scrolling

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and Custom Properties
- **JavaScript (ES6+)** - Modern JavaScript features
- **Intersection Observer API** - Scroll animations
- **Local Storage API** - Theme persistence

## 📂 Project Structure

```
Portfolio 2/
├── index.html              # Main HTML file
├── style.css               # Main stylesheet with modern design
├── mediaqueries.css        # Responsive design breakpoints
├── script.js               # Interactive functionality
├── assets/                 # Images and resources
│   ├── profile-pic.png
│   ├── about-pic.png
│   ├── project-*.png
│   ├── resume.pdf
│   └── icons/
├── *_old.*                 # Backup of previous version
└── README.md               # This file
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Asiwomex/Sample-Portfolio-1.git
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. **Customize**
   - Update personal information in `index.html`
   - Replace images in `assets/` folder
   - Modify colors in CSS custom properties (`:root` in `style.css`)
   - Add your own projects and skills

## 🎨 Customization Guide

### Changing Colors
Edit the CSS custom properties in `style.css`:
```css
:root {
  --primary-color: #3b82f6;      /* Main brand color */
  --secondary-color: #8b5cf6;    /* Secondary accent */
  --accent-color: #06b6d4;       /* Additional accent */
}
```

### Adding Projects
Add new project cards in the projects section of `index.html`:
```html
<div class="details-container color-container project-card">
  <!-- Your project content -->
</div>
```

### Updating Skills
Modify the skills section in `index.html` to add/remove technologies.

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Asiwome Boateng**
- LinkedIn: [@asiwomex](https://www.linkedin.com/in/asiwomex/)
- GitHub: [@Asiwomex](https://github.com/Asiwomex)
- Email: iamasiwome@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern web design trends
- Icons and images are personal assets
- Built with passion for clean, performant code

## 📈 Version History

- **v2.0** (2024) - Complete redesign with modern features, dark mode, and enhanced UX
- **v1.0** (2024) - Initial portfolio release

---

**Note:** Old files are backed up with `_old` suffix. You can safely delete them after verifying the new version works correctly.

Made with 💙 by Asiwome Boateng
