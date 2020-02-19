import React from 'react';
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
function Eat() {
  const eatStyle = {
    border: "2px solid orange",
    margin: "5px"
  }
  return(
    
    <Button style ={eatStyle} variant="success">Eat</Button>

  )
}

export default Eat;
