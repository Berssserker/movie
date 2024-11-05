import React, { useState } from 'react'

import './Tabs.css'

const Tabs = ({ changeTab }) => {
  const [active, setActive] = useState(true)
  const onChangeTab = (value) => {
    changeTab(value)
    setActive(value)
  }
  return (
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
  )
}

export default Tabs
