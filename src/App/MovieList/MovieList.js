import React from 'react'

import './MovieList.css'

import Elements from './Elements'
import OfflineMessage from './OfflineMessage/OfflineMessage'
import ErrorMessage from './ErrorMessage/ErrorMessage'

const MovieList = ({ moviesData, isOnline, error }) => {
  return (
    <section className="movie-list">
      {!isOnline ? <OfflineMessage /> : error ? <ErrorMessage /> : Elements(moviesData)}
    </section>
  )
}

export default MovieList
