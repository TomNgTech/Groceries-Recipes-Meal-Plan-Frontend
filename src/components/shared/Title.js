import React from "react";
import Typography from '@mui/material/Typography';



function Title(props) {
  return (
    <div className="title">
      <Typography variant="h1">{props.title}</Typography>
    </div>
  );
}

export default Title;