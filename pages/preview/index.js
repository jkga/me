import { useState, useEffect } from 'react'
import loadTemplate  from '../../lib/templates'
import dummyProfile from '../../util/sampleResume'


const Preview = (props) => {
  const [currentTemplate, setCurrentTemplate] = useState(<div>loading</div>)
  useEffect(() => {
    setCurrentTemplate(loadTemplate(props.template, {...props, profile: JSON.parse(JSON.stringify(dummyProfile))}))
  }, [])
  return (<div>{currentTemplate}</div>)
}

Preview.getInitialProps = async function(http) {
  const template = http.query.template && http.query.template != 'webpack-hmr' ? '/templates/'+http.query.template : '/templates/default'
  return {template}
}

export default Preview