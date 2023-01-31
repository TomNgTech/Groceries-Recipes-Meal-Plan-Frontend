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
import RecipeDetails from "./RecipeDetails";
import Modal from "@mui/material/Modal";

// const rows = [
//   createData('Frozen yoghurt', ["yogurt", "milk", "sugar"].join(", ")),
//   createData('Ice cream sandwich', ["ice cream", "bread"].join(", ")),
//   createData('Eclair', ["flour", "sugar", "butter", "eggs", "milk"].join(", ")),
//   createData('Cupcake', ["flour", "sugar", "butter", "eggs", "milk"].join(", ")),
//   createData('Gingerbread', ["flour", "sugar", "butter", "eggs", "milk"].join(", ")),
// ];

function Recipes() {
  const [recipes, setRecipes] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedRecipe, setSelectedRecipe] = React.useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fetchRecipes = async () => {fetch("http://localhost:3001/recipes").then((response) => response.json()).then((data) => setRecipes(data)).catch((error) => console.log(error));}
  useEffect(() => {fetchRecipes();}, []);
  
  const joinIngredients = (ingredients) => {
    let ingredientNames = [];
    for(let i = 0; i < ingredients.length; i++)
  {
    
    ingredientNames.push(ingredients[i].name);   
  }
  console.log(ingredientNames.join(", "));
  return ingredientNames.join(", ");
}

  return (<><Typography variant="h3" className="center">My Recipes page</Typography>
  <TableContainer component={Paper} sx={{width: 600, margin: 'auto'}}>
    <Table sx={{ minWidth: 500 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Recipes</TableCell>
          <TableCell align="right">Ingredients</TableCell>
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
