import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Routers from './Routers';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routers />
        </Router>
      </div>
    );
  }
}

export default App;