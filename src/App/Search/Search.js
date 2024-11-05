import React from 'react'

import MovieList from './MovieList/MovieList'

const Search = ({ loading, moviesData, isOnline, error }) => {
  return <MovieList loading={loading} moviesData={moviesData} isOnline={isOnline} error={error} />
}

export default Search
