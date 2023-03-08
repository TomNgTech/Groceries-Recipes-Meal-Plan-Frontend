import React, { useEffect, useState } from 'react'
import './Mealplan.css'
import MealPlanCard from './MealplanCard'
import { Grid, Modal } from '@mui/material'
import EditMonthRecipes from './editMonthRecipes/EditMonthRecipes'
import { getAllMealPlans } from '../Api'

function MealPlan () {
  const [openModal, setOpenModal] = useState(false)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  useEffect(() => {
    getAllMealPlans().then((data) => {
      console.log(data)
    })
  })

  const createGridItems = () => {
    const gridItems = []
    for (let i = 0; i < months.length; i++) {
      const gridItem = <Grid item xs={3} key={months[i]}> <MealPlanCard month={months[i]} setOpenModal={setOpenModal} /> </Grid>
      gridItems.push(gridItem)
    }
    return gridItems
  }
  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <>
      <Grid container spacing={3} className="grid">
        {createGridItems()}
      </Grid>

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
