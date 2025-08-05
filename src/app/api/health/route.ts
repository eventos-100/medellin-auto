import { NextResponse } from 'next/server'

export async function GET() {
  const startTime = Date.now()
  
  try {
    // Basic health check
    const healthCheck = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'production',
      responseTime: Date.now() - startTime,
      
      // System information
      system: {
        memory: process.memoryUsage(),
        uptime: process.uptime(),
        platform: process.platform,
        nodeVersion: process.version,
      },
      
      // Application status
      application: {
        name: 'med-auto',
        framework: 'Next.js',
        ready: true,
      },
      
      // Environment checks
      environment_check: {
        webflow_site_id: !!process.env.WEBFLOW_SITE_ID,
        webflow_api_token: !!process.env.WEBFLOW_SITE_API_TOKEN,
      }
    }

    return NextResponse.json(healthCheck, { 
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    })
    
  } catch (error) {
    const errorResponse = {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      responseTime: Date.now() - startTime,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
    
    return NextResponse.json(errorResponse, { 
      status: 503,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    })
  }
}

export async function HEAD() {
  // Quick health check for load balancers
  return new Response(null, { status: 200 })
}
