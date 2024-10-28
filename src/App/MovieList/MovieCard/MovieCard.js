import React, { useState, useEffect } from 'react'

import MovieLoading from './MovieCardLoading/MovieLoading'
import MovieSucces from './MovieCardSucces/MovieCardSucces'
import MovieError from './MovieCardError/MovieCardError'

import './MovieCard.css'

const MovieCard = ({ poster_path, overview, title, release_date }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    if (!poster_path && !overview && !title && !release_date) {
      setError(true)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [poster_path, overview, title, release_date])
  if (loading) {
    return <MovieLoading />
  }
  if (error) {
    return <MovieError />
  }
  return <MovieSucces poster_path={poster_path} overview={overview} title={title} release_date={release_date} />
}

export default MovieCard
