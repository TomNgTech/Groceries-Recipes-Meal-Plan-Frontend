import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recipes</NavLink>
          </li>
          <li>
            <NavLink to="mealplan">Meal Plan</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
