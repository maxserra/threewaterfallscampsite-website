# Three Waterfalls Campsite Website

A simple informational website for Three Waterfalls Campsite, built with Vue 3 and Vite, deployed on GitHub Pages.

## Overview

This website provides information about the Three Waterfalls Campsite history, accommodation options, and contact information. 

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and dev server
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - Automated deployment

## Prerequisites

- Node.js 18+ and npm
- Git

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/maxserra/threewaterfallscampsite-website.git
cd threewaterfallscampsite-website
npm install
```

## Development

### Local Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The site is automatically deployed to GitHub Pages when you push to the `main` branch:

1. Make your changes and commit them
2. Push to the `main` branch
3. GitHub Actions will automatically build and deploy the site

### Manual Deployment Setup

If GitHub Actions isn't configured yet:

1. Go to your repository Settings > Pages
2. Under "Build and deployment", set Source to "GitHub Actions"
3. The workflow file at `.github/workflows/deploy.yml` handles the rest

## Content Management

### Updating Content

Content is stored in JavaScript data files for easy editing:

- `src/data/content.js` - Text content for pages
- `src/data/accommodations.js` - Accommodation information
- `src/data/gallery.js` - Image paths for galleries

To update content:
1. Edit the relevant file in `src/data/`
2. Commit and push to `main`
3. GitHub Actions will rebuild and deploy automatically

### Adding Images

1. Add images to the `public/images/` directory
2. Use descriptive filenames (e.g., `cabin-exterior-1.jpg`, `hero-waterfall.jpg`)
3. Reference images in data files as `/images/filename.jpg`
4. Consider optimizing images before adding (use tools like TinyPNG or Squoosh)

## Project Structure

```
/
├── .github/workflows/       # GitHub Actions deployment
├── public/                  # Static assets
│   └── images/              # Campsite photos
├── src/
│   ├── assets/styles/       # Global CSS
│   ├── components/          # Reusable Vue components
│   ├── views/               # Page components
│   ├── data/                # Content data files
│   ├── App.vue              # Root component
│   └── main.js              # Entry point
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
└── vite.config.js           # Vite configuration
```

## Architecture

This project uses a simple hash-based navigation system (no Vue Router) since it only has 2-3 pages. The `App.vue` component manages the current view state and conditionally renders the appropriate view component.

### Components

- **TheHeader.vue** - Site header with navigation
- **TheFooter.vue** - Footer with contact information
- **ImageGallery.vue** - Reusable image gallery component
- **ContactSection.vue** - Contact information display

### Views

- **HomeView.vue** - Home page with hero and welcome
- **AboutView.vue** - Campsite history and facilities
- **AccommodationView.vue** - Accommodation options

## Design

The site uses a natural/earthy color palette (browns, greens, blues) to reflect the outdoor camping experience. The design is mobile-first and fully responsive.

## Future Enhancements

Possible additions as the site grows:
- Contact form integration
- Online booking system
- Vue Router for cleaner URLs
- CMS integration for easier content management
- Image optimization plugins
- Animations and transitions

## License

Copyright (c) 2026 Three Waterfalls Campsite
