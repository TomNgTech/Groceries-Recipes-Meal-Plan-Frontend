/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import { mockRecipes } from '../MockTestData/mockRecipeData'

// tests for Recipe Page
describe('<Recipes/>', () => {
  const recipes = mockRecipes
  const joinIngredients = (ingredients) => {
    const ingredientNames = []
    for (let j = 0; j < ingredients.length; j++) {
      ingredientNames.push(ingredients[j].name)
    }

    return ingredientNames.join(', ')
  }

  const setup = () =>
    render(
      <>
        <Typography variant="h3" data-testid="RecipeIntro" className="center">
          My Recipes page
        </Typography>
        <TableContainer
          data-testid="recipeTableContainer"
          component={Paper}
          sx={{ width: 600, margin: 'auto' }}
        >
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell data-testid="RecipeHeaders" align="right">
                  Recipes
                </TableCell>
                <TableCell data-testid="IngredientHeader" align="right">
                  Ingredients
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recipes.map((recipe) => (
                <TableRow
                  onClick={() => console.log(recipe)}
                  key={recipe.dishName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell data-testid="trTest" align="right">
                    {recipe.dishName}
                  </TableCell>
                  <TableCell align="right">
                    {joinIngredients(recipe.ingredients)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="center">
          <Button> Add Recipe</Button>
        </div>
      </>
    )

  test('should render without crashing', () => {
    setup()
    expect(screen).toBeDefined()
    expect(
      screen.getByRole('heading', { name: 'My Recipes page' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', { name: 'Recipes' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', { name: 'Ingredients' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('cell', { name: 'Grilled Chicken Caesar Salad' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('cell', { name: 'ribeye steak, potatoes, butter' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('cell', { name: 'Chicken and Potatoes' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('cell', { name: 'chicken tighs, potatoes, butter' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Add Recipe' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('row', { name: 'Recipes Ingredients' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('row', {
        name:
          'Grilled Chicken Caesar Salad chicken breast, lettuce, caesar dressing'
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('row', {
        name: 'Steak and Potatoes ribeye steak, potatoes, butter'
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('row', {
        name: 'Chicken and Potatoes chicken tighs, potatoes, butter'
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('table', { name: 'simple table' })
    ).toBeInTheDocument()
    // do not delete
    // expect(screen.getByRole('td', {dishName: 'Grilled Chicken Caesar Salad'})).toBeInTheDocument();
  })
})
