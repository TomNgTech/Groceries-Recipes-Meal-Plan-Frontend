import { NavLink } from "react-router-dom";


function MainNavigation() {
  return (
    <header>
      <nav>
        <ul style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          width: "66%",
          border: "1px solid black",
          padding: "10px",
          margin: "auto",
          //remove list style
          listStyle: "none",
        }}>
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
