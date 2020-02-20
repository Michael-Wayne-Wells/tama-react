import React from 'react';
import PropTypes from 'prop-types';
import GameOver from './GameOver';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Game from './Game';

class GameController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleGameOverConfirmation = this.handleGameOverConfirmation.bind(this);
  }

  handleGameOverConfirmation(){
    this.props.tamaList.forEach((tama) => tama.overallHealth <= 0 ? this.setState({formVisibleOnPage: true}) : this.setState({formVisibleOnPage: false}) );


  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <GameOver />;
    }else{
      currentlyVisibleContent = <Game

      tamaList = {this.props.tamaList}
      onTamaEat = {this.props.onTamaEat} />
    }
    return (
      <div>
      {currentlyVisibleContent}
      </div>
    );
  }
}

export default GameController;
