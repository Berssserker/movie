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
import Rated from './Rated/Rated'
import useFetchRatedMovies from './useFetchRatedMovies/useFetchRatedMovies'
import ErrorMessageRate from './ErrorMessageRate/ErrorMessageRate'

const App = () => {
  const [text, setText] = useState('')
  const [page, setPage] = useState('1')
  const [tab, setTab] = useState(true)
  const [rate, setRate] = useState(0)
  const [movieId, setMovieId] = useState(0)
  const { moviesData, errorData, loading, setLoading } = useFetchMovies(text, page, tab)
  const { isOnline } = useNetworStatus()
  const { guestId, errorId } = useFetchId()
  const { ratedMoviesData, ratedMoviesError } = useFetchRatedMovies(guestId, tab, rate, movieId, setLoading)

  return (
    <div className="movie">
      <Header setTab={setTab} />
      {tab ? (
        <Search
          guestId={guestId}
          text={text}
          setText={setText}
          moviesData={moviesData}
          ratedMoviesData={ratedMoviesData}
        />
      ) : !loading && !tab ? (
        <Rated
          guestId={guestId}
          ratedMoviesData={ratedMoviesData}
          ratedMoviesError={ratedMoviesError}
          setRate={setRate}
          setMovieId={setMovieId}
        />
      ) : null}
      {loading ? (
        <Loading />
      ) : errorId ? (
        <ErrorMessageId />
      ) : !isOnline ? (
        <OfflineMessage />
      ) : errorData && tab ? (
        <ErrorMessageData />
      ) : ratedMoviesError && !tab ? (
        <ErrorMessageRate />
      ) : null}
      {tab ? <Footer page={page} setPage={setPage} /> : null}
    </div>
  )
}

export default App
