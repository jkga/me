import { Item, Icon, Label, List } from 'semantic-ui-react'
export default (volunteers) => {
  const items = volunteers.map((val, index) => {
    return (
      <Item key={index}>
        <Item.Content>
          <Item.Header>
            {val.position}
          </Item.Header>
          <Item.Extra>
            <p>
              <Icon name='building outline' disabled size='small' /> {val.organization}<br />
              <a href='#'>{val.website}</a>
            </p>
            <Label>
              From
              <Label.Detail>{val.startDate}</Label.Detail>
            </Label>
            <Label>
              To
              <Label.Detail>{val.endDate}</Label.Detail>
            </Label>
          </Item.Extra>
          <Item.Description>
            {val.summary}
            <List bulleted>
              {val.highlights.map((highlight, i) => <List.Item key={i}>{highlight}</List.Item>)}
            </List>
          </Item.Description>
        </Item.Content>
      </Item>)
  })
  return (items)
}
