import React from 'react'

import './Header.css'

import Tabs from './Tabs/Tabs'
import SearchBar from './SearchBar/SearchBar'

const Header = ({ searchMovies }) => {
  return (
    <section className="header">
      <Tabs />
      <SearchBar searchMovies={searchMovies} />
    </section>
  )
}

export default Header
