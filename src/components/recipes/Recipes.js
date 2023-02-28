import React, { useEffect, useState } from 'react'
import './Recipes.css'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material'
import Modal from '@mui/material/Modal'
import RecipeDetails from './RecipeDetails'
import AddRecipe from './addrecipe/AddRecipe'
import { deleteRecipe, fetchRecipes, updateRecipe } from '../Api'

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

  const handleUpdate = (recipe) => {
    updateRecipe(recipe).then((data) => {
      const updatedRecipes = recipes.map((item) => {
        if (item.id === recipe.id) {
          return data
        } else {
          return item
        }
      })
      setRecipes(updatedRecipes)
    })
  }

  const handleDelete = (recipeId) => {
    deleteRecipe(recipeId)
    const updatedRecipes = recipes.filter((item) => item.id !== recipeId)
    setRecipes(updatedRecipes)
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
    fetchRecipes().then(data => {
      setRecipes(data)
    })
  }, [])

  return (
    <>
      <Typography variant="h3" data-testid="RecipeIntro" className="center">
        My Recipes page
      </Typography>
      <TableContainer
        data-testid="recipeTableContainer"
        component={Paper}
        className='recipeTableContainer'
        // sx={{ width: 600, margin: 'auto' }}
      >
        <Table
        sx={{ minWidth: 500 }}
        aria-label="simple table"
        // className='recipeTable'
        >
          <TableHead>
            <TableRow>
              <TableCell
              data-testid="RecipeHeaders"
              className='recipeTableCell'
              // align="right"
              >
                Recipes
              </TableCell>
              <TableCell className='recipeTableCell' data-testid="IngredientHeader">
                Ingredients
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipes.map((recipe) => (
              <TableRow
                key={recipe.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className='recipeTableCell' onClick={() => {
                  handleOpen('Detail')
                  setSelectedRecipe(recipe)
                }}>{recipe.dishName}</TableCell>
                <TableCell className='recipeTableCell' >
                  {joinIngredients(recipe.ingredients)}
                </TableCell>
                <TableCell className='recipeTableCell'>
                  <DeleteIcon className='Delete' onClick={(e) => { handleDelete(recipe.id) }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Modal open={openModal.openDetailModal} onClose={handleClose}>
          <RecipeDetails
            recipe={selectedRecipe}
            handleClose={handleClose}
            handleUpdate={handleUpdate}
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
