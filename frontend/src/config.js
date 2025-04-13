// Configuration for different environments
const config = {
  // Development environment
  development: {
    apiUrl: 'http://localhost:5000/api',
  },
  
  // Production environment
  production: {
    apiUrl: '/api', // In production, API requests are often proxied through the same domain
  },
  
  // Testing environment
  test: {
    apiUrl: 'http://localhost:5000/api',
  }
};

// Determine which environment we're in
const env = process.env.NODE_ENV || 'development';

// Export the configuration for the current environment
export default config[env]; 