import React from 'react';
import {Button, Nav, Navbar, Form, FormControl} from 'react-bootstrap';
import PropTypes from 'prop-types';

function Eat(props) {
  const eatStyle = {
    border: "2px solid orange",
    margin: "5px"
  }

  return (<Button onClick={props.tamaEat} style={eatStyle} variant="success">Eat</Button>)
}

Eat.propTypes = {
  tamaEat: PropTypes.func
};

export default Eat;
