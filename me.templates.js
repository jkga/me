import dynamic from 'next/dynamic'

const defaultTemplatePath = process.env.DEFAULT_TEMPLATE_PATH === '/' ? '' : process.env.DEFAULT_TEMPLATE_PATH
const DefaultTemplate = dynamic(() => import('./pages' + defaultTemplatePath + '/' + process.env.DEFAULT_TEMPLATE))

/**
 * Custom Pages / templates
 */
const HomePage = dynamic(() => import('./pages/homepage'))

export default (props) => {
  return {
    '/default': <DefaultTemplate {...props} />,
    '/homepage': <HomePage {...props} />
  }
}
