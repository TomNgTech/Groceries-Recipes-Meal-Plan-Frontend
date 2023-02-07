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

  const [submitRecipeValidationData, setValidation] = useState({
    recipeNameInputValid: true,
    recipeIngredientsValid: true
  })

  const submitRecipe = () => {
    const recipeNameValidation = !!(recipeName.length !== 0 && recipeName !== '')
    const recipeIngredientsValidation = validateRecipeIngredients()

    if (recipeNameValidation && recipeIngredientsValidation) {
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
        'Recipe name is missing, no ingredients or missing quantity'
      )
    }
    setValidation({
      ...submitRecipeValidationData,
      recipeNameInputValid: recipeNameValidation,
      recipeIngredientsValid: recipeIngredientsValidation
    })
  }

  const validateRecipeIngredients = () => {
    if (recipeIngredients.length === 0) {
      return false
    }
    let result = true
    recipeIngredients.forEach(ingredient => {
      if (ingredient.quantity <= 0 || ingredient.quantity > 10000000) {
        result = false
      }
    })

    return result
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
      {!submitRecipeValidationData.recipeNameInputValid &&
        <div className='flex-container'>
          <span className="general_usage_span"></span>
          <span className='invalidInput'>Invalid Recipe Name</span>
          <span className="general_usage_span"></span>
        </div>
      }

      <div className="table_container ">
        <RecipeIngredientsTable recipeIngredients={recipeIngredients} setRecipeIngredient={setRecipeIngredient} submitRecipeValidationData={submitRecipeValidationData} />
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
      {!submitRecipeValidationData.recipeIngredientsValid &&
        <div className='flex-container'>
          <span className="general_usage_span"></span>
          <span className='invalidQuantity'>Invalid quantity on ingredients or no ingredients on recipe</span>
          <span className="general_usage_span"></span>
        </div>
      }
    </Box>
  )
}

export default AddRecipe
