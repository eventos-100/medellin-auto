'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="error-container">
      <div className="error-content">
        <h2>Something went wrong!</h2>
        <p>We encountered an unexpected error while loading this page.</p>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="error-details">
            <summary>Error Details (Development)</summary>
            <pre>{error.message}</pre>
            {error.digest && <p>Error ID: {error.digest}</p>}
          </details>
        )}
        
        <div className="error-actions">
          <button onClick={reset} className="retry-button">
            Try again
          </button>
          <button onClick={() => window.location.href = '/'} className="home-button">
            Go home
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .error-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 50vh;
          padding: 2rem;
        }
        
        .error-content {
          text-align: center;
          max-width: 500px;
          padding: 2rem;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background: #f9f9f9;
        }
        
        h2 {
          color: #d32f2f;
          margin-bottom: 1rem;
        }
        
        p {
          color: #666;
          margin-bottom: 1.5rem;
        }
        
        .error-details {
          text-align: left;
          background: white;
          padding: 1rem;
          border-radius: 4px;
          margin: 1rem 0;
          border: 1px solid #ddd;
        }
        
        .error-details pre {
          white-space: pre-wrap;
          word-break: break-word;
          font-size: 0.875rem;
        }
        
        .error-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .retry-button, .home-button {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .retry-button {
          background-color: #1976d2;
          color: white;
        }
        
        .retry-button:hover {
          background-color: #1565c0;
        }
        
        .home-button {
          background-color: #f5f5f5;
          color: #666;
          border: 1px solid #ddd;
        }
        
        .home-button:hover {
          background-color: #eeeeee;
        }
      `}</style>
    </div>
  )
}
