import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/home/Home";
import Recipes from "./components/recipes/Recipes";
import MealPlan from "./components/mealplan/Mealplan";
import RootLayout from "./components/Root";
import ErrorPage from "./components/shared/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/recipes", element: <Recipes /> },
      { path: "/mealplan", element: <MealPlan /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
