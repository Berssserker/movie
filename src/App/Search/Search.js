import React from 'react'

import './Search.css'

import MovieList from './MovieList/MovieList'
import SearchBar from './SearchBar/SearchBar'

const Search = ({ guestId, text, setText, moviesData, ratedMoviesData, setPage }) => {
  return (
    <div className="search">
      <SearchBar text={text} setText={setText} setPage={setPage} />
      <MovieList guestId={guestId} moviesData={moviesData} ratedMoviesData={ratedMoviesData} />
    </div>
  )
}

export default Search
