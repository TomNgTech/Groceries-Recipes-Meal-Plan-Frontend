export async function fetchIngredients () {
  try {
    const res = await fetch('http://52.37.204.183/ingredients')
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export async function fetchRecipes () {
  try {
    const res = await fetch('http://52.37.204.183/recipes')
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export async function addIngredient (ingredient) {
  try {
    const res = await fetch('http://52.37.204.183/ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ingredient)
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export async function deleteIngredient (ingredientId) {
  try {
    const res = await fetch('http://52.37.204.183/ingredients/' + ingredientId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export async function addRecipe (recipe) {
  try {
    const res = await fetch('http://52.37.204.183/recipes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
    console.log(JSON.stringify(recipe))
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export async function updateRecipe (recipe) {
  const recipeNoId = {
    dishName: recipe.dishName,
    ingredients: recipe.ingredients,
    servingSize: recipe.servingSize
  }
  try {
    const res = await fetch('http://52.37.204.183/recipes/' + recipe.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeNoId)
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export async function deleteRecipe (recipeId) {
  console.log('recipeid: ' + recipeId)
  try {
    const res = await fetch('http://52.37.204.183/recipes/' + recipeId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}
