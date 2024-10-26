import React from 'react'

import './MovieList.css'

import MovieCard from './MovieCard/MovieCard'

const MovieList = (props) => {
  const elements = props.movies.map((item) => {
    const { id, ...itemProps } = item

    return <MovieCard key={id} {...itemProps} />
  })
  return <section className="movie-list">{elements}</section>
}

export default MovieList
