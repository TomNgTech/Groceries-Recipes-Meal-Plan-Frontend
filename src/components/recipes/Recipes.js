import React from "react";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
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
  
  
  return (<><Typography variant="h3" data-testid="RecipeIntro" className="center">My Recipes page</Typography>
  <TableContainer data-testid="recipeTableContainer" component={Paper} sx={{width: 600, margin: 'auto'}}>
    <Table sx={{ minWidth: 500 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell data-testid="RecipeHeaders" align="right">Recipes</TableCell>
          <TableCell data-testid="IngredientHeader" align="right">Ingredients</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {recipes.map((recipe) => (
          <TableRow
            onClick={() => {
              handleOpen();
              setSelectedRecipe(recipe);
            }} 
            key={recipe.dishName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="right">{recipe.dishName}</TableCell>
            <TableCell align="right">{joinIngredients(recipe.ingredients)}</TableCell>
          </TableRow>
        ))}

      </TableBody>
    </Table>
    <Modal
      open={open}
      onClose={handleClose}>
      <RecipeDetails dishName={selectedRecipe.dishName} ingredients={selectedRecipe.ingredients} handleClose={handleClose}/>
    </Modal>
  </TableContainer>
  <div className="center"><Button> Add Recipe</Button></div></>);
}

export default Recipes;
