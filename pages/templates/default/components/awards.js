import { Item, Icon, Label } from 'semantic-ui-react'
export default (awards) => {
  const items = Array.isArray(awards) && awards.map((val, index) => {
    return (
      <Item key={index}>
        <Item.Content>
          <Item.Header>
            {val.title}
          </Item.Header>
          <Item.Extra>
            <p><Icon name='trophy' disabled size='small' /> {val.awarder}</p>
            <Label>{val.date}</Label>
          </Item.Extra>
          <Item.Description>{val.summary}</Item.Description>
        </Item.Content>
      </Item>)
  })
  return (items)
}
