import React from 'react'

import './Search.css'

import MovieList from './MovieList/MovieList'
import SearchBar from './SearchBar/SearchBar'

const Search = ({ guestId, text, setText, moviesData }) => {
  return (
    <div className="search">
      <SearchBar text={text} setText={setText} />
      <MovieList guestId={guestId} moviesData={moviesData} />
    </div>
  )
}

export default Search
