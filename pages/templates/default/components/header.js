import { Container, Label } from 'semantic-ui-react'
import styles from '../style.module.css'

export default (props) => {
  return (
    <header className={styles.mainHeader}>
      <Container>
        <Label>
          {props.profile.basics.name} / <Label.Detail as='a' href={props.profile.basics.website} target='_blank' rel='noopener norefer'>{props.profile.basics.website}</Label.Detail>
        </Label>
      </Container>
    </header>)
}
