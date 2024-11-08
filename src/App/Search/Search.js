import React from 'react'

import './Search.css'

import MovieList from './MovieList/MovieList'
import SearchBar from './SearchBar/SearchBar'

const Search = ({ id, text, searchMovies, moviesData }) => {
  return (
    <div className="search">
      <SearchBar text={text} searchMovies={searchMovies} />
      <MovieList id={id} moviesData={moviesData} />
    </div>
  )
}

export default Search
