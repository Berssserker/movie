import React from 'react'

import MovieList from './MovieList/MovieList'

const Rated = ({ ratedMoviesData, setRating, setMovieId, ratedMoviesError }) => {
  return (
    <MovieList
      ratedMoviesData={ratedMoviesData}
      setRating={setRating}
      setMovieId={setMovieId}
      ratedMoviesError={ratedMoviesError}
    />
  )
}

export default Rated
