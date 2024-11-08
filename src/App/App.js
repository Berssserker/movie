import React, { useState } from 'react'

import 'normalize.css'
import './App.css'

import Search from './Search/Search'
import Header from './Header/Header'
import useFetchMovies from './useFetchMovies/useFetchMovies'
import useNetworStatus from './useNetworkStatus/useNetworkStatus'
import Footer from './Footer/Footer'
import OfflineMessage from './OfflineMessage/OfflineMessage'
import ErrorMessageData from './ErrorMessageData/ErrorMessageData'
import ErrorMessageId from './ErrorMessageId/ErrorMessageId'
import Loading from './Loading/Loading'
import useFetchId from './useFetchId/useFetchId'

const App = () => {
  const [text, setText] = useState('')
  const [page, setPage] = useState('1')
  const [tab, setTab] = useState(true)
  const { moviesData, errorData, loading } = useFetchMovies(text, page)
  const { isOnline } = useNetworStatus()
  const { guestId, errorId } = useFetchId()
  const searchMovies = (value) => {
    setText(value)
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
      {tab ? <Search guestId={guestId} text={text} searchMovies={searchMovies} moviesData={moviesData} /> : null}
      {loading ? (
        <Loading />
      ) : errorId ? (
        <ErrorMessageId />
      ) : !isOnline ? (
        <OfflineMessage />
      ) : errorData ? (
        <ErrorMessageData />
      ) : null}
      <Footer updatePage={updatePage} />
    </div>
  )
}

export default App
