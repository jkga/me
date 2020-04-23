import { Container, Header, Icon } from 'semantic-ui-react'
const code = '{ error: TEMPLATE_NOT_FOUND }'

export default (req) => {
  return (
    <Container>
      <Header as='h1' style={{ marginTop: '20vh' }}>
        Template not found
        <Header.Subheader>
          <Icon name='warning' />
          The template you are trying to load does not exists. Please check if the directory is present
          inside <b>/template</b> directory. You might also need to check your default themplate configuration
          in <b>next.config.js</b>.
        </Header.Subheader>
      </Header>
      <code style={{ padding: '20px', background: '#000', color: '#fff', width: '100%', float: 'left' }}>
        {code.toString()}
      </code>
    </Container>)
}
