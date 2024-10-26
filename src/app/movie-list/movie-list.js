import React from 'react'

import './movie-list.css'

import MovieCard from './movie-card/movie-card'

const MovieList = (props) => {
  const elements = props.movies.map((item) => {
    const { id, ...itemProps } = item

    return <MovieCard key={id} {...itemProps} />
  })
  return <section className="movie-list">{elements}</section>
}

export default MovieList
