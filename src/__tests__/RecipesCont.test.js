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
})
