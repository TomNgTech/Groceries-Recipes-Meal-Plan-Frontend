import React from "react";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import BasicCard from "./RecipeCard";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import RecipeDetails from "./RecipeDetails";

function Recipes() {
  const [recipes, setRecipes] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedRecipe, setSelectedRecipe] = React.useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const joinIngredients = (ingredients) => {
    let ingredientNames = [];
    for(let j = 0; j < ingredients.length; j++)
    {
      console.log(j);
      ingredientNames.push(ingredients[j].name);
    }
    console.log(ingredientNames.join(", "));
    return ingredientNames.join(", ");
  }
  useEffect( () => {
    async function fetchRecipes() {
      try{
      let res = await fetch("http://localhost:3001/recipes");
      let data = await res.json();
      console.log(data);
      setRecipes(data);
      }
      catch(err)
      {
        console.log(err);
      }
    }
    fetchRecipes();
  }, []);
  var cards = [];
  for(let i = 0; i<recipes.length; i++)
  {
    cards.push(<Grid item><BasicCard onClick={() => {
      handleOpen();
      setSelectedRecipe(recipes[i]);
    }}  recipe={recipes[i].dishName} ingredients={joinIngredients(recipes[i].ingredients)}/></Grid>)
  }
  return (<>
  <Typography variant="h3" className="center">My Recipes page</Typography>
  <div className="center"><Grid container spacing={3} sx={{maxWidth:1000, marginTop:"1em", height:400, overflow:"auto"}} >
    {cards}
  </Grid></div>
  <div className="center"><Button sx={{marginTop:"1em", marginBottom:"2em"}}> Add Recipe</Button></div>
  <Modal
        open={open}
        onClose={handleClose}
  >
    <RecipeDetails dishName={selectedRecipe.dishName} ingredients={selectedRecipe.ingredients} handleClose={handleClose}/>
        </Modal>
  </>);
}

export default Recipes;
