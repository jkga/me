/**
 * Template bootstrap
 *
 */
import dynamic from 'next/dynamic'
import templates from '../me.templates'

const defaultTemplatePath = process.env.DEFAULT_TEMPLATE_PATH === '/' ? '' : process.env.DEFAULT_TEMPLATE_PATH

/**
 * Application error page
 * PLEASE DO NOT MODIFY the default error pages if not necessary
 */
const PageNotFound = dynamic(() => import('../pages/errors/404'))
const TemplateNotFound = dynamic(() => import('../pages/errors/404-template'))

export default (name, props) => {
  for (const [key, value] of Object.entries(templates(props))) {
    if (name === defaultTemplatePath + key) return value
  }

  if (name === '/404') return <PageNotFound {...props} />
  return <TemplateNotFound {...props} />
}
