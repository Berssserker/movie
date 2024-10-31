import React from 'react'

import './Header.css'

import Tabs from './Tabs/Tabs'
import Search from './Search/Search'

const Header = ({ searchMovies }) => {
  return (
    <section className="header">
      <Tabs />
      <Search searchMovies={searchMovies} />
    </section>
  )
}

export default Header
