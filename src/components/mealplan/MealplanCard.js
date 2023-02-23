import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, Card, CardActions, CardContent, CardHeader, Container } from '@mui/material'
function MealPlanCard (props) {
  return (
    <Card>
      <CardHeader title={props.month} subheader="25 recipes" />
      <CardContent>
        <Container className='recipeBox'>
          <Typography variant="h6">Recipe 1</Typography>
          <Typography variant="h6">Recipe 2</Typography>
          <Typography variant="h6">Recipe 3</Typography>
        </Container>
      </CardContent>
      <CardActions>
        <Button variant="outlined"
          size="large"
          onClick={e => props.setOpenModal(true)}>
          Edit
        </Button>
      </CardActions>
    </Card>
  )
}

export default MealPlanCard
