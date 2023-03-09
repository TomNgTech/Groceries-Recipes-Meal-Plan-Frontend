import React from 'react'
import Typography from '@mui/material/Typography'
import './MealplanCards.css'
import { Button, Grid, Card, CardContent, CardHeader, Container, CardActions } from '@mui/material'

function MealPlanCard (props) {
  return (
    <Card>
      <CardHeader title={props.month} />
      <CardContent>
        <Grid container className='recipeBox' spacing={0} >
          <Grid item xs={6} direction={'column'}>
            <Container>
              <Typography variant="h3" className="recipeNumberStyle">{props.recipeNum}</Typography>
            </Container>
            <Typography variant="h5" className="recipeTypographyStyle">Recipes</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Container className='buttonBox' sx={{ width: 'auto' }}>
          <Button variant="contained" color="primary"
            className='button' onClick={e => props.handleOpen(props.month,
              props.mealplan, props.mealplan.weekInfo)}>View Month Plan</Button>
        </Container>
      </CardActions>
    </Card>
  )
}

export default MealPlanCard
