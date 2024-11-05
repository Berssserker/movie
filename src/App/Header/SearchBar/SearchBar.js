import React from 'react'

import './SearchBar.css'

const SearchBar = ({ searchMovies }) => {
  const onSearch = (e) => {
    searchMovies(e.target.value)
  }
  return <input className="search" type="text" placeholder="Type to search..." onChange={onSearch} />
}

export default SearchBar
