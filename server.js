const 
  express             =   require('express'),
  next                =   require('next'),
  content             =   require ('./lib/content'),
  sampleResumeJson    =   require('./util/sampleResume')
  port                =   parseInt(process.env.PORT, 10) || 3000,
  dev                 =   process.env.NODE_ENV !== 'production',
  app                 =   next({ dev }),
  handle              =   app.getRequestHandler(),
  server              = express();


app.prepare().then(() => {

  server.get('/url', async (req, res) => {
    if(!req.query.url) return;
    let profile = await content.getContentFromURL(req.query.url).catch(e => {})
    let templateURL = req.query.template && req.query.template != 'webpack-hmr' ? '/templates/'+req.params.templateURL : '/templates/default'
    if(!profile) return app.render(req, res, '/errors/404', req)
    return app.render(req, res, templateURL, {profile}) 
  })

  server.get('/:rel/:templateURL?', async (req, res) => {
    let profile = await content.getContentFromGithub(req.params.rel).catch(e => {})
    let templateURL = req.params.templateURL && req.params.templateURL != 'webpack-hmr' ? '/templates/'+req.params.templateURL : '/templates/default'
    if(!profile) return app.render(req, res, '/errors/404', req)
    return app.render(req, res, templateURL.toString(), {profile})
  })

  server.get('/template/preview/:templateURL', async (req, res) => {
    let templateURL = req.params.templateURL && req.params.templateURL != 'webpack-hmr' ? '/templates/'+req.params.templateURL : '/templates/default'
    return app.render(req, res, templateURL.toString(), {profile: JSON.parse(JSON.stringify(sampleResumeJson))}) 
  })

  server.get('/', async (req, res) => {
    return app.render(req, res, '/homepage',{})
  })
 
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`Listening on http://localhost:${port}`)
  })
})