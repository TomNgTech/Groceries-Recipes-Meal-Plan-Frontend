/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { mockRecipes } from '../MockTestData/mockRecipeData'
import Recipes from '../components/recipes/Recipes'
import { jest, test } from '@jest/globals'
import '@testing-library/jest-dom'

describe('Recipe Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation()

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockRecipes)
    })
  })

  afterEach(() => {
    jest.restoreAllMocks()
    global.fetch.mockClear()
    delete global.fetch
  })

  test('should render properly', async () => {
    await act(async () => {
      return render(<Recipes />)
    })

    const pageTitle = screen.getByTestId('RecipeIntro')
    expect(pageTitle).toBeInTheDocument()
  })

  test('should render without crashing', async () => {
    await act(async () => {
      return render(<Recipes />)
    })

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
