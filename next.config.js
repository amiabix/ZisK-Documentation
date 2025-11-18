const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  poweredByHeader: false,
}

module.exports = withNextra(nextConfig)

