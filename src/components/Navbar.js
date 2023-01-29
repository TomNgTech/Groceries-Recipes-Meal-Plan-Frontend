import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link underline="none" component={NavLink} to="/">Home</Link>
          </li>
          <li>
            <Link underline="none" component={NavLink} to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link underline="none" component={NavLink}to="mealplan">Meal Plan</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
