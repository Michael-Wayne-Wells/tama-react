import React from 'react';
import './App.css';
import Game from './components/Game';
import Header from './components/Header';
import NewTama from './components/NewTama';
import Home from './components/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'moment';

const bodyStyle = {
  color: "orange",
  backgroundColor: "#282a2a",
  textAlign: "center"
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTamaList: []
    };
    this.handleAddingNewTamaToList = this.handleAddingNewTamaToList.bind(this);

  }
  onTamaEat = (a,b,c,d) => {
    console.log(a,b,c,d);
    let newMasterTamaList = this.state.masterTamaList.slice();
    newMasterTamaList.forEach((tama) => tama.overallHealth += a);
    newMasterTamaList.forEach((tama) => tama.physPain += b);
    newMasterTamaList.forEach((tama) => tama.mess += c);
    newMasterTamaList.forEach((tama) => tama.emoPain += d);
    this.setState({masterTamaList: newMasterTamaList});
  }
  componentDidMount() {
    this.sinceBirthUpdateTimer = setInterval(() => this.updateBirthElapsedTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.sinceBirthUpdateTimer);
  }

  updateHealthByAging() {
    console.log('hi');
  }
  updateBirthElapsedTime() {
    console.log('yo');
    let newMasterTamaList = this.state.masterTamaList.slice();
    newMasterTamaList.forEach((tama) => tama.formattedSinceBirth = (tama.sinceBirth).fromNow(true));
    newMasterTamaList.forEach((tama) => tama.overallHealth -= 5);
    newMasterTamaList.forEach((tama) => tama.emoPain += 5);
    newMasterTamaList.forEach((tama) => tama.physPain += 10);
    newMasterTamaList.forEach((tama) => tama.mess += 10);
    this.setState({masterTamaList: newMasterTamaList});
  }

  handleAddingNewTamaToList(newTama) {
    let newMasterTamaList = this.state.masterTamaList.slice();
    newTama.formattedSinceBirth = (newTama.sinceBirth).fromNow(true);

    newMasterTamaList.push(newTama);
    this.setState({masterTamaList: newMasterTamaList});
  }
  render() {
    return (<div style={bodyStyle} className="App">

      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact="exact" path='/' render={() =>< Home tamaList = {
              this.state.masterTamaList
            } />}/>
          <Route path='/newgame' render={() =>< NewTama onTamaCreation = {
              this.handleAddingNewTamaToList
            } />}/>
          <Route path='/game' render={() =>< Game
            tamaList = {this.state.masterTamaList}
            onTamaEat = {this.onTamaEat}
            />}/>
        </Switch>
      </BrowserRouter>

    </div>);
  }
}

export default App;
