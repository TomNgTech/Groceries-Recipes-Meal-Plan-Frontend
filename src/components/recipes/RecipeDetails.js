import * as React from 'react'
import Typography from '@mui/material/Typography'
import './Recipes.css'
import Box from '@mui/material/Box'
import DisplayRecipeIngredients from './DisplayRecipeIngredients'
import { Button, TextField, Grid } from '@mui/material'
import RecipeIngredientsTable from './addrecipe/RecipeIngredientsTable.js'
import IngredientOptions from './addrecipe/IngredientOptions'
import Container from '@mui/material/Container'

export default function RecipeDetails (props) {
  const [ingredients, setIngredients] = React.useState(props.recipe.ingredients)
  const [edit, setEdit] = React.useState(false)
  const [recipeName, setRecipeName] = React.useState(props.recipe.dishName)
  const editRecipe = () => {
    setEdit(true)
  }

  const updateRecipe = (recipe) => {
    const filteredIngredientArray = ingredients.map(({ id, createdAt, updatedAt, ...ingredient }) => {
      ingredient.quantity = parseInt(ingredient.quantity)
      return ingredient
    })
    const updatedRecipe = {
      id: recipe.id,
      dishName: recipeName,
      ingredients: filteredIngredientArray,
      servingSize: recipe.servingSize
    }

    setEdit(false)
    props.handleUpdate(updatedRecipe)
    props.handleClose()
  }
  if (!edit) {
    return (
      <Box className="box">
        <Typography variant="h3" className="center">
          {props.recipe.dishName}
        </Typography>
        <Typography variant="h4" className="center">
          Ingredients
        </Typography>
        <Container>
          <DisplayRecipeIngredients ingredients={props.recipe.ingredients} />
        </Container>
        <div className="center">
          <Button onClick={editRecipe}>Edit Recipe</Button>
          <Button onClick={props.handleClose}>Close Modal</Button>
        </div>
      </Box>
    )
  } else {
    return (
      <Box className="box">
        <Grid container spacing={2} className="center column">
          <Grid item xs={6} className="center">
            <TextField
              label="Recipe Name"
              defaultValue={recipeName}
              className="center"
              onChange={(e) => setRecipeName(e.target.value)}>
            </TextField>
          </Grid>
          <Grid item xs={12} container spacing={2} className="center row">
            <Grid item>
              <RecipeIngredientsTable recipeIngredients={ingredients} setRecipeIngredient={setIngredients} />
            </Grid>
            <Grid item>
              <IngredientOptions recipeIngredients={ingredients} setRecipeIngredient={setIngredients} />
            </Grid>

          </Grid>
          <Grid item xs={4} className="center">
            <Button onClick={(e) => updateRecipe(props.recipe)}>Update Recipe</Button>
            <Button onClick={props.handleClose}>Close Modal</Button>
          </Grid>
        </Grid>
      </Box>
    )
  }
}
