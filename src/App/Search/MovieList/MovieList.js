import React from 'react'

import './MovieList.css'

import MovieCardsProps from './MovieCardsProps/MovieCardsProps'

const MovieList = ({ guestId, moviesData, updateRatedMovies }) => {
  return <section className="movie-list">{MovieCardsProps(moviesData, guestId, updateRatedMovies)}</section>
}

export default MovieList
