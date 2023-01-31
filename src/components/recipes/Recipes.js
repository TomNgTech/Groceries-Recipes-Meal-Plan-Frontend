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


function createData(recipe, ingredients) {
  return { recipe, ingredients };
}

// const rows = [
//   createData('Frozen yoghurt', ["yogurt", "milk", "sugar"].join(", ")),
//   createData('Ice cream sandwich', ["ice cream", "bread"].join(", ")),
//   createData('Eclair', ["flour", "sugar", "butter", "eggs", "milk"].join(", ")),
//   createData('Cupcake', ["flour", "sugar", "butter", "eggs", "milk"].join(", ")),
//   createData('Gingerbread', ["flour", "sugar", "butter", "eggs", "milk"].join(", ")),
// ];

function Recipes() {
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
        {rows.map((row) => (
          <TableRow
            onClick={() => console.log(row)}
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="right">{row.recipe}</TableCell>
            <TableCell align="right">{row.ingredients}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <div className="center"><Button> Add Recipe</Button></div></>);
}

export default Recipes;
