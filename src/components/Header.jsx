import React from 'react';
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';

function Header() {
  return(
    <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Mike & Ike developments, LTD presents:</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/newgame">New Game</Nav.Link>
    <Nav.Link href="#features">Send Money!</Nav.Link>

    </Nav>
    <Form inline>
    </Form>
    </Navbar>
    </div>
  )
}

export default Header;
