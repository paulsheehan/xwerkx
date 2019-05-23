import React, { Component } from 'react';
import logo from './logo.svg';
import './css/style.css';

import Dashboard from './components/Dashboard';
import Alerts from './components/Alerts';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render( ) {
    return (
      <div className="app">
        <Dashboard />
        <Alerts />
      </div>
    );
  }
  
}

export default App;
