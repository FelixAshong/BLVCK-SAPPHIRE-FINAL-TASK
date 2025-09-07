# XCUXION Landing Page

A modern, responsive landing page for XCUXION - a technology company specializing in startup incubation and acceleration services.

## 🚀 Features

- **Responsive Design**: Fully responsive layout optimized for all devices (mobile, tablet, desktop)
- **Smooth Scrolling Navigation**: Seamless navigation between sections with smooth scroll behavior
- **Interactive Elements**: 
  - Auto-sliding testimonials carousel with navigation dots
  - Working FAQ accordion with expand/collapse functionality
  - Interactive contact form with focus states
  - Hover effects and transitions throughout
- **Modern UI/UX**: Clean, professional design with consistent branding and visual hierarchy
- **Performance Optimized**: Fast loading with optimized images and efficient code structure
- **Accessibility**: Proper ARIA labels, semantic HTML, and keyboard navigation support

## 📋 Sections

1. **Header**: Fixed navigation with smooth scrolling to sections
2. **Hero Section**: Eye-catching introduction with call-to-action buttons and social icons
3. **Services Section**: Three-column showcase of company services with custom icons
4. **Working Process**: Step-by-step visualization of company workflow
5. **Incubation Program**: Detailed information about startup acceleration services
6. **Why Choose Us**: Feature highlights with bullet points and benefits
7. **Testimonials**: Auto-sliding carousel with customer reviews and star ratings
8. **FAQ Section**: Expandable frequently asked questions with smooth animations
9. **Contact Form**: Complete contact form with validation styling and custom send button
10. **Footer**: Centered company information, navigation links, and social media icons

## 🛠 Technologies Used

- **React 18**: Modern React with hooks (useState, useEffect)
- **TypeScript**: Type-safe development for better code quality
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Icons**: Comprehensive icon library (FontAwesome icons)
- **Vite**: Lightning-fast build tool and development server
- **PostCSS**: CSS processing for Tailwind compilation

## 🎨 Design Features

### Visual Elements
- **Custom Images**: Branded top chip images for section headers
- **Consistent Iconography**: Custom service icons and UI elements
- **Color Palette**: Professional gray/white base with lime green accents
- **Typography**: Hierarchical text styling with proper contrast ratios

### Interactive Components
- **Auto-Sliding Carousel**: 3-slide testimonials with 4-second intervals
- **Accordion FAQ**: Smooth expand/collapse animations
- **Form Interactions**: Focus states and hover effects
- **Button Styles**: Consistent styling with custom arrow symbols (➤)

### Responsive Behavior
- **Mobile-First**: Optimized for mobile devices with progressive enhancement
- **Flexible Layouts**: Grid and flexbox layouts that adapt to screen sizes
- **Image Optimization**: Responsive images with proper aspect ratios
- **Touch-Friendly**: Adequate touch targets for mobile interaction

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd PROJECT
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to `http://localhost:5173`**

### Build Commands

**Development:**
```bash
npm run dev          # Start development server
```

**Production:**
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

**Linting:**
```bash
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
PROJECT/
├── public/                 # Static assets
├── src/
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles and Tailwind imports
│   ├── assets/
│   │   └── images/        # Project images and assets
│   │       ├── Final Task_Image1.png    # Hero section image
│   │       ├── Final Task_image2.jpeg   # Feature section image
│   │       ├── Final Task_image3.jpeg   # Testimonial profile image
│   │       ├── image.png                # Featured content image
│   │       ├── right.png                # Incubation section image
│   │       ├── incuts.png               # Hero decoration
│   │       ├── Mask group.png           # Hero background element
│   │       ├── group 1.png              # Service icons
│   │       ├── group 2.png              # Alternative service icon
│   │       ├── top chip.png             # Hero section chip
│   │       ├── top chip service.png     # Services section chip
│   │       ├── top chip workflow.png    # Workflow section chips
│   │       ├── top chip faq.png         # FAQ section chip
│   │       ├── top chip contact.png     # Contact section chip
│   │       └── top chip choose.png      # Choose us section chip
│   └── components/
│       └── HeroSection.tsx # Hero section component (legacy)
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── postcss.config.js      # PostCSS configuration
```

## 🎯 Key Implementation Details

### State Management
- **FAQ Accordion**: Uses `useState` for managing active/inactive states
- **Testimonials Carousel**: Auto-advancing with manual navigation controls
- **Smooth Scrolling**: Custom scroll-to-section functionality

### Styling Approach
- **Utility-First**: Tailwind CSS for rapid development and consistency
- **Custom Styling**: Inline styles for precise positioning and unique elements
- **Responsive Design**: Mobile-first approach with breakpoint-specific adjustments

### Performance Optimizations
- **Image Loading**: Optimized image paths and proper alt text
- **Bundle Size**: Tree-shaking with Vite for minimal production bundle
- **CSS Purging**: Tailwind CSS purges unused styles in production

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` (default)
- **Tablet**: `640px - 1024px` (sm, md)
- **Desktop**: `1024px+` (lg, xl)

## 🔧 Configuration Files

- **`tailwind.config.js`**: Tailwind CSS customization
- **`vite.config.ts`**: Vite build configuration with React plugin
- **`tsconfig.json`**: TypeScript compiler options
- **`postcss.config.js`**: PostCSS plugins including Tailwind and Autoprefixer

## 🚦 Development Notes

### Code Quality
- TypeScript for type safety and better development experience
- ESLint configuration for code consistency
- Proper component structure and separation of concerns

### Accessibility Features
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Proper contrast ratios and focus indicators

### Future Enhancements
- Backend integration for contact form submission
- Content Management System (CMS) integration
- SEO optimization with meta tags
- Progressive Web App (PWA) features

## 📄 License

This project is created for evaluation and demonstration purposes.

---

**Built with ❤️ by the XCUXION development team**