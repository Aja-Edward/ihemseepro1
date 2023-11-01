const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy()({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      }
    }
    return config
  },
})
