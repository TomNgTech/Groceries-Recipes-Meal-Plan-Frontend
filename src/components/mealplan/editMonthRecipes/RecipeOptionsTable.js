import { Checkbox, FormControlLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchRecipes } from '../../Api'

function RecipeOptionsTable ({ currentViewedRecipes, setCurrentViewedRecipes }) {
  const [availableRecipes, setAvailableRecipes] = useState([])
  const recipeMonthColumns = [
    { id: 'name', label: 'Name', minWidth: 80 },
    { id: 'add', label: 'Add Recipe', minWidth: 30 }
  ]

  useEffect(() => {
    fetchRecipes().then(data => {
      setAvailableRecipes(data)
    })
  }, [])

  const addRecipeToMonth = (recipe, event) => {
    if (event.target.checked === true) {
      recipe.servingSize = 0
      const newRecipe = {
        weekNum: '1',
        dishName: recipe.dishName,
        dishId: recipe.id,
        servings: 1
      }
      setCurrentViewedRecipes(() => [
        ...currentViewedRecipes,
        newRecipe
      ])
    } else {
      setCurrentViewedRecipes(
        currentViewedRecipes.filter((item) => item.dishName !== recipe.dishName)
      )
    }
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
                        {availableRecipes.map((recipe) => {
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
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={currentViewedRecipes.some((item) => item.dishName === recipe.dishName)}
                                                    onChange={(e) =>
                                                      addRecipeToMonth(recipe, e)
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
  )
}

export default RecipeOptionsTable
