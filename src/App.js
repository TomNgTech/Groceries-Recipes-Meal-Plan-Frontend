import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/Home";
import Recipes from "./components/Recipes";
import MealPlan from "./components/Mealplan";
import RootLayout from "./components/Root";
import ErrorPage from "./components/Error";

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
