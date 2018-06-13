import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import logo from './logo.svg';
import './App.css';

//Layouts
import Main from './containers/Main';
import Navigation from './components/navigation';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Navigation userLastName={'Kohl'} userFirstName={'Becky'} />              
      <Main></Main>
    </div>
    );
  }
}

export default App;
