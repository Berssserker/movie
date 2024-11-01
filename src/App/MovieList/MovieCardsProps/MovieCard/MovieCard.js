import React, { useState, useEffect } from 'react'

import MovieCardSucces from './MovieCardSucces/MovieCardSucces'
import MovieCardError from './MovieCardError/MovieCardError'

import './MovieCard.css'

const MovieCard = ({ poster_path, overview, title, release_date }) => {
  const [error, setError] = useState(false)
  useEffect(() => {
    if (!poster_path && !overview && !title && !release_date) {
      setError(true)
    }
  }, [poster_path, overview, title, release_date])
  return error ? (
    <MovieCardError />
  ) : (
    <MovieCardSucces poster_path={poster_path} overview={overview} title={title} release_date={release_date} />
  )
}

export default MovieCard
