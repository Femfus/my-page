# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- ⚡ **Fast**: Built with Vite for lightning-fast development and optimized production builds
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 📱 **Mobile-First**: Fully responsive across all devices
- 🔷 **TypeScript**: Type-safe code for better development experience
- 🎯 **SEO-Friendly**: Optimized for search engines
- 🎭 **Smooth Animations**: Engaging user experience with smooth transitions

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd "Portfolio website"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
Portfolio website/
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Skills.tsx      # Skills section
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite config
└── tailwind.config.js      # Tailwind config
```

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Replace "Your Name" with your name
   - Update job title and description
   - Add your social media links

2. **About Section** (`src/components/About.tsx`):
   - Update the about text with your story

3. **Projects Section** (`src/components/Projects.tsx`):
   - Replace placeholder projects with your actual projects
   - Update images, descriptions, and links

4. **Skills Section** (`src/components/Skills.tsx`):
   - Add your actual skills and technologies

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update email, phone, and location
   - Integrate with a form service (e.g., Formspree, EmailJS)

6. **Footer** (`src/components/Footer.tsx`):
   - Update social links and copyright information

### Styling

- Modify `tailwind.config.js` to customize colors, fonts, and other design tokens
- Update `src/index.css` for global styles

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update navigation links in `src/components/Header.tsx`

## Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite configuration

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Contributing

Contributions, issues, and feature requests are welcome!

## Support

If you like this project, please give it a ⭐!
