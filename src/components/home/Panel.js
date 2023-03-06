import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function MediaCard (recipeObject) {
  return (
    <Card sx={{ maxWidth: 345, height: 425 }}>
      <CardMedia
        sx={{ height: 140, alignContent: 'center' }}
        component='img'
        src={recipeObject.props.image}
        title='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {recipeObject.props.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
         {recipeObject.props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Add to Reccipes</Button>
      </CardActions>
    </Card>
  )
}
