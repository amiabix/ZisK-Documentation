const withNextra = require('nextra').default({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  poweredByHeader: false,
})

