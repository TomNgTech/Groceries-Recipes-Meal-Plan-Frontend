import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import './AddRecipe.css'
import RecipeIngredientsTable from './RecipeIngredientsTable.js'
import IngredientOptions from './IngredientOptions.js'

function AddRecipe ({ setRecipes, recipes, handleClose }) {
  const [recipeIngredients, setRecipeIngredient] = useState([])

  const [recipeName, setRecipeName] = useState('')

  const submitRecipe = () => {
    if (recipeIngredients.length !== 0 && recipeName !== '') {
      setRecipes((recipes) => [
        ...recipes,
        {
          dishName: recipeName,
          id: recipes.length + 1,
          ingredients: recipeIngredients,
          servingSize: 1
        }
      ])
      handleClose()
    } else {
      console.log(
        'Recipe name is missing or there are no ingredients on the recipe'
      )
    }
  }

  return (
    <Box className="container">
      <div className="flex-container">
        <span className="general_usage_span"></span>
        <TextField
          id="demo-helper-text-aligned"
          label="Recipe Name"
          className="recipe_name"
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <span className="general_usage_span"></span>
      </div>

      <div className="table_container ">
        <RecipeIngredientsTable recipeIngredients={recipeIngredients} />
        <span className="general_usage_span"></span>
        <IngredientOptions recipeIngredients={recipeIngredients} setRecipeIngredient={setRecipeIngredient} />
      </div>

      <div className="flex-container">
        <span className="new_ingredient_span"></span>
        <Button
          variant="outlined"
          size="large"
          onClick={(e) => {
            submitRecipe()
          }}
        >
          Submit Recipe
        </Button>
        <span className="new_ingredient_span"></span>
      </div>
    </Box>
  )
}

export default AddRecipe
