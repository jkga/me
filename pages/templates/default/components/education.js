import { Item, Icon, Label, List } from 'semantic-ui-react'
export default (educations) => {
  const items = Array.isArray(educations) && educations.map((val, index) => {
    return (
      <Item key={index}>
        <Item.Content>
          <Item.Header>
            {val.area}
          </Item.Header>
          <Item.Extra>
            <p>
              <Icon name='graduation cap' disabled size='small' />{val.institution}<br />
              <a href='#'>{val.website}</a>
            </p>
            <Label>{val.studyType}</Label>
            <Label>
              From
              <Label.Detail>{val.startDate}</Label.Detail>
            </Label>
            <Label>
              To
              <Label.Detail>{val.endDate}</Label.Detail>
            </Label>
            <Label>
              GPA
              <Label.Detail>{val.gpa}</Label.Detail>
            </Label>
          </Item.Extra>
          <Item.Description>
            {val.summary}
            <List bulleted>
              {val.courses.map((course, i) => <List.Item key={i}>{course}</List.Item>)}
            </List>
          </Item.Description>
        </Item.Content>
      </Item>)
  })
  return (items)
}
