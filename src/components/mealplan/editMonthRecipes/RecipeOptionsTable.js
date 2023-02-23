import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function RecipeOptionsTable () {
  const recipeIngredientsColumns = [
    { id: 'name', label: 'Recipe Ingredient', minWidth: 80 },
    { id: 'quantity', label: 'Quantity', minWidth: 30 },
    { id: 'unit', label: 'Unit', minWidth: 30 }
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
                    </TableBody>

                </Table>
            </TableContainer>
        </Paper>
  )
}

export default RecipeOptionsTable
