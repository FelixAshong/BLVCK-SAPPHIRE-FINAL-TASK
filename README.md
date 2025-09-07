# XCUXION Landing Page

A modern, responsive landing page for XCUXION - a technology company specializing in startup incubation and acceleration services.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Interactive Elements**: 
  - Working FAQ accordion
  - Contact form with proper styling
  - Hover effects on buttons and links
- **Modern UI**: Clean, professional design with consistent branding
- **Accessibility**: Proper ARIA labels and semantic HTML

## Sections

1. **Header**: Navigation with smooth scrolling to sections
2. **Hero Section**: Main heading, description, and call-to-action
3. **Services Section**: Three-column layout showcasing services
4. **Working Process**: Step-by-step process visualization
5. **Incubation CTA**: Call-to-action for startup programs
6. **Why Choose Us**: Benefits and features with highlights
7. **Testimonials**: Customer reviews with star ratings
8. **FAQ**: Collapsible frequently asked questions
9. **Contact Form**: Complete contact form with validation styling
10. **Footer**: Company information and social links

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library for consistent iconography
- **Vite**: Fast build tool and development server

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd PROJECT
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── index.css            # Global styles and Tailwind imports
└── assets/
    └── images/          # Image assets
        ├── Final Task_Image1.jpeg
        ├── Final Task_image2.jpeg
        └── Final Task_image3.jpeg
```

## Design Implementation

This landing page was created to match a provided Figma design with the following key features:

- **Color Scheme**: Gray and white base with lime green and purple accents
- **Typography**: Clean sans-serif fonts with proper hierarchy
- **Layout**: Grid and flexbox layouts for responsive design
- **Components**: Reusable button styles and consistent spacing
- **Interactions**: Smooth transitions and hover effects

## Assumptions Made

1. **Images**: Used placeholder images from Picsum for demonstration purposes
2. **Form Submission**: Contact form is styled but doesn't submit to a backend
3. **Social Links**: Social media links are placeholder links
4. **Content**: Used Lorem ipsum text for placeholder content
5. **Responsive Breakpoints**: Used Tailwind's default breakpoints (sm, md, lg, xl)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Minimal bundle size with tree shaking
- Fast loading with Vite's development server
- Production build optimized for performance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for evaluation purposes.
