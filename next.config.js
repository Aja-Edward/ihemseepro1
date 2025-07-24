const { withPlausibleProxy } = require('next-plausible');

module.exports = withPlausibleProxy()({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    }
    return config;
  },
  transpilePackages: ['pdfjs-dist'], // Use Next.js 13+ built-in transpilation instead of next-transpile-modules
});