import React from 'react';
// Import Switch and Route.
import { Switch, Route } from 'react-router-dom';

//import componenets
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';

export default (
    //Don't forget to wrap the Routes in Switch
    // Why do we use exact?
  <Switch>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/movies/:title' component={Movies}/>
    <Route exact path="/" component={Home} />
    <Route path="*" render={() => <div><h1>Four-oh-four</h1><p>Sup Ron</p></div>} />
  </Switch>
);
