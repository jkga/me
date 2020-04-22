/* eslint-disable max-len */
import { createRef } from 'react'
import { Grid, Container, Header, Message, Image, Label, Responsive, Icon, Tab, Sticky, Ref } from 'semantic-ui-react'
import dynamic from 'next/dynamic'
import MainHeader from './components/header'
import MainFooter from './components/footer'

const Template = (props) => {
  const ref = createRef()
  const panes = [
    {
      menuItem: 'Personal Information',
      render: () => {
        const InfoPage = dynamic(() => import('./pages/info'))
        return (
          <Tab.Pane attached style={{ border: 'none' }}>
            <InfoPage {...props} />
          </Tab.Pane>
        )
      }
    },
    {
      menuItem: 'Projects',
      render: () => {
        const ProjectPage = dynamic(() => import('./pages/projects'))
        return (
          <Tab.Pane attached style={{ border: 'none' }}>
            <ProjectPage {...props} />
          </Tab.Pane>
        )
      }
    }
  ]

  return (
    <Ref innerRef={ref}>
      <Responsive>
        <Sticky context={ref}>
          <MainHeader {...props} />
        </Sticky>

        <Container>
          <Grid>
            <Grid.Column computer={4} tablet={3} mobile={16}>
              {props.profile.basics.picture || props.profile.basics.image ? <Image centered fluid src={props.profile.basics.picture || props.profile.basics.image} /> : undefined}
              <p style={{ textAlign: 'justify' }}>{props.profile.basics.summary}</p>
              <p><a href={props.profile.basics.website}>{props.profile.basics.website}</a></p>
              <Label color='black'>{props.profile.basics.label}</Label>
            </Grid.Column>
            <Grid.Column computer={12} tablet={13} mobile={16}>
              <Header as='h1'>
                {props.profile.basics.name}
                <Header.Subheader>
                  <Icon name='map marker alternate' />
                  {props.profile.basics.location.address} {props.profile.basics.location.city} {props.profile.basics.location.region}<br />
                  {props.profile.basics.email ? <small><Icon name='mail' /> {props.profile.basics.email}</small> : undefined}
                </Header.Subheader>
              </Header>
              <Message>
                <Message.Header>My  Networks</Message.Header>
                <Message.List>
                  {props.profile.basics.profiles.map((val, index) => {
                    return (<Message.Item key={index}><b>{val.network}:</b> <a href={val.url} target='_blank' rel='noopener noreferrer'>{val.url}</a></Message.Item>)
                  })}
                </Message.List>
              </Message>

              <Header as='h3' dividing>
                  Skills
              </Header>
              {props.profile.skills.map((val, index) => {
                return (
                  <Label key={index} color='black' style={{ marginBottom: 5 }}>
                    {val.name}
                    <Label.Detail>
                      {val.keywords.map((keyword, indexKeyword) => {
                        return (<span key={indexKeyword}> #{keyword} </span>)
                      })}
                    </Label.Detail>
                  </Label>)
              })}

              <Tab menu={{ secondary: true, pointing: true }} style={{ marginTop: 30 }} panes={panes} />
            </Grid.Column>
          </Grid>
        </Container>
        <MainFooter {...props} />
      </Responsive>
    </Ref>)
}

Template.getInitialProps = async ctx => {
  return { ...ctx }
}

export default Template
