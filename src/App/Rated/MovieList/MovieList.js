import React from 'react'

import './MovieList.css'

import MovieCardsProps from './MovieCardsProps/MovieCardsProps'

const MovieList = ({ guestId, moviesData }) => {
  return <section className="movie-list">{MovieCardsProps(moviesData, guestId)}</section>
}

export default MovieList
