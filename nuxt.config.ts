export default defineNuxtConfig({
  extends: ['docus'],

  site: {
    name: 'ZisK',
  },

  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'diff', 'json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', 'rust', 'toml', 'solidity'],
        },
      },
    },
  },

  compatibilityDate: '2025-07-22',
})
