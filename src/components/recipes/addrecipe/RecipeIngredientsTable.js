import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './RecipeIngredientsTable.css'
import { TextField } from '@mui/material'

function RecipeIngredientsTable ({ recipeIngredients, setRecipeIngredient }) {
  const recipeIngredientsColumns = [
    { id: 'name', label: 'Recipe Ingredient', minWidth: 80 },
    { id: 'quantity', label: 'Quantity', minWidth: 30 },
    { id: 'unit', label: 'Unit', minWidth: 30 }
  ]

  const handleQuantityChange = (event, ingredient) => {
    const newArray = recipeIngredients.map(newIngredient => {
      if (newIngredient.id === ingredient.id) {
        newIngredient.quantity = event.target.value
      }
      return newIngredient
    })
    setRecipeIngredient(newArray)
  }

  return (
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
                    style={{ maxWidth: 60 }}
                  >
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-small"
                      defaultValue={ingredient.quantity}
                      variant="standard"
                      size="small"
                      onChange={(e) => handleQuantityChange(e, ingredient)}
                    />
                  </TableCell>
                  <TableCell
                    key={recipeIngredientsColumns.id}
                    align={recipeIngredientsColumns.align}
                  >
                    {ingredient.measurementType}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>

        </Table>
      </TableContainer>
    </Paper>
  )
}

export default RecipeIngredientsTable
