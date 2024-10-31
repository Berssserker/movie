import React from 'react'

import './Search.css'

const Search = ({ searchMovies }) => {
  const onSearch = (e) => {
    setTimeout(() => {
      searchMovies(e.target.value)
    }, 1000)
  }
  return <input className="search" type="text" placeholder="Type to search..." onChange={onSearch} />
}

export default Search
