import React from "react";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import BasicCard from "./RecipeCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";


function createData(recipe, ingredients) {
  return { recipe, ingredients };
}

const rows = [
  createData('Frozen yoghurt', ["yogurt", "milk", "sugar"].join(", ")),
  createData('Ice cream sandwich', ["ice cream", "bread"].join(", ")),
  createData('Eclair', ["flour", "sugar", "butter", "eggs", "milk"].join(", ")),
  createData('Cupcake', ["flour", "sugar", "butter", "eggs", "milk"].join(", ")),
  createData('Gingerbread', ["flour", "sugar", "butter", "eggs", "milk"].join(", ")),
];

function Recipes() {
  // const [recipes, setRecipes] = React.useState([]);
  // const fetchRecipes = async () => {fetch("http://localhost:3001/recipes", {mode:'cors'}).
  // then((response) => { console.log(response.json());
  //   return response.json()}).
  // then((data) => setRecipes(data)).
  // catch((error) => console.log(error));}

  // useEffect(() => {fetchRecipes();});
  // var rows = [];
  // for(let i = 0; i < recipes.length; i++)
  // {

  //   rows.push(createData(recipes[i].dishName, recipes[i].ingredients.join(", ")));
  // }

  const [recipes, setRecipes] = React.useState([]);
  const fetchRecipes = async () => {fetch("http://localhost:3001/recipes").then((response) => response.json()).then((data) => setRecipes(data)).catch((error) => console.log(error));}
  useEffect(() => {fetchRecipes();}, []);
  
  let rows = [];
  for(let i = 0; i < recipes.length; i++)
  {
    let ingredientNames = [];
    for(let j = 0; j < recipes[i].ingredients.length; j++)
    {
      console.log(j);
      ingredientNames.push(recipes[i].ingredients[j].name);
    }
    console.log(ingredientNames.join(", "));

     rows.push(createData(recipes[i].dishName, ingredientNames.join(", ")));
  }


  var cards = [];
  for(let i = 0; i<rows.length; i++)
  {
    cards.push(<Grid item><BasicCard recipe={rows[i].recipe} ingredients={rows[i].ingredients}/></Grid>)
  }
  return (<>
  <Typography variant="h3" className="center">My Recipes page</Typography>
  <div className="center"><Grid container spacing={3} sx={{maxWidth:1000, marginTop:"1em", height:400, overflow:"auto"}} >
    {cards}
  </Grid></div>
  <div className="center"><Button sx={{marginTop:"1em", marginBottom:"2em"}}> Add Recipe</Button></div>
  </>);
}

export default Recipes;
