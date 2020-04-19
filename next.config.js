// next.config.js
module.exports = {
  experimental: {
    serverless: true,
    async rewrites () {
      return [
        { source: '/:username/:template?', destination: '/user' },
        { source: '/preview/templates/:template', destination: '/preview' },
        { source: '/', destination: '/homepage' }
      ]
    },
    catchAllRouting: true
  }
}
