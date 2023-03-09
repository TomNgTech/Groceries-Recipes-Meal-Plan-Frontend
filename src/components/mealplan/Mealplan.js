import React, { useEffect, useState } from 'react'
import './Mealplan.css'
import MealPlanCard from './MealplanCard'
import { Grid, Modal } from '@mui/material'
import EditMonthRecipes from './editMonthRecipes/EditMonthRecipes'
import { getAllMealPlans } from '../Api'

function MealPlan () {
  const [openModal, setOpenModal] = useState(false)
  const [allplans, setAllplans] = useState([])
  const [recipeNum, setRecipeNum] = useState([])
  const [currentViewedMonth, setCurrentViewedMonth] = useState('')
  const [currentViewedRecipes, setCurrentViewedRecipes] = useState([])
  const [currentViewedPlan, setCurrentViewedPlan] = useState([])

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const gridItems = []

  useEffect(() => {
    getAllMealPlans().then(plans => {
      const recipes = []
      for (let i = 0; i < plans.length; i++) {
        recipes[i] = plans[i].weekInfo.length
      }
      setAllplans(plans)
      setRecipeNum(recipes)
    })
  }, [])

  const createGridItems = () => {
    for (let i = 0; i < months.length; i++) {
      const gridItem = <Grid item xs={3} key={months[i]}>
        <MealPlanCard month={months[i]} mealplan={allplans[i]}
          recipeNum={recipeNum[i]} handleOpen={handleOpen} />
      </Grid>
      gridItems.push(gridItem)
    }
    return gridItems
  }
  const handleClose = (monthEdited, newRecipeCount) => {
    const newArray = recipeNum
    newArray[monthEdited] = newRecipeCount
    setRecipeNum(newArray)
    setOpenModal(false)
  }

  const handleOpen = (month, mealplan, weekInfo) => {
    setCurrentViewedPlan(mealplan)
    setCurrentViewedRecipes(weekInfo)
    setCurrentViewedMonth(month)
    setOpenModal(true)
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
          currentViewedPlan={currentViewedPlan}
          currentViewedRecipes={currentViewedRecipes}
          currentViewedMonth={currentViewedMonth}
          setCurrentViewedRecipes={setCurrentViewedRecipes}
          handleClose={handleClose}
        />
      </Modal>
    </>
  )
}

export default MealPlan
