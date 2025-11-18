# ZisK Documentation

Welcome to the ZisK Documentation repository.

This documentation site provides comprehensive guides for ZisK, a zero-knowledge virtual machine (zkVM) for generating cryptographic proofs of arbitrary program execution. The site is built with Next.js and Nextra, offering a modern, responsive interface with automatic sidebar generation and static export capabilities.

The documentation covers installation guides, developer workflows, API references, optimization techniques, and distributed proof generation. Our goal is to establish a high-quality, curated source of truth for ZisK technology.

The source code for this documentation is available at [https://github.com/amiabix/ZisK-Documentation](https://github.com/amiabix/ZisK-Documentation). The main ZisK project repository is located at [https://github.com/0xPolygonHermez/zisk](https://github.com/0xPolygonHermez/zisk).

## Run Locally

### Prerequisites

Node.js 18.x or higher is required. The project uses npm for package management.

### Setup

Clone the repository and navigate to the root directory. Install dependencies using `npm install`. Once dependencies are installed, start the development server with `npm run dev`.

The documentation site will be available at `http://localhost:3000`. The development server supports hot reloading, so changes to documentation files will be reflected immediately in the browser.

### Building for development

To generate a development build, run `npm run build`. This command generates the sitemap and builds the static site. The output is written to the `out` directory, which can be deployed to any static hosting service.

## Project Structure

Documentation pages are organized in the `pages` directory using Nextra's file-based routing. Each section contains MDX files for content and `_meta.tsx` files that define the sidebar navigation structure. The `pages` directory includes sections for getting started guides, developer documentation, distributed proof generation, optimization techniques, and API references.

Static assets such as images and logos are stored in the `public` directory. Global styles and Tailwind configuration are in the `styles` directory. React components used across the documentation are located in `components`. Build scripts, including sitemap generation, are in the `scripts` directory.

Configuration is handled through `theme.config.tsx` for Nextra theme settings, SEO metadata, and branding, and `next.config.js` for Next.js build configuration. The site uses static export mode, generating fully static HTML files suitable for deployment to any static hosting service.

## Contributing

### Getting Started

Fork the main branch into your own GitHub account and create a feature branch for your changes. Make your changes or additions in your feature branch, ensuring they align with the existing documentation structure and style.

### Contribution Quality

Ensure that your contributions are atomic, well-documented, and tested. Small, self-contained logical updates are preferred over large sweeping changes. Use clear commit messages and explain your changes in the pull request description. Verify that your changes do not break existing functionality and that all code examples work correctly.

Documentation should maintain a professional tone with clear, concise explanations. Technical details must be verified against the actual implementation. Code examples should be complete and include proper error handling where applicable.

### Creating a Pull Request

Once your changes are complete, create a pull request against the main branch of the [ZisK Documentation repository](https://github.com/amiabix/ZisK-Documentation). Your pull request will be reviewed by maintainers, who may request changes or clarifications. Contributors are expected to maintain their contributions over time and update them as necessary to ensure continued accuracy and relevance.

### Best Practices

Stay informed about the latest developments in ZisK technology. Ensure your contributions are coherent with the rest of the documentation and do not overlap or contradict existing content. When adding new features or sections, update related documentation to maintain consistency across the site.

## Deployment

The documentation is configured for static export and can be deployed to any static hosting service. For Vercel, push your code to GitHub and import the repository. Vercel will automatically detect the Next.js configuration and deploy on every push to the main branch.

For other static hosting services, run `npm run build` and deploy the contents of the `out` directory. Configure your hosting service to serve from the root directory. No environment variables are required for basic deployment, though you can optionally set `NEXT_PUBLIC_BASE_URL` to customize the base URL for canonical links and metadata.

## License

ISC
