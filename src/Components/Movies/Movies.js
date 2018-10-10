import React, { Component } from 'react';

import movies from '../../data/movies.json'
import './Movies.css';

class Movies extends Component {
  constructor() {
    super();

    this.state = {
        movies: movies
    };
  }
  render() {
      console.log(this.state)
    const { movies } = this.state;
    console.log(this.props);

    // Find the movie title from state that matches the param in the url. 
    // We get the param by using this.props.match.params
    // Set to variable
    // I use that variable to find the values of the keys i call in the return of the render.
    let movie = movies.find(e => e.title === this.props.match.params.title);
    console.log(movie);


    return (
      <div className='movies'>
        <h2>{movie.title}</h2>
        <p>{movie.type}</p>
        <p>{movie.description}</p>
      </div>
    );
  }
}

export default Movies;
