import React, { Component } from 'react'

import './movie-list.css'

import MovieCard from './movie-card/movie-card'

export default class MovieList extends Component {
  render() {
    const elements = this.props.movies.map((item) => {
      const { id, ...itemProps } = item

      return (
        <MovieCard
          key={id}
          {...itemProps}
        />
      )
    })
    return <section className="movie-list">{elements}</section>
  }
}
