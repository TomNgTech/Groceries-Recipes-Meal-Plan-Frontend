import React from 'react'
import { Link } from 'react-router-dom'

function MainNavigation () {
  return (
    <nav data-testid="nav-bar">
      <ul>
        <li>
          <Link data-testid="home-link" to="/">Home</Link>
        </li>
        <li>
          <Link data-testid="recipes" to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link data-testid="meal-plan" to="/mealplan">Meal Plan</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
