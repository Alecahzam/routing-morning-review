import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

// import all routes together. Remember to wrap with a Router (I aliased it from BrowserRouter, HashRouter works as well)
import routes from './routes';
import Header from './Components/Header/Header'

class App extends Component {
  render() {
    return (
      <Router >
      <div className='App'>
        < Header />
        {routes}
      </div>
      </Router>
    );
  }
}

export default App;
