import React, { useState, useEffect } from 'react'

import MovieCardSucces from './MovieCardSucces/MovieCardSucces'
import MovieCardError from './MovieCardError/MovieCardError'

import './MovieCard.css'

const MovieCard = ({
  genre_ids,
  movieId,
  vote_average,
  poster_path,
  overview,
  title,
  release_date,
  rating,
  setRating,
  setMovieId,
  guestId,
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
      genre_ids={genre_ids}
      movieId={movieId}
      vote_average={vote_average}
      poster_path={poster_path}
      overview={overview}
      title={title}
      release_date={release_date}
      rating={rating}
      setRating={setRating}
      setMovieId={setMovieId}
      guestId={guestId}
    />
  )
}

export default MovieCard
