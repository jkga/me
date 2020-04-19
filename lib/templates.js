import dynamic from 'next/dynamic'

const DefaultPage = dynamic(() => import('../pages/templates/default'))
const HomePage = dynamic(() => import('../pages/homepage'))
const PageNotFound = dynamic(() => import('../pages/errors/404'))

export default (name, props) => {
  if (name === '/templates/default') return <DefaultPage {...props} />
  if (name === '/templates/homepage') return <HomePage {...props} />
  if (name === '/404') return <PageNotFound {...props} />

  return <HomePage {...props} />
}
