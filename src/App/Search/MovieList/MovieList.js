import React from 'react'

import './MovieList.css'

import MovieCardsProps from './MovieCardsProps/MovieCardsProps'

const MovieList = ({ moviesData }) => {
  return <section className="movie-list">{MovieCardsProps(moviesData)}</section>
}

export default MovieList
