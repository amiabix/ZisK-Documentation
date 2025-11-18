export default function Custom404() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '60vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem', color: 'var(--brand-gray)' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a 
        href="/"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--brand-victorian-peak)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.375rem',
          display: 'inline-block',
        }}
      >
        Go to Homepage
      </a>
    </div>
  )
}

