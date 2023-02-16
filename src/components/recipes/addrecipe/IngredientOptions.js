import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteIcon from '@mui/icons-material/Delete'
import './IngredientOptions.css'
import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { fetchIngredients, addIngredient, deleteIngredient } from '../../Api'

function IngredientOptions ({ setRecipeIngredient, recipeIngredients }) {
  const [ingredientData, setNewIngredientData] = useState({
    ingredientName: '',
    ingredientUnit: ''
  })
  const [ingredientsList, setIngredientList] = useState([])

  const [addIngredientValidation, setIngredientValidation] = useState({
    validIngredientName: true,
    validIngredientUnit: true
  })

  useEffect(() => {
    if (ingredientsList.length === 0) {
      fetchIngredients().then((data) => {
        setIngredientList(data)
      })
    }
  }, [ingredientsList])

  const ingredientOptionsColumns = [
    { id: 'name', label: 'Ingredient', minWidth: 80 },
    { id: 'add', label: 'Add', minWidth: 30 },
    { id: 'delete', label: 'Delete', minWidth: 30 }
  ]

  const addIngredientToRecipe = (ingredient, event) => {
    if (event.target.checked === true) {
      ingredient.quantity = 0
      setRecipeIngredient((recipeIngredients) => [
        ...recipeIngredients,
        ingredient
      ])
    } else {
      setRecipeIngredient(
        recipeIngredients.filter((item) => item.name !== ingredient.name)
      )
    }
  }

  const addNewIngredientOption = () => {
    const ingredientNameValidation = !!(ingredientData.ingredientName !== '' || ingredientData.ingredientName.length === 50)
    const ingredientUnitValidation = !!(ingredientData.ingredientUnit !== '')

    let highestId = -1

    ingredientsList.forEach(ingredient => {
      const ingredientId = parseInt(ingredient.id)
      if (ingredientId > highestId) {
        highestId = parseInt(ingredient.id)
      }
    })
    const ingredientId = highestId + 1

    const newIngredient = {
      id: ingredientId.toString(),
      name: ingredientData.ingredientName,
      measurementType: ingredientData.ingredientUnit
    }

    if (ingredientNameValidation && ingredientUnitValidation) {
      addIngredient(newIngredient).then(data => {
        setIngredientList((ingredientsList) => [
          ...ingredientsList,
          newIngredient
        ])
        console.log(data)
      })
    } else {
      console.log('There is no ingredient or unit specified')
    }
    setIngredientValidation({
      ...addIngredientValidation,
      validIngredientName: ingredientNameValidation,
      validIngredientUnit: ingredientUnitValidation
    })
  }

  const deleteIngredientHandler = (ingredientId) => {
    if (ingredientId !== '') {
      deleteIngredient(ingredientId)
    }

    setIngredientList((ingredientsList) =>
      ingredientsList.filter((ingredient) => ingredient.id !== ingredientId)
    )
  }

  return (
    <div className="ingredient_options_container">
      <Paper className="ingredients_options">
        <TableContainer className="ingredients_options_table">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {ingredientOptionsColumns.map((column) => (
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
              {ingredientsList.map((ingredient) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={ingredient.id}
                  >
                    <TableCell
                      key={ingredientOptionsColumns.id}
                      align={ingredientOptionsColumns.align}
                    >
                      {ingredient.name}
                    </TableCell>
                    <TableCell
                      key={ingredientOptionsColumns.id}
                      align={ingredientOptionsColumns.align}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={(e) =>
                              addIngredientToRecipe(ingredient, e)
                            }
                          />
                        }
                      />
                    </TableCell>
                    <TableCell
                      key={ingredientOptionsColumns.id}
                      align={ingredientOptionsColumns.align}
                    >
                      <DeleteIcon onClick={(e) => { deleteIngredientHandler(ingredient.id) }} />
                    </TableCell>
                  </TableRow>
                )
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
          onChange={(e) => setNewIngredientData({ ...ingredientData, ingredientName: e.target.value })}
        />
        <span className="new_ingredient_span"></span>
      </div>
      {!addIngredientValidation.validIngredientName &&
        <div className='flex-container'>
          <span className="new_ingredient_span"></span>
          <span className="newIngredientError">Invalid input</span>
          <span className="new_ingredient_span"></span>
        </div>
      }
      <div className="flex-container">
        <span className="new_ingredient_span"></span>
        <FormControl className="measurementUnitForm">
          <InputLabel id="demo-simple-select-label">Measurement Unit</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ingredientData.ingredientUnit}
            label="Measurement Unit"
            onChange={(e) => setNewIngredientData({ ...ingredientData, ingredientUnit: e.target.value })}
          >
            <MenuItem value={'l'}>liter</MenuItem>
            <MenuItem value={'ml'}>mililiter</MenuItem>
            <MenuItem value={'g'}>grams</MenuItem>
            <MenuItem value={'tbsp'}>tablespoon</MenuItem>
            <MenuItem value={'tsp'}>teaspoon</MenuItem>
            <MenuItem value={'oz'}>ounce</MenuItem>
            <MenuItem value={'c'}>cup</MenuItem>
            <MenuItem value={'qt'}>quart</MenuItem>
            <MenuItem value={'gal'}>gallon</MenuItem>
            <MenuItem value={'lb'}>pound</MenuItem>

          </Select>
        </FormControl>
        <span className="new_ingredient_span"></span>
      </div>
      {!addIngredientValidation.validIngredientUnit &&
        <div className='flex-container'>
          <span className="new_ingredient_span"></span>
          <span className="newIngredientError">Invalid input</span>
          <span className="new_ingredient_span"></span>
        </div>
      }
      <div className="flex-container">
        <span className="new_ingredient_span"></span>
        <Button size="medium" onClick={addNewIngredientOption}>
          {' '}
          Add to options{' '}
        </Button>
        <span className="new_ingredient_span"></span>
      </div>
    </div>
  )
}

export default IngredientOptions
