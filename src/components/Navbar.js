import React from 'react'
import { Link } from 'react-router-dom'

function MainNavigation () {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="mealplan">Meal Plan</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
