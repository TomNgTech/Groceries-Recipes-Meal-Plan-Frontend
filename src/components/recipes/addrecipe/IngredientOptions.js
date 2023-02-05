import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './IngredientOptions.css'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { fetchIngredients } from '../../Api'

function IngredientOptions ({ setRecipeIngredient, recipeIngredients }) {
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredientsList, setIngredientList] = useState([])

  useEffect(() => {
    if (ingredientsList.length === 0) {
      fetchIngredients().then((data) => {
        setIngredientList(data)
      })
    }
  }, [])

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
    if (newIngredient !== '' && newIngredient.length !== 50) {
      setIngredientList((ingredientsList) => [
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
  return (
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
  )
}

export default IngredientOptions
