import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import movies from '../../data/movies.json'
import './Home.css';


class Home extends Component {
  constructor() {
    super();

    // State is being set to an array from the json file imported in line 4.
    // This is because I cannot pass props through a Link.
    this.state = {
        movies: movies
    };
  }
  render() {
    const { movies } = this.state;

    // map over what is on state. Set the Link param to the title of the map (movie).
    const movieMap = movies.map((e, i) => {
      return (
        <Link key={i} to={`/movies/${e.title}`}>
          <div className='movie_map'>
            <h4>{e.title}</h4>
          </div>
        </Link>
      );
    });
    return (
      <div className='home'>
        <h1>Home</h1>
        <div>
          <h3>Movie Shelf</h3>
          {movieMap}
        </div>
      </div>
    );
  }
}

export default Home;
