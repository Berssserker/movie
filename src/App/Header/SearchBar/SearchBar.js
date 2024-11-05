import React from 'react'

import './SearchBar.css'

const SearchBar = ({ text, searchMovies }) => {
  const onSearch = (value) => {
    searchMovies(value)
  }
  return (
    <input
      className="search"
      type="text"
      value={text}
      placeholder="Type to search..."
      onChange={(e) => onSearch(e.target.value)}
    />
  )
}

export default SearchBar
