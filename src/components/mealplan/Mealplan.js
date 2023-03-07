import React, { useEffect, useState } from 'react'
import './Mealplan.css'
import MealPlanCard from './MealplanCard'
import { Grid } from '@mui/material'
import { getAllMealPlans } from '../Api'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function createGridItems () {
  const gridItems = []
  const [allplans, setAllplans] = useState([])
  const [recipeNum, setRecipeNum] = useState([])

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
      return [plans, recipes]
    }).then(array => {
      setAllplans(array[0])
      setRecipeNum(array[1])
    })
  }, [])

  for (let i = 0; i < months.length; i++) {
    const mealplans = allplans.filter(element => {
      return element.month === i
    })
    const gridItem = <Grid item xs={3} key={months[i]}> <MealPlanCard month={months[i]} mealplans={mealplans} recipeNum={recipeNum[i]}/> </Grid>
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
