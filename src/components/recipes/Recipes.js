import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import Modal from '@mui/material/Modal'
import RecipeDetails from './RecipeDetails'
import AddRecipe from './AddRecipe'

function Recipes () {
  const [recipes, setRecipes] = useState([])

  const [openModal, setOpenModal] = useState({
    openDetailModal: false,
    openAddRecipeModal: false
  })

  const handleOpen = (modalType) => {
    if (modalType === 'Detail') {
      setOpenModal({
        ...openModal,
        openDetailModal: true
      })
    } else {
      setOpenModal({
        ...openModal,
        openAddRecipeModal: true
      })
    }
  }

  const handleClose = () => {
    if (openModal.openAddRecipeModal === true) {
      setOpenModal({
        ...openModal,
        openAddRecipeModal: false
      })
    } else {
      setOpenModal({
        ...openModal,
        openDetailModal: false
      })
    }
  }

  const [selectedRecipe, setSelectedRecipe] = useState({})

  const joinIngredients = (ingredients) => {
    const ingredientNames = []
    for (let j = 0; j < ingredients.length; j++) {
      ingredientNames.push(ingredients[j].name)
    }
    return ingredientNames.join(', ')
  }

  useEffect(() => {
    async function fetchRecipes () {
      try {
        const res = await fetch('http://52.37.204.183/recipes')
        const data = await res.json()
        setRecipes(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchRecipes()
  }, [])

  return (
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
                onClick={() => {
                  handleOpen('Detail')
                  setSelectedRecipe(recipe)
                }}
                key={recipe.dishName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{recipe.dishName}</TableCell>
                <TableCell align="right">
                  {joinIngredients(recipe.ingredients)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Modal open={openModal.openDetailModal} onClose={handleClose}>
          <RecipeDetails
            dishName={selectedRecipe.dishName}
            ingredients={selectedRecipe.ingredients}
            handleClose={handleClose}
          />
        </Modal>
      </TableContainer>
      <div className="center">
        <Button onClick={() => handleOpen('AddRecipe')}>Add Recipe</Button>
      </div>
      <Modal
        open={openModal.openAddRecipeModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddRecipe
          handleClose={handleClose}
          setRecipes={setRecipes}
          recipes={recipes}
        />
      </Modal>
    </>
  )
}

export default Recipes
