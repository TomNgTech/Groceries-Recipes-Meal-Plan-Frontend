import React, { useState } from 'react'
import MediaCard from './Panel'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import lamb from './homeImages/Capture.JPG'
import penne from './homeImages/penne.jpg'
import brownies from './homeImages/brownies.jpeg'
import tiramisu from './homeImages/tiramisu.jpg'
const HomeCarousel = () => {
  const [value, setValue] = useState(0)
  function onChange (value) {
    setValue(value)
  }

  const recipeObject = [
    {
      name: 'LAMB CHOPS',
      image: lamb,
      description:
        'Lamb chops together in just 20 minutes, and delivers big, rich flavors from the lamb, the sizzled garlic, and the lemon, parsley, and crushed red pepper flakes in the pan sauce. Serve these chops with roasted potatoes, salad, or bread to soak up the sauce.',
      ingredients: [
        { name: 'chicken tighs', quantity: '4', measurementType: 'unit' },
        { name: 'potatoes', quantity: '5', measurementType: 'unit' },
        { name: 'butter', quantity: '70', measurementType: 'gram' }
      ]
    },
    {
      name: 'PENNE ARRABBIATA',
      image: penne,
      description:
        "Arrabbiata sauce, or sugo all' in Italian (arabbiata in Romanesco dialect), is a spicy sauce for pasta made from garlic, tomatoes, and dried red chili peppers cooked in olive oil. The sauce originates from the Lazio region, and particularly from the city of Rome.",
      ingredients: [
        { name: 'Pasta', quantity: '2', measurementType: 'unit' },
        { name: 'Penme', quantity: '2', measurementType: 'unit' },
        { name: 'Garlic', quantity: '1', measurementType: '3oz' },
        { name: 'Tomato', quantity: '1', measurementType: 'unit' },
        { name: 'Cheeze', quantity: '1', measurementType: '5oz' },
        { name: 'Onion', quantity: '1', measurementType: 'unit' }
      ]
    },
    {
      name: 'FRIED RICE',
      image: lamb,
      description: 'Fried bacon, onions, garlic, rice, with eggs',
      ingredients: [
        { name: 'chicken tighs', quantity: '4', measurementType: 'unit' },
        { name: 'potatoes', quantity: '5', measurementType: 'unit' },
        { name: 'butter', quantity: '70', measurementType: 'gram' }
      ]
    },
    {
      name: 'BROWNIES',
      image: brownies,
      description:
        'These brownies are absolutely delicious with a fudgy texture and deep chocolate flavor. The combination of chocolate, sugar, and butter creates a decadent and indulgent treat that is hard to resist. The slightly crispy crust on top gives way to a soft, gooey interior that is pure bliss with every bite.',
      ingredients: [
        { name: 'eggs', quantity: '2', measurementType: 'unit' },
        { name: 'water', quantity: '1', measurementType: 'table spoon' },
        { name: 'sugar', quantity: '1', measurementType: 'cup' },
        { name: 'flower', quantity: '1', measurementType: 'cup' },
        { name: 'dark chocolate chips', quantity: '2', measurementType: 'cup' }
      ]
    },
    {
      name: 'TIRAMISU',
      image: tiramisu,
      description:
        'An Italian dessert made with layers of ladyfingers soaked in coffee and liquor, and mascarpone cheese filling. It is dusted with cocoa powder on top, and sometimes flavored with a hint of chocolate, vanilla, or amaretto. Tiramisu is rich, creamy, and has a perfect balance of sweetness and bitterness, making it a favorite among coffee and dessert lovers.',
      ingredients: [
        { name: 'espresso coffee', quantity: '1', measurementType: 'cup' },
        { name: 'Marsala wine', quantity: '1/4', measurementType: 'cup' },
        { name: 'ladyfingers', quantity: '24', measurementType: 'pieces' },
        { name: 'egg yolks', quantity: '6', measurementType: 'pieces' },
        { name: 'granulated sugar', quantity: '3/4', measurementType: 'cup' },
        { name: 'mascarpone cheese', quantity: '16', measurementType: 'ounces' },
        { name: 'heavy cream', quantity: '1-1/2', measurementType: 'cups' },
        { name: 'cocoa powder', quantity: '2', measurementType: 'tablespoons' }
      ]
    }
  ]

  return (
    <div className='home_carousel'>
      <div>
        <p className='carousel_text'>Featured Recipes</p>
      </div>
      <Carousel value={value} onChange={onChange} arrows infinite slidesPerPage={4}>
        <MediaCard props={recipeObject[0]} />
        <MediaCard props={recipeObject[1]} />
        <MediaCard props={recipeObject[3]} />
        <MediaCard props={recipeObject[4]} />
      </Carousel>
    </div>
  )
}

export default HomeCarousel
