import React from 'react';
import PropTypes from 'prop-types';

function GameOver(props) {
  const gameOverStyles = {
    backgroundImage: "url('grave.gif')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "700px",
    border: "5px solid orange",
    color: "orange"
  }
  return (<div>
    <div style={gameOverStyles}></div>
  <h2> Tama is Dead!</h2>

  </div>)
}



export default GameOver;
