import React from 'react'

import './SearchBar.css'

const SearchBar = ({ text, setText, setPage }) => {
  const onSearch = (value) => {
    setPage('1')
    setText(value)
  }
  return (
    <input
      className="search-bar"
      type="text"
      value={text}
      placeholder="Type to search..."
      onChange={(e) => onSearch(e.target.value)}
    />
  )
}

export default SearchBar
