const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching: [
      // {
      // 	urlPattern: /\//,
      // 	handler: 'NetworkFirst'
      // },
      {
        urlPattern: /\.css$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cached-css',
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 30 days
          },
        },
      },
      {
        urlPattern: /\.(png|svg|jpg|jpeg|ico|gif)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cached-images',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          },
        },
      },
      {
        urlPattern: /\.(ttf|otf|woff2|woff)/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cached-fonts',
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          },
        },
      },
      {
        urlPattern: /https:\/\/sanish.me\/js\/.*\.js/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cached-static-js',
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          },
        },
      },
      {
        urlPattern: /https:\/\/fonts.gstatic.com/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cached-google-fonts',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
        },
      },
      {
        urlPattern: /https:\/\/cdn.jsdelivr.net\/.*\.css/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'external-jsdelivr-cdn-css',
          expiration: {
            maxEntries: 2,
            maxAgeSeconds: 15 * 24 * 60 * 60, // 15 day
          },
        },
      },
      {
        urlPattern: /https:\/\/jsonplaceholder.typicode.com/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'cached-apis',
          expiration: {
            maxEntries: 2,
            maxAgeSeconds: 1 * 24 * 60 * 60, // 1 day
          },
        },
      },
      {
        urlPattern: /\//,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  }
})