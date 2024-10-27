import React from 'react'

import './MovieList.css'

import Elements from './Elements'

const MovieList = ({ movies }) => {
  return <section className="movie-list">{Elements(movies)}</section>
}

export default MovieList
