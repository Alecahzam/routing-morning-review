import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import componenets
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Movies from './Components/Movies/Movies';

export default (
    //don't forget to wrap the Routes in Switch
  <Switch>
    <Route path='/about' component={About}/>
    <Route path='/movies/:title' component={Movies}/>
    <Route exact path="/" component={Home} />
  </Switch>
);
