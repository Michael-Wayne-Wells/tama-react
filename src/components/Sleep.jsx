import React from 'react';

import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';

function Sleep() {
  const sleepStyle = {
    border: "2px solid orange",
    margin: "5px"
  }
  return(

    <Button style ={sleepStyle} variant="dark">Sleep</Button>
    
  )
}
export default Sleep;
