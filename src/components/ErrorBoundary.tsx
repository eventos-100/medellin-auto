'use client'

import React from 'react'

interface Props {
  children: React.ReactNode
  fallback?: React.ComponentType<{error: Error}>
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // In production, you might want to log this to an external service
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Log to monitoring service
      console.error('Production error:', { error, errorInfo })
    }
  }

  render() {
    if (this.state.hasError) {
      const Fallback = this.props.fallback || DefaultErrorFallback
      return <Fallback error={this.state.error!} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error }: { error: Error }) {
  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ color: '#d32f2f', marginBottom: '16px' }}>
        Something went wrong
      </h2>
      <p style={{ color: '#666', marginBottom: '16px' }}>
        We encountered an unexpected error. Please try refreshing the page.
      </p>
      {process.env.NODE_ENV === 'development' && (
        <details style={{ 
          whiteSpace: 'pre-wrap',
          textAlign: 'left',
          backgroundColor: '#fff',
          padding: '12px',
          borderRadius: '4px',
          border: '1px solid #ddd'
        }}>
          <summary style={{ cursor: 'pointer', marginBottom: '8px' }}>
            Error Details (Development Only)
          </summary>
          {error && error.toString()}
        </details>
      )}
      <button 
        onClick={() => window.location.reload()}
        style={{
          marginTop: '16px',
          padding: '8px 16px',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Refresh Page
      </button>
    </div>
  )
}
