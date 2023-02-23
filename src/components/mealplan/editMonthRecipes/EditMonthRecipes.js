import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import RecipeOptionsTable from './RecipeOptionsTable'
import RecipesTable from './RecipesTable'

function editMonthrecipes () {
  return (
        <Box className="container">
            <div className="flex-container">
                <span className="general_usage_span"></span>
                <TextField
                    id="demo-helper-text-aligned"
                    label="Recipe Name"
                    className="recipe_name"
                />
                <span className="general_usage_span"></span>
            </div>

            <div className="table_container ">
                <RecipesTable />
                <span className="general_usage_span"></span>
                <RecipeOptionsTable />
            </div>

            <div className="flex-container">
                <span className="new_ingredient_span"></span>
                <Button
                    variant="outlined"
                    size="large"
                >
                    Submit Recipe
                </Button>
                <span className="new_ingredient_span"></span>
            </div>
        </Box>
  )
}

export default editMonthrecipes
