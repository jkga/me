import { Item, Icon, Label } from 'semantic-ui-react'
export default (publications) => {
  const items = Array.isArray(publications) && publications.map((val, index) => {
    return (
      <Item key={index}>
        <Item.Content>
          <Item.Header>
            {val.name}
          </Item.Header>
          <Item.Extra>
            <p><Icon name='sticky note' disabled size='small' />{val.publisher}<br />
              <a href='#'>{val.website}</a>
            </p>
            <Label>{val.releaseDate}</Label>
          </Item.Extra>
          <Item.Description>{val.summary}</Item.Description>
        </Item.Content>
      </Item>)
  })
  return (items)
}
