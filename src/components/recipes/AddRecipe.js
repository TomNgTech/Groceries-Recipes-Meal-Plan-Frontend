import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import "./AddRecipe.css";

function AddRecipe() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns = [{ id: "name", label: "Name", minWidth: 170 }];

  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  const rows = [
    createData("India", "IN", 1324171354, 3287263),
    createData("India", "IN", 1324171354, 3287263),
    createData("India", "IN", 1324171354, 3287263),
    createData("India", "IN", 1324171354, 3287263),
    createData("India", "IN", 1324171354, 3287263),
    createData("India", "IN", 1324171354, 3287263),
    createData("India", "IN", 1324171354, 3287263),
    createData("India", "IN", 1324171354, 3287263),
    createData("India", "IN", 1324171354, 3287263),
    createData("India", "IN", 1324171354, 3287263),
  ];

  return (
    <Box className="container">
      <div className="flex-container">
        <span className="general_usage_span"></span>
        <TextField
          id="demo-helper-text-aligned"
          label="Recipe Name"
          className="recipe_name"
        />
        <span className="general_usage_span"></span>
      </div>

      <div className="table_container ">
        <Paper className="recipe_ingredients">
          <TableContainer className="recipe_ingredients_table">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <span className="general_usage_span"></span>
        <div className="ingredient_options_container">
          <Paper className="ingredients_options">
            <TableContainer className="ingredients_options_table">
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <div className="flex-container">
            <span className="new_ingredient_span"></span>
            <TextField
              id="demo-helper-text-aligned"
              label="New Ingredient Option"
              className="new_ingredient_textfield"
            />
            <span className="new_ingredient_span"></span>
          </div>
          <div className="flex-container">
            <span className="new_ingredient_span"></span>
            <Button size="medium"> Add to options </Button>
            <span className="new_ingredient_span"></span>
          </div>
        </div>
      </div>
      <div className="flex-container">
        <span className="new_ingredient_span"></span>
        <Button variant="outlined" size="large">
          Submit Recipe
        </Button>
        <span className="new_ingredient_span"></span>
      </div>
    </Box>
  );
}

export default AddRecipe;
