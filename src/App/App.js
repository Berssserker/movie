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

const App = () => {
  const [text, setText] = useState('')
  const [page, setPage] = useState('1')
  const [tab, setTab] = useState(true)
  const { moviesData, errorData, loading } = useFetchMovies(text, page)
  const { isOnline } = useNetworStatus()
  const { guestId, errorId } = useFetchId()
  const [rating, setRating] = useState(0)
  const [movieId, setMovieId] = useState(0)
  const { ratedMoviesData, ratedMoviesError } = useFetchRatedMovies(guestId, movieId, rating)

  return (
    <div className="movie">
      <Header setTab={setTab} text={text} page={page} />
      {tab ? (
        <Search
          guestId={guestId}
          text={text}
          setText={setText}
          moviesData={moviesData}
          ratedMoviesData={ratedMoviesData}
          setRating={setRating}
          setMovieId={setMovieId}
        />
      ) : (
        <Rated ratedMoviesData={ratedMoviesData} ratedMoviesError={ratedMoviesError} />
      )}
      {loading ? (
        <Loading />
      ) : errorId ? (
        <ErrorMessageId />
      ) : !isOnline ? (
        <OfflineMessage />
      ) : errorData ? (
        <ErrorMessageData />
      ) : null}
      <Footer setPage={setPage} />
    </div>
  )
}

export default App
