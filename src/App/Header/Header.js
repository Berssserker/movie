import React from 'react'

import './Header.css'

import Tabs from './Tabs/Tabs'
import SearchBar from './SearchBar/SearchBar'

const Header = ({ changeTab, text, searchMovies }) => {
  return (
    <section className="header">
      <Tabs changeTab={changeTab} />
      <SearchBar text={text} searchMovies={searchMovies} />
    </section>
  )
}

export default Header
