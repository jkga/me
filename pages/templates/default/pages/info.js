/* eslint-disable max-len */
import { Segment, Header, Item, Label, Responsive } from 'semantic-ui-react'
import WorkComponent from '../components/work'
import VolunteerComponent from '../components/volunteer'
import EducationComponent from '../components/education'
import AwardComponent from '../components/awards'
import PublicationComponent from '../components/publications'

const Template = (props) => {
  return (
    <Responsive>
      <Header as='h3'>
          Work Experience
      </Header>
      <Segment><Item.Group>{WorkComponent(props.profile.work)}</Item.Group></Segment>

      <Header as='h3'>
          Education
      </Header>
      <Segment><Item.Group>{EducationComponent(props.profile.education)}</Item.Group></Segment>

      <Header as='h3'>
          Volunteer
      </Header>
      <Segment><Item.Group>{VolunteerComponent(props.profile.volunteer)}</Item.Group></Segment>

      <Header as='h3'>
          Awards
      </Header>
      <Segment><Item.Group>{AwardComponent(props.profile.awards)}</Item.Group></Segment>

      <Header as='h3'>
          Publications
      </Header>
      <Segment><Item.Group>{PublicationComponent(props.profile.publications)}</Item.Group></Segment>

      <Header as='h3' dividing>
          Interests
      </Header>
      <div>
        {props.profile.interests.map((val, index) => {
          return (
            <Label key={index}>
              {val.name}
              <Label.Detail>
                {val.keywords.map((keyword, indexKeyword) => {
                  return (<span key={indexKeyword}> #{keyword} </span>)
                })}
              </Label.Detail>
            </Label>)
        })}
      </div>

      <Header as='h3' dividing>
          Languages
      </Header>
      <div>
        {props.profile.languages.map((val, index) => {
          return (
            <Label key={index}>
              {val.language}
              <Label.Detail>{val.fluency}</Label.Detail>
            </Label>)
        })}
      </div>

      <Header as='h3' dividing>
          References
      </Header>

      <Item.Group link>
        {props.profile.references.map((val, index) => {
          return (
            <Item key={index}>
              {val.image || val.picture ? <Item.Image size='tiny' src={val.image || val.picture} /> : <></>}
              <Item.Content>
                <Item.Header>{val.name}</Item.Header>
                <Item.Description>{val.reference || 'N/A'}</Item.Description>
              </Item.Content>
            </Item>)
        })}
      </Item.Group>
    </Responsive>)
}

Template.getInitialProps = async ctx => {
  return { ...ctx }
}

export default Template
