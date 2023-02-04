import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import './AddRecipe.css'

function AddRecipe ({ setRecipes, recipes, handleClose }) {
  const [ingredientsList, setIngredientsList] = useState([])
  const [recipeIngredients, setRecipeIngredient] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [recipeName, setRecipeName] = useState('')

  useEffect(() => {
    async function fetchIngredients () {
      try {
        const res = await fetch('http://localhost:3001/ingredients')
        const data = await res.json()
        console.log(data)
        setIngredientsList(data)
      } catch (err) {
        console.log(err)
      }
    }
    if (ingredientsList.length === 0) {
      fetchIngredients()
    }
  }, [ingredientsList, recipeIngredients])

  const recipeIngredientsColumns = [
    { id: 'name', label: 'Recipe Ingredient', minWidth: 80 },
    { id: 'quantity', label: 'Quantity', minWidth: 30 }
  ]

  const ingredientOptionsColumns = [
    { id: 'name', label: 'Ingredient', minWidth: 80 },
    { id: 'add', label: 'Add to Recipe', minWidth: 30 }
  ]

  const addIngredientToRecipe = (ingredient, event) => {
    if (event.target.checked === true) {
      setRecipeIngredient((recipeIngredients) => [
        ...recipeIngredients,
        ingredient
      ])
    } else {
      setRecipeIngredient(
        recipeIngredients.filter((item) => item.name !== ingredient.name)
      )
    }
  }

  const addNewIngredientOption = () => {
    console.log(newIngredient.length)
    if (newIngredient !== '' && newIngredient.length !== 50) {
      setIngredientsList((ingredientsList) => [
        ...ingredientsList,
        {
          id: ingredientsList.length + 1,
          name: newIngredient,
          measurementType: 'ounces'
        }
      ])
    } else {
      console.log('There is no ingredient, or the ingredient name is to big')
    }
  }

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
        <Paper className="recipe_ingredients">
          <TableContainer className="recipe_ingredients_table">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {recipeIngredientsColumns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {recipeIngredients.map((ingredient) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={ingredient.id}
                    >
                      <TableCell
                        key={recipeIngredientsColumns.id}
                        align={recipeIngredientsColumns.align}
                      >
                        {ingredient.name}
                      </TableCell>
                      <TableCell
                        key={recipeIngredientsColumns.id}
                        align={recipeIngredientsColumns.align}
                      >
                        1
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <span className="general_usage_span"></span>
        <div className="ingredient_options_container">
          <Paper className="ingredients_options">
            <TableContainer className="ingredients_options_table">
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {ingredientOptionsColumns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ingredientsList.map((ingredient) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={ingredient.id}
                      >
                        <TableCell
                          key={ingredientOptionsColumns.id}
                          align={ingredientOptionsColumns.align}
                        >
                          {ingredient.name}
                        </TableCell>
                        <TableCell
                          key={ingredientOptionsColumns.id}
                          align={ingredientOptionsColumns.align}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) =>
                                  addIngredientToRecipe(ingredient, e)
                                }
                              />
                            }
                          />
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <div className="flex-container">
            <span className="new_ingredient_span"></span>
            <TextField
              id="demo-helper-text-aligned"
              label="New Ingredient Option"
              className="new_ingredient_textfield"
              onChange={(e) => setNewIngredient(e.target.value)}
            />
            <span className="new_ingredient_span"></span>
          </div>
          <div className="flex-container">
            <span className="new_ingredient_span"></span>
            <Button size="medium" onClick={addNewIngredientOption}>
              {' '}
              Add to options{' '}
            </Button>
            <span className="new_ingredient_span"></span>
          </div>
        </div>
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
