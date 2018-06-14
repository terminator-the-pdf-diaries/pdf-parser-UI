import React, {
  Component
} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

//Layouts
import Main from './containers/Main';
import FileUpload from './containers/FileUpload';
import Rules from './containers/Rules';

class App extends Component {
  render() {
    return (

<<<<<<< HEAD
      <
      div className = "App" >
      <
      Main / >
      <
      Switch >
      <
      Route exact path = '/'
      component = {
        FileUpload
      }
      /> <
      Route path = '/rules'
      component = {
        Rules
      }
      /> <
      /Switch> <
      /div>
=======
      <div className="App">
        <Main />
        <Switch>
          <Route exact path='/' component={FileUpload} />
          <Route path='/rules' component={Rules} />
        </Switch>
      </div>
>>>>>>> 88495607ed864a8a7702b73db85e8bf7fe2b2efa
    );
  }
}

export default App;