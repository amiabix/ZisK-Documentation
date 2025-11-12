# ZisK Documentation

Documentation site for ZisK, a zero-knowledge virtual machine (zkVM) for generating cryptographic proofs of program execution. Built with Next.js and Nextra.

## Overview

This repository contains the complete documentation for ZisK, including installation guides, developer documentation, API references, and optimization guides. The documentation is built using Next.js and Nextra, providing a modern, responsive interface with automatic sidebar generation and static export capabilities.

## Technology Stack

- **Next.js**: React framework for production
- **Nextra**: Documentation framework built on Next.js
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **MDX**: Markdown with JSX support

## Development

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

Install project dependencies:

```bash
npm install
```

### Local Development

Start the development server:

```bash
npm run dev
```

The documentation will be available at `http://localhost:3000`.

### Building for Production

Generate a production build:

```bash
npm run build
```

### Static Export

Generate static files for deployment:

```bash
npm run export
```

Static files are output to the `out` directory and can be deployed to any static hosting service.

## Project Structure

```
zisk-docs/
├── pages/                  # Documentation pages (Nextra routes)
│   ├── getting-started/    # Installation and quickstart guides
│   ├── developer/          # Developer documentation
│   ├── distributed/        # Distributed proof generation
│   ├── optimization/       # Performance optimization guides
│   └── reference/          # API reference and utilities
├── content/                # Legacy content structure
├── public/                 # Static assets (images, logos)
├── styles/                 # Global styles and Tailwind configuration
├── components/             # React components
├── scripts/                # Build and utility scripts
├── theme.config.tsx        # Nextra theme configuration
├── next.config.js          # Next.js configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## Documentation Organization

Documentation pages are organized in the `pages` directory. Each section uses `_meta.tsx` files to define sidebar navigation structure. Pages are written in MDX format, allowing for React components and interactive elements.

### Navigation Structure

Sidebar navigation is automatically generated from `_meta.tsx` files in each directory:

```typescript
export default {
  'getting-started': 'Getting Started',
  'developer': 'Developer Guide',
  'reference': 'Reference',
}
```

## Configuration

### Theme Configuration

The `theme.config.tsx` file contains:

- Logo and branding settings
- GitHub repository links
- Footer configuration
- SEO metadata and Open Graph tags
- Search configuration

### Styling

Global styles are defined in `styles/globals.css`. Tailwind CSS utilities are configured in `tailwind.config.js`. The design uses a minimal color palette with Victorian Peak (#007755) as the primary accent color.

### SEO Configuration

Per-page metadata is configured in `theme.config.tsx`, including:

- Meta descriptions
- Canonical URLs
- Open Graph tags
- Twitter Card metadata
- Schema.org JSON-LD markup

Sitemap generation is handled by `scripts/generate-sitemap.js` and outputs to `public/sitemap.xml`.

## Deployment

### Vercel

Recommended deployment platform:

1. Push code to GitHub
2. Import repository in Vercel
3. Vercel automatically detects Next.js configuration
4. Deployment occurs on every push to main branch

### Static Hosting

For static hosting services (GitHub Pages, Netlify, etc.):

1. Run `npm run export`
2. Deploy the `out` directory contents
3. Configure the hosting service to serve from the root directory

### Environment Variables

No environment variables are required for basic deployment. All configuration is handled through `theme.config.tsx` and `next.config.js`.

## Content Guidelines

Documentation follows these principles:

- **Clarity**: Clear, concise explanations without unnecessary verbosity
- **Accuracy**: Technical details verified against implementation
- **Completeness**: Comprehensive coverage of features and use cases
- **Professional tone**: Formal language without marketing terminology
- **Code examples**: Working examples with proper error handling

## Contributing

Documentation improvements should:

1. Maintain consistency with existing style and structure
2. Follow the established formatting guidelines
3. Include code examples where applicable
4. Update related documentation when adding new features
5. Verify all links and code examples before submitting

## License

ISC
