export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
    },
  },
  seo: {
    title: 'ZisK Documentation',
    description: 'ZisK is a zkVM that lets you write ordinary Rust programs and prove their execution with zero-knowledge cryptography.',
  },
  header: {
    title: 'ZisK',
    logo: {
      light: '/logo.png',
      dark: '/logo.png',
      alt: 'ZisK',
    },
  },
  socials: {
    github: 'https://github.com/0xPolygonHermez/zisk',
    x: 'https://x.com/ziskvm',
    discord: 'https://discord.gg/bh2b7JurXH',
  },
  toc: {
    title: 'On this page',
  },
  github: {
    url: 'https://github.com/0xPolygonHermez/zisk',
    branch: 'main',
  },
})
