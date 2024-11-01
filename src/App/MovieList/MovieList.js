import React from 'react'

import './MovieList.css'

import MovieCardsProps from './MovieCardsProps/MovieCardsProps'
import OfflineMessage from './OfflineMessage/OfflineMessage'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import Loading from './Loading/Loading'

const MovieList = ({ loading, moviesData, isOnline, error }) => {
  return (
    <section className="movie-list">
      {loading ? <Loading /> : !isOnline ? <OfflineMessage /> : error ? <ErrorMessage /> : MovieCardsProps(moviesData)}
    </section>
  )
}

export default MovieList
