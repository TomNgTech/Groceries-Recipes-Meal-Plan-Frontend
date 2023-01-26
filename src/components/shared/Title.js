import React from "react";


function Title(props) {
  return (
    <div 
    style={{
        border: "1px solid black",
        padding: "10px",
        margin: "auto",
        marginBottom: "20px",
        width: "66%",
        textAlign: "center",
        backgroundColor: "lightblue",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Arial, Helvetica, sans-serif"
    }}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Title;