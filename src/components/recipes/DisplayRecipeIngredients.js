import { ListItem } from '@mui/material'
import * as React from 'react'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'

export default function DisplayRecipeIngredients (props) {
  const items = []
  console.log('length: ' + props.ingredients.length)
  for (let i = 0; i < props.ingredients.length; i++) {
    const description = props.ingredients[i].name + ' ' + props.ingredients[i].quantity + ' ' + props.ingredients[i].measurementType
    const item =
        <ListItem key={props.ingredients[i].name}>
            <ListItemText primary={description} />
        </ListItem>
    items.push(item)
  };

  return (
    <List>
        {items}
    </List>
  )
}
