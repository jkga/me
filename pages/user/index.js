import axios from 'axios'
import { useState, useEffect } from 'react'
import loadTemplate from '../../lib/templates'

const apiSlash = process.env.NODE_ENV === 'development' ? '' : '/'
const defaultThemePath = process.env.DEFAULT_TEMPLATE_PATH === '/' ? '' : process.env.DEFAULT_TEMPLATE_PATH
const defaultThemeName = defaultThemePath + '/' + process.env.DEFAULT_TEMPLATE

const User = (props) => {
  const [currentTemplate, setCurrentTemplate] = useState(<div>loading</div>)
  if (process.env.GITHUB_USERNAME) return (<></>)
  useEffect(() => {
    if (props.profile.error) return setCurrentTemplate(loadTemplate('/404', { ...props }))
    return setCurrentTemplate(loadTemplate(props.template, { ...props }))
  }, [])
  return (<div>{currentTemplate}</div>)
}

User.getInitialProps = async function (http) {
  const params = new URLSearchParams(http.query).toString()
  const URI = (http.req.headers.host.indexOf('http://') || http.req.headers.host.indexOf('https://') ? 'http://' : '') + `${http.req.headers.host}/api/user${apiSlash}?${params}`
  const profile = await axios.get(URI)
  const template = http.query.template && http.query.template !== 'webpack-hmr' ? defaultThemePath + '/' + http.query.template : defaultThemeName
  return { profile: profile.data, template }
}

export default User
