import React from 'react'

import './MovieList.css'

import MovieCardsProps from './MovieCardsProps/MovieCardsProps'

const MovieList = ({ guestId, moviesData, ratedMoviesData, useUpdate }) => {
  return <section className="movie-list">{MovieCardsProps(moviesData, ratedMoviesData, guestId, useUpdate)}</section>
}

export default MovieList
