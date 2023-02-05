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
