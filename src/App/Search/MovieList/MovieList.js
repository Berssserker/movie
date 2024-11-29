import React from 'react'

import './MovieList.css'

import MovieCardsProps from './MovieCardsProps/MovieCardsProps'

const MovieList = ({ guestId, moviesData, ratedMoviesData, setRating, setMovieId }) => {
  return (
    <section className="movie-list">
      {MovieCardsProps(moviesData, ratedMoviesData, guestId, setRating, setMovieId)}
    </section>
  )
}

export default MovieList
