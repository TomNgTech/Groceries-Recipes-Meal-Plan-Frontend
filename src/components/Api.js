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

export async function getRecipeById (recipeId) {
  try {
    const res = await fetch('http://52.37.204.183/recipes/' + recipeId, {
      method: 'GET',
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
    return data
  } catch (err) {
    console.log(err)
  }
}

export async function getAllMealPlans () {
  try {
    const res = await fetch('http://52.37.204.183/mealPlans', {
      method: 'GET',
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

export async function getMealPlanById (mealplanId) {
  try {
    const res = await fetch('http://52.37.204.183/mealPlans/' + mealplanId, {
      method: 'GET',
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

export async function getMealPlanByMonth (month) {
  try {
    const res = await fetch('http://52.37.204.183/mealPlans/month/' + month, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function updateMealPlan (mealplan) {
  try {
    const res = await fetch('http://52.37.204.183/mealPlans/' + mealplan.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mealplan)
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}
