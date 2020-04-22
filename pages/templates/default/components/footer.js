import { Container } from 'semantic-ui-react'
const year = new Date().getFullYear()
export default (props) => {
  return (
    <footer style={{ height: '5vh', marginTop: '5vh' }}>
      <Container textAlign='right' style={{ color: 'gray' }}><small>copyright@{year}</small></Container>
    </footer>)
}
