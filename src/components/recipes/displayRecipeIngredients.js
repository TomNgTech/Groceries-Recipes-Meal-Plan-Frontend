import { ListItem } from '@mui/material';
import * as React from 'react';

export default function DisplayRecipeIngredients(props) {
    let items = [];
        props.ingredients.forEach(element => {
           let item = 
            <ListItem>
                <ListItemText primary={element.name} />
            </ListItem>;
            items.push(item);
        });
    
    
    return (
        <List>
            {items}
        </List>   
    );
    }