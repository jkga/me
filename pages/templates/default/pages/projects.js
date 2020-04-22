/* eslint-disable max-len */
import { Responsive, Card } from 'semantic-ui-react'
import ProjectComponent from '../components/projects'

const Template = (props) => {
  return (
    <Responsive>
      <Card.Group itemsPerRow={3} centered doubling>
        {ProjectComponent(props.profile.projects)}
      </Card.Group>
    </Responsive>)
}

Template.getInitialProps = async ctx => {
  return { ...ctx }
}

export default Template
