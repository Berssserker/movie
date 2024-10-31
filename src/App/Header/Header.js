import React from 'react'

import './Header.css'

import Tabs from './Tabs/Tabs'
import Search from './Search/Search'

const Header = () => {
  return (
    <section className="header">
      <Tabs />
      <Search />
    </section>
  )
}

export default Header
