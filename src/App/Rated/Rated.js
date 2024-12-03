import React from 'react'

import MovieList from './MovieList/MovieList'

const Rated = ({ setMovieId, setRate, guestId, ratedMoviesData, ratedMoviesError }) => {
  return (
    <MovieList
      setMovieId={setMovieId}
      setRate={setRate}
      guestId={guestId}
      ratedMoviesData={ratedMoviesData}
      ratedMoviesError={ratedMoviesError}
    />
  )
}

export default Rated
