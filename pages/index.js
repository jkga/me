/**
 * Bootstrap
 *
 * This file loads the default page of your application
 * PLEASE DO NOT REMOVE OR MODIFY THIS FILE
 * if you need to change the default template, please add the configuration below
 * in your next.config.js
 * https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
 *
 * publicRuntimeConfig: {
 *    defaultTemplate: '/homepage'
 * },
 */
import loadTemplate from '../lib/templates'

export default (props) => {
  return (loadTemplate(process.env.DEFAULT_TEMPLATE_PATH + process.env.DEFAULT_PAGE, { ...props }))
}
