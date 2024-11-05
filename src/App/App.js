import React, { useState } from 'react'

import 'normalize.css'
import './App.css'

import Search from './Search/Search'
import Header from './Header/Header'
import useFetchMovies from './useFetchMovies/useFetchMovies'
import useNetworStatus from './useNetworkStatus/useNetworkStatus'
import Footer from './Footer/Footer'
import OfflineMessage from './OfflineMessage/OfflineMessage'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import Loading from './Loading/Loading'

const App = () => {
  const [text, setText] = useState('')
  const [page, setPage] = useState('1')
  const [tab, setTab] = useState(true)
  const { moviesData, error, loading } = useFetchMovies(text, page)
  const { isOnline } = useNetworStatus()
  const searchMovies = (value) => {
    setText(value.trim())
  }
  const updatePage = (value) => {
    setPage(value.toString())
  }
  const changeTab = (value) => {
    setTab(value)
  }
  return (
    <div className="movie">
      <Header changeTab={changeTab} text={text} page={page} searchMovies={searchMovies} />
      {tab ? <Search text={text} searchMovies={searchMovies} moviesData={moviesData} /> : null}
      {loading ? <Loading /> : !isOnline ? <OfflineMessage /> : error ? <ErrorMessage /> : null}
      {moviesData.length > 0 ? <Footer updatePage={updatePage} /> : null}
    </div>
  )
}

export default App
