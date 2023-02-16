/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Navbar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom'

describe('NavBar Component', () => {
  test('should render properly', () => {
    render(<Navbar />, { wrapper: BrowserRouter })
    const navBar = screen.getByTestId('nav-bar')
    expect(navBar).toBeInTheDocument()
  })

  test('should render 3 links', () => {
    render(<Navbar />, { wrapper: BrowserRouter })
    const navBar = screen.getByTestId('nav-bar')
    const links = navBar.querySelectorAll('a')
    expect(links.length).toBe(3)
  })

  test('should render Home link', () => {
    render(<Navbar />, { wrapper: BrowserRouter })
    const navBar = screen.getByTestId('nav-bar')
    const links = navBar.querySelectorAll('a')
    expect(links[0].textContent).toBe('Home')
  })

  test('should render Recipes link', () => {
    render(<Navbar />, { wrapper: BrowserRouter })
    const navBar = screen.getByTestId('nav-bar')
    const links = navBar.querySelectorAll('a')
    expect(links[1].textContent).toBe('Recipes')
  })

  test('should render Meal Plan link', () => {
    render(<Navbar />, { wrapper: BrowserRouter })
    const navBar = screen.getByTestId('nav-bar')
    const links = navBar.querySelectorAll('a')
    expect(links[2].textContent).toBe('Meal Plan')
  })

  test('should redirect to "/" after user click on Home link', async () => {
    render(<Navbar />, { wrapper: BrowserRouter })
    await userEvent.click(screen.getByTestId('home-link'))
    expect(window.location.pathname).toBe('/')
  })

  test('should redirect to "/recipes" after user click on Recipes link', async () => {
    render(<Navbar />, { wrapper: BrowserRouter })
    await userEvent.click(screen.getByTestId('recipes'))
    expect(window.location.pathname).toBe('/recipes')
  })

  test('should redirect to "/mealplan" after user click on Meal Plan link', async () => {
    render(<Navbar />, { wrapper: BrowserRouter })
    await userEvent.click(screen.getByTestId('meal-plan'))
    expect(window.location.pathname).toBe('/mealplan')
  })
})
