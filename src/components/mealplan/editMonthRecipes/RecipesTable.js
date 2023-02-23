import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function RecipesTable () {
  const recipeIngredientsColumns = [
    { id: 'name', label: 'Name', minWidth: 80 },
    { id: 'servings', label: 'Servings', minWidth: 30 }
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

export default RecipesTable
