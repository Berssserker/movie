import React from 'react'

import './MovieList.css'

import MovieCardsProps from './MovieCardsProps/MovieCardsProps'

const MovieList = ({ guestId, ratedMoviesData, setRate, setMovieId }) => {
  return <section className="movie-list">{MovieCardsProps(ratedMoviesData, guestId, setRate, setMovieId)}</section>
}

export default MovieList
