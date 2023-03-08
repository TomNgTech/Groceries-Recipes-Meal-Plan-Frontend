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

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const gridItems = []

  useEffect(() => {
    async function fetchData () {
      const fetchedData = getAllMealPlans().then(data => {
        return Object.values(data)
      })
      return fetchedData
    }
    fetchData().then(plans => {
      const recipes = []
      for (let i = 0; i < months.length; i++) {
        const monthPlans = plans.filter(element => {
          return element.month === i
        })
        console.log('mealplans for month: ' + i)
        console.log(monthPlans)
        recipes[i] = monthPlans.length
      }
      setAllplans(plans)
      setRecipeNum(recipes)
    })
  }, [])

  const createGridItems = () => {
    for (let i = 0; i < months.length; i++) {
      const mealplans = allplans.filter(element => {
        return element.month === i
      })
      const gridItem = <Grid item xs={3} key={months[i]}> <MealPlanCard month={months[i]} mealplans={mealplans} recipeNum={recipeNum[i]}/> </Grid>
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
