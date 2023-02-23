import React from 'react'
import './Mealplan.css'
import MealPlanCard from './MealplanCard'
import { Grid } from '@mui/material'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
function createGridItems () {
  const gridItems = []
  for (let i = 0; i < months.length; i++) {
    const gridItem = <Grid item xs={3} key={months[i]}> <MealPlanCard month={months[i]} /> </Grid>
    gridItems.push(gridItem)
  }
  return gridItems
}

function MealPlan () {
  return (
    <>
      <Grid container spacing={3} className="grid">
        {createGridItems()}
      </Grid>
    </>
  )
}

export default MealPlan
