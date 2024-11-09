import React from 'react'

import './Search.css'

import MovieList from './MovieList/MovieList'
import SearchBar from './SearchBar/SearchBar'

const Search = ({ guestId, text, setText, moviesData, updateRatedMovies }) => {
  return (
    <div className="search">
      <SearchBar text={text} setText={setText} />
      <MovieList guestId={guestId} moviesData={moviesData} updateRatedMovies={updateRatedMovies} />
    </div>
  )
}

export default Search
