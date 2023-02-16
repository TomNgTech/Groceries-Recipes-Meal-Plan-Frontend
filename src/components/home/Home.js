import { Typography } from '@mui/material'
import React from 'react'

function HomePage () {
  return (
    <>
      <Typography variant="p">
        <p data-testid="test">Welcome to Meal Plan Assistant. To start add your recipes into the recipes list, there is a lot of detail that can be included into it. After that you can review your meal plan and decide which recipes you want to include on each month. Click on the month to view your current plan for that month and customize it. After you finish adding recipes, export the grocery list from that month and get ready for cooking.</p>
      </Typography>
    </>
  )
}

export default HomePage
