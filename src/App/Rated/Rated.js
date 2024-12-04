import React from 'react'

import MovieList from './MovieList/MovieList'

const Rated = ({ setMovieId, setRate, guestId, ratedMoviesData }) => {
  return <MovieList setMovieId={setMovieId} setRate={setRate} guestId={guestId} ratedMoviesData={ratedMoviesData} />
}

export default Rated
