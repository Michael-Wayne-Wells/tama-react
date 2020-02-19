import React from 'react';
import './App.css';
import Game from './components/Game';
import Header from './components/Header';
import NewTama from './components/NewTama';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const bodyStyle = {
  color: "orange",
  backgroundColor: "#282a2a",
  textAlign: "center",
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      masterTamaList: []
    };
    this.handleAddingNewTamaToList = this.handleAddingNewTamaToList.bind(this);
  }

  handleAddingNewTamaToList(newTama){
    let newMasterTamaList = this.state.masterTamaList.slice();
    newMasterTamaList.push(newTama);
    this.setState({masterTamaList: newMasterTamaList});
  }
  render(){
    return (
      <div style={bodyStyle} className="App">

      <Header />
      <BrowserRouter>
      <Switch>
      <Route exact path='/' render={()=><Home tamaList={this.state.masterTamaList} />} />
      <Route path='/newgame' render={()=><NewTama onTamaCreation={this.handleAddingNewTamaToList} />} />
      <Route path='/game' render={()=><Game tamaList={this.state.masterTamaList} />}  />
      </Switch>
      </BrowserRouter>

      </div>
    );
  }
}

export default App;
