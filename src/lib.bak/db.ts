import { drizzle } from 'drizzle-orm/d1'
import * as schema from './schema'

// Database connection utility
export function getDatabase(env?: { DB: D1Database }) {
  if (!env?.DB) {
    throw new Error('Database not available')
  }
  
  return drizzle(env.DB, { schema })
}

// For development/local usage
export function getLocalDatabase() {
  // This would be used with local D1 database
  // Implementation depends on your local setup
  throw new Error('Local database not configured')
}

// Type exports
export type Database = ReturnType<typeof getDatabase>
export * from './schema'
