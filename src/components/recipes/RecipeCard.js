import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Recipe
        </Typography>
        <Typography variant="h5" component="div">
         {props.recipe}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.ingredients}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.onClick}>Learn More</Button>
      </CardActions>
    </Card>
  );
}