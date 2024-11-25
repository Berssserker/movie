import React, { useState, useEffect } from 'react'

import MovieCardSucces from './MovieCardSucces/MovieCardSucces'
import MovieCardError from './MovieCardError/MovieCardError'

import './MovieCard.css'

const MovieCard = ({
  movieId,
  guestId,
  vote_average,
  poster_path,
  overview,
  title,
  release_date,
  rating,
  useUpdate,
}) => {
  const [error, setError] = useState(false)
  useEffect(() => {
    if (!vote_average && !poster_path && !overview && !title && !release_date) {
      setError(true)
    }
  }, [vote_average, poster_path, overview, title, release_date])
  return error ? (
    <MovieCardError />
  ) : (
    <MovieCardSucces
      useUpdate={useUpdate}
      movieId={movieId}
      guestId={guestId}
      vote_average={vote_average}
      poster_path={poster_path}
      overview={overview}
      title={title}
      release_date={release_date}
      rating={rating}
    />
  )
}

export default MovieCard
