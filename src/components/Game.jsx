import React from 'react';
import Pain from './Pain';
import PropTypes from 'prop-types';

function Game(props) {
  const gameStyles = {
    backgroundImage: "url('Fuji.webp')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "700px",
    border: "5px solid orange",
    color: "orange",
  }
  return(
    <div>
      <div style={gameStyles}>
      </div>
      Keep your buddy kicking!
      <div>
        <div>
          <hr/>
          {props.tamaList.map((tama) =>
            <Pain name={tama.name}
              emoPain={tama.emoPain}
              physPain={tama.physPain}
              overallHealth={tama.overallHealth}
              mess={tama.mess}
              key={tama.id}/>
          )}
        </div>
      </div>
    </div>
  )
}

Game.propTypes = {
  tamaList: PropTypes.array
};

export default Game;
