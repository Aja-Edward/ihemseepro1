// const { withPlausibleProxy } = require('next-plausible')

// module.exports = withPlausibleProxy()({
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback = {
//         fs: false,
//         module: false,
//       }
//     }
//     return config
//   },
// })

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
  turbopack: {
    rules: {
      '*.css': {
        loaders: [{
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: {
                "@tailwindcss/postcss": {},
              },
            },
          },
        }],
      },
    },
  },
})