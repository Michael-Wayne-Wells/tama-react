import React from 'react';
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';

function Love() {
  const loveStyle = {
    border: "2px solid orange",
    margin: "5px"
  }
  return(

    <Button style ={loveStyle} variant="danger">Love</Button>
 
  )
}

export default Love;
