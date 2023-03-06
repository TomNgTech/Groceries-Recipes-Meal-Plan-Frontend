import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import RecipeOptionsTable from './RecipeOptionsTable'
import RecipesTable from './RecipesTable'

function editMonthrecipes () {
  const hello = 'hello world'
  return (
        <Box className="container">
            <div className="flex-container">
                <span className="general_usage_span"></span>
                <Typography variant="h4" className="recipe_name" gutterBottom>
                    {hello}
                </Typography>

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
                    Edit Monthly Plan
                </Button>
                <span className="new_ingredient_span"></span>
            </div>
        </Box>
  )
}

export default editMonthrecipes
