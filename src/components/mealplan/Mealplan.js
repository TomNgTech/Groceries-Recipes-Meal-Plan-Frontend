import React, { useState } from 'react'
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

import { Button, Modal } from '@mui/material'
import EditMonthRecipes from './editMonthRecipes/EditMonthRecipes'
function MealPlan () {
  const [openModal, setOpenModal] = useState(false)

  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <>
      (
    <>
      <Grid container spacing={3} className="grid">
        {createGridItems()}
      </Grid>
    </>
  )
      <Button variant="outlined"
        size="large"
        onClick={e => setOpenModal(true) }>
        Edit
      </Button>

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EditMonthRecipes
          handleClose={handleClose}
        />
      </Modal>
    </>
  )
}

export default MealPlan
