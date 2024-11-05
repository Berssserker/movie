import React, { useState } from 'react'

import './Header.css'

const Header = ({ changeTab }) => {
  const [active, setActive] = useState(true)
  const onChangeTab = (value) => {
    changeTab(value)
    setActive(value)
  }
  return (
    <section className="header">
      <div className="tabs">
        <span
          onClick={() => {
            onChangeTab(true)
          }}
          className={active ? 'active' : ''}
        >
          Search
        </span>
        <span
          onClick={() => {
            onChangeTab(false)
          }}
          className={!active ? 'active' : ''}
        >
          Rated
        </span>
      </div>
    </section>
  )
}

export default Header
