import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'

function RecipesTable (props) {
  const recipeMonthColumns = [
    { id: 'name', label: 'Name', minWidth: 60 },
    { id: 'servings', label: 'Servings', minWidth: 30, width: 40 },
    { id: 'week', label: 'Week', minWidth: 30 }
  ]

  const handleServingsChange = (event, recipe) => {
    const newArray = props.currentViewedRecipes.map(newRecipe => {
      if (newRecipe.id === recipe.id) {
        // newRecipe.servings = event.target.value
      }
      return newRecipe
    })
    props.setCurrentViewedRecipes(newArray)
  }

  const handleWeekChange = (event, recipe) => {
    const newArray = props.currentViewedRecipes.map(newRecipe => {
      if (newRecipe.id === recipe.id) {
        newRecipe.weekNum = event.target.value
      }
      return newRecipe
    })
    props.setCurrentViewedRecipes(newArray)
  }

  return (
        <Paper className="recipe_ingredients">
            <TableContainer className="recipe_ingredients_table">
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {recipeMonthColumns.map((column) => (
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
                        {props.currentViewedRecipes.map((recipe) => {
                          return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={recipe.id}
                                >
                                    <TableCell
                                        key={recipeMonthColumns.id}
                                        align={recipeMonthColumns.align}
                                    >
                                        {recipe.dishName}
                                    </TableCell>
                                    <TableCell
                                        key={recipeMonthColumns.id}
                                        align={recipeMonthColumns.align}
                                    >
                                        <TextField
                                            hiddenLabel
                                            id="filled-hidden-label-small"
                                            defaultValue={0}
                                            variant="standard"
                                            size="small"
                                            onChange={(e) => handleServingsChange(e, recipe)}
                                        />
                                    </TableCell>
                                    <TableCell
                                        key={recipeMonthColumns.id}
                                        align={recipeMonthColumns.align}
                                    >

                                        <TextField
                                            hiddenLabel
                                            id="filled-hidden-label-small"
                                            defaultValue={recipe.weekNum}
                                            variant="standard"
                                            size="small"
                                            onChange={(e) => handleWeekChange(e, recipe)}
                                        />
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

export default RecipesTable
