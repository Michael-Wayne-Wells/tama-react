import React from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

function Eat(props) {
  const eatStyle = {
    border: "2px solid orange",
    margin: "5px"
  }



  return (<Button onClick={props.onTamaEat('yo')} style={eatStyle} variant="success">Eat</Button>)
}



export default Eat;
