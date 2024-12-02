import React from 'react'

import './MovieList.css'

import MovieCardsProps from './MovieCardsProps/MovieCardsProps'

const MovieList = ({ ratedMoviesData, setRating, setMovieId }) => {
  return <section className="movie-list">{MovieCardsProps(ratedMoviesData, setRating, setMovieId)}</section>
}

export default MovieList
