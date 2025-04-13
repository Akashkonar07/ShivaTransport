module.exports = function override(config, env) {
  // Add an ignoreWarnings configuration
  config.ignoreWarnings = [
    // Ignore warnings about missing source maps in lucide-react
    function ignoreSourcemapsloaderWarnings(warning) {
      return (
        warning.module &&
        warning.module.resource &&
        (warning.module.resource.includes('node_modules/lucide-react') ||
         warning.module.resource.includes('node_modules/framer-motion'))
      );
    },
    // Ignore warnings raised by React 19
    function ignoreReactWarnings(warning) {
      return (
        warning.message && 
        (warning.message.includes('react-dom') || 
         warning.message.includes('ReactDOM'))
      );
    }
  ];

  // Optimize for performance
  if (env === 'production') {
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    };
  }

  return config;
}; 