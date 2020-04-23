module.exports = {
  experimental: {
    serverless: true,
    async rewrites () {
      return [
        { source: '/:username/:template?', destination: '/user' },
        { source: '/preview/templates/:template', destination: '/preview' },
        { source: '/', destination: '/' }
      ]
    },
    catchAllRouting: true
  },
  env: {
    DEFAULT_TEMPLATE_PATH: '/templates',
    DEFAULT_TEMPLATE: 'default',
    DEFAULT_PAGE: '/homepage'
  }
}
