export async function fetchIngredients () {
  try {
    const res = await fetch('http://localhost:3001/ingredients')
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export async function fetchRecipes () {
  try {
    const res = await fetch('http://localhost:3001/recipes')
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}
