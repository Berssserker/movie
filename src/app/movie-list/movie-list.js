import React, { Component } from 'react'

import './movie-list.css'

import MovieCard from './movie-card/movie-card'

export default class MovieList extends Component {
  render() {
    return (
      <section className="movie-list">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </section>
    )
  }
}
