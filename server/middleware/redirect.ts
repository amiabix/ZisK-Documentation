export default defineEventHandler((event) => {
  if (event.path === '/' || event.path === '') {
    return sendRedirect(event, '/getting-started/install-linux', 301)
  }
})
