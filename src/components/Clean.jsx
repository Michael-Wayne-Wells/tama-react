import React from 'react';
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';

function Clean() {
  const cleanStyle = {
    border: "2px solid orange",
    margin: "5px"
  }
  return(

    <Button style ={cleanStyle} variant="info">Clean</Button>
  
  )
}
export default Clean;
