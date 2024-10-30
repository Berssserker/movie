import React from 'react'

import './MovieList.css'

import MovieCardsProps from './MovieCardsProps/MovieCardsProps'
import OfflineMessage from './OfflineMessage/OfflineMessage'
import ErrorMessage from './ErrorMessage/ErrorMessage'

const MovieList = ({ moviesData, isOnline, error }) => {
  return (
    <section className="movie-list">
      {!isOnline ? <OfflineMessage /> : error ? <ErrorMessage /> : MovieCardsProps(moviesData)}
    </section>
  )
}

export default MovieList
