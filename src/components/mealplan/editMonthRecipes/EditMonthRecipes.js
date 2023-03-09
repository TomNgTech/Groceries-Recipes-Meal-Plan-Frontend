import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import RecipeOptionsTable from './RecipeOptionsTable'
import RecipesTable from './RecipesTable'
import './EditMonthRecipes.css'
import { updateMealPlan } from '../../Api'

function editMonthrecipes ({ currentViewedRecipes, currentViewedMonth, setCurrentViewedRecipes, currentViewedPlan, handleClose }) {
  const handleEditSubmission = () => {
    currentViewedPlan.weekInfo = currentViewedRecipes
    updateMealPlan(currentViewedPlan)
    handleClose(currentViewedPlan.month, currentViewedRecipes.length)
  }

  return (
        <Box className="container">
            <div className="flex-container">
                <span className="general_usage_span"></span>
                <Typography variant="h4" className="recipe_name" gutterBottom>
                    {currentViewedMonth}
                </Typography>

                <span className="general_usage_span"></span>
            </div>

            <div className="table_container ">
                <RecipesTable currentViewedRecipes={currentViewedRecipes} setCurrentViewedRecipes={setCurrentViewedRecipes} />
                <span className="general_usage_span"></span>
                <RecipeOptionsTable currentViewedRecipes={currentViewedRecipes} setCurrentViewedRecipes={setCurrentViewedRecipes} />
            </div>

            <div className="flex-container">
                <span className="new_ingredient_span"></span>
                <Button
                    variant="outlined"
                    size="large"
                    className="editButton"
                    onClick={e => handleEditSubmission()}
                >
                    Edit Month Plan
                </Button>
                <span className="new_ingredient_span"></span>
            </div>
        </Box>
  )
}

export default editMonthrecipes
