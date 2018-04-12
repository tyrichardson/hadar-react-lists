import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starList: [
        {name: 'Fomalhaut', diameter: 200},
        {name: 'Gacrux', diameter: 400},
        {name: 'Elnath', diameter: 600}
      ]
    };
  }

  render() {
    //let starListItemArray = [];

    // for(let i = 0; i < this.state.starList.length; i++) {
    //   starListItemArray.push(<li>{this.state.starList[i]}</li>)
    // }

    // this.state.starList.forEach(function(star){
    //   starListItemArray.push(<li>{star}</li>)
    // })

    //for .map(), key needs to be unique
    //let starListItemArray = this.state.starList.map(star => <li>{star}</li>);
      //put this function right in the JSX (below)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <ul>
          {this.state.starList.map(star => <li key={star.name}> The star named {star.name} is {star.diameter} million km in diameter.</li>)}
          </ul>

      </div>
    );
  }
}

export default App;
