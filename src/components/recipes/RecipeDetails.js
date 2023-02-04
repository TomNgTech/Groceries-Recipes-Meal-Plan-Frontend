import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import DisplayRecipeIngredients from './displayRecipeIngredients'
import { Button } from '@mui/material'
import Container from '@mui/material/Container'

export default function RecipeDetails (props) {
  const style = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }

  return (
    <Box sx={style}>
      <Typography variant="h3" className="center">
        {props.dishName}
      </Typography>
      <Typography variant="h4" className="center">
        Ingredients
      </Typography>
      <Container>
        <DisplayRecipeIngredients ingredients={props.ingredients} />
      </Container>
      <div className="center">
        <Button onClick={props.handleClose}>Close Modal</Button>
      </div>
    </Box>
  )
}
