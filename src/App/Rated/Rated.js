import React from 'react'

import './Rated.css'

import MovieList from './MovieList/MovieList'

const Rated = ({ setMovieId, setRate, guestId, ratedMoviesData }) => {
  return (
    <div className="rated">
      <MovieList setMovieId={setMovieId} setRate={setRate} guestId={guestId} ratedMoviesData={ratedMoviesData} />
    </div>
  )
}

export default Rated
