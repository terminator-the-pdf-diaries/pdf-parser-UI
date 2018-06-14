import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

//Layouts
import Main from './containers/Main';
import FileUpload from './containers/FileUpload';
import Rules from './containers/Rules';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Main />
        <Switch>
          <Route exact path='/' component={FileUpload} />
          <Route path='/rules' component={Rules} />
        </Switch>
      </div>
    );
  }
}

export default App;
