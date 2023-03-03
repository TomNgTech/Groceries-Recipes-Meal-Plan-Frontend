import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, Grid, Card, CardContent, CardHeader, Container, CardActions } from '@mui/material'
import { getRecipeById } from '../Api'
function MealPlanCard (props) {
  let recipeNum = 0
  let ingredientNum = 0
  const weekPlans = props.mealplans.weekInfo

  for (let i = 0; i < props.mealplans.weekInfo.length; i++) {
    const dishes = weekPlans.where(weekPlans => weekPlans.weekNum === i)
    console.log(dishes)
    for (let j = 0; j < dishes.length; j++) {
      recipeNum++
      const recipe = getRecipeById(dishes[j].dishId)
      ingredientNum += recipe.ingredients.length
    }
  }

  return (
        <Card>
            <CardHeader title={props.month}/>
            <CardContent>
            <Grid container className='recipeBox' spacing={0} >
                <Grid item xs={6} direction={'column'}>
                  <Container>
                    <Typography variant="h3">{recipeNum}</Typography>
                  </Container>
                  <Typography variant="h5">Recipes</Typography>
                </Grid>
                <Grid item xs={6} direction={'column'}>
                  <Container>
                    <Typography variant="h3">{ingredientNum}</Typography>
                  </Container>
                  <Typography variant="h5">Ingredients</Typography>
                </Grid>
            </Grid>
            </CardContent>
            <CardActions>
              <Container className='buttonBox' sx={{ width: 'auto' }}>
              <Button variant="contained" color="primary" className='button'>View Meal Plan</Button>
              </Container>
            </CardActions>
        </Card>
  )
}

export default MealPlanCard
