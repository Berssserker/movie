import React from 'react'

import './Search.css'

import MovieList from './MovieList/MovieList'
import SearchBar from './SearchBar/SearchBar'

const Search = ({ text, setText, moviesData, ratedMoviesData, setRating, setMovieId }) => {
  return (
    <div className="search">
      <SearchBar text={text} setText={setText} />
      <MovieList
        moviesData={moviesData}
        ratedMoviesData={ratedMoviesData}
        setRating={setRating}
        setMovieId={setMovieId}
      />
    </div>
  )
}

export default Search
