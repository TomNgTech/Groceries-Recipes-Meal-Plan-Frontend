import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './RecipeIngredientsTable.css'

function RecipeIngredientsTable ({ recipeIngredients }) {
  const recipeIngredientsColumns = [
    { id: 'name', label: 'Recipe Ingredient', minWidth: 80 },
    { id: 'quantity', label: 'Quantity', minWidth: 30 }
  ]

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
  )
}

export default RecipeIngredientsTable
