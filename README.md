# ZisK Docs

A clean, minimalistic, and modern documentation site built with Next.js and Nextra.

## Features

- Clean, professional design inspired by Vercel Docs, Supabase Docs, and Nomic AI Docs
- Dark mode support with smooth transitions
- Auto-generated sidebar from `_meta.json` files
- Responsive design for desktop, tablet, and mobile
- SEO optimized with customizable title templates
- Static export ready for deployment

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

### Export

Generate static export:

```bash
npm run export
```

The static files will be in the `out` directory, ready for deployment to Vercel, GitHub Pages, or any static hosting service.

## Project Structure

```
zisk-docs/
├── pages/              # Documentation pages (routes)
│   ├── getting-started/ # Getting started guides
│   ├── developer/       # Developer documentation
│   ├── distributed/     # Distributed proof generation
│   ├── optimization/    # Optimization guides
│   └── reference/       # API reference
├── content/            # Content source (organized structure)
│   ├── architecture/   # Architecture content
│   └── reference/      # API reference content
├── public/             # Static assets
│   └── logo.svg       # Project logo
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS and custom styles
├── theme.config.tsx    # Nextra theme configuration
├── next.config.js      # Next.js configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

Note: Nextra reads documentation from the `pages` directory. The `content` directory serves as an organizational structure. Documentation files (`.mdx`) should be placed in `pages` for Nextra to process them.

## Configuration

### Theme Configuration

Edit `theme.config.tsx` to customize:

- Logo and branding
- GitHub repository links
- Footer text
- Search placeholder
- Primary color hue
- SEO settings

### Content Organization

Documentation pages are organized in the `pages` directory. Each section can have a `_meta.json` file to control sidebar navigation:

```json
{
  "index": "Overview",
  "getting-started": "Getting Started",
  "configuration": "Configuration"
}
```

### Styling

Global styles are in `styles/globals.css`. Tailwind CSS is configured in `tailwind.config.js`.

## Deployment

### Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### GitHub Pages

1. Build and export the site:
   ```bash
   npm run export
   ```

2. Deploy the `out` directory to GitHub Pages

### Other Static Hosting

The `out` directory contains all static files needed for deployment to any static hosting service.

## License

ISC

