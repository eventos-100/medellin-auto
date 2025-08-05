export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Server-side monitoring initialization
    console.log('🚀 Med Auto server monitoring initialized')
    
    // Performance monitoring
    const startTime = Date.now()
    
    // Log startup metrics
    console.log('📊 Startup metrics:', {
      nodeVersion: process.version,
      platform: process.platform,
      memory: process.memoryUsage(),
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
    })
    
    // Monitor uncaught exceptions
    process.on('uncaughtException', (error) => {
      console.error('🚨 Uncaught Exception:', error)
      // In production, you'd want to log this to an external service
    })
    
    process.on('unhandledRejection', (reason, promise) => {
      console.error('🚨 Unhandled Rejection at:', promise, 'reason:', reason)
      // In production, you'd want to log this to an external service
    })
    
    // Performance monitoring
    const loadTime = Date.now() - startTime
    console.log(`⚡ Server loaded in ${loadTime}ms`)
  }
  
  if (process.env.NEXT_RUNTIME === 'edge') {
    // Edge runtime monitoring
    console.log('⚡ Med Auto edge runtime initialized')
  }
}
