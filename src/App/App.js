import React, { useState, createContext } from 'react'

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
import useFetchGenres from './useFetchGenres/useFetchGenres'

export const GenresContext = createContext()

const App = () => {
  const [rate, setRate] = useState(0)
  const [text, setText] = useState('')
  const [tab, setTab] = useState(true)
  const [page, setPage] = useState('1')
  const [movieId, setMovieId] = useState(0)

  const genres = useFetchGenres()
  const isOnline = useNetworStatus()
  const { guestId, errorId } = useFetchId()
  const { moviesData, error, loading, setLoading } = useFetchMovies(text, page, tab)
  const { ratedMoviesData, ratedError } = useFetchRatedMovies(guestId, tab, rate, movieId, setLoading)

  return (
    <div className="movie">
      <Header setTab={setTab} />
      <GenresContext.Provider value={genres}>
        {tab ? (
          <Search
            setPage={setPage}
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
            ratedError={ratedError}
            setRate={setRate}
            setMovieId={setMovieId}
          />
        ) : null}
      </GenresContext.Provider>
      {loading ? (
        <Loading />
      ) : errorId ? (
        <ErrorMessageId />
      ) : !isOnline ? (
        <OfflineMessage />
      ) : error && tab ? (
        <ErrorMessageData />
      ) : ratedError && !tab ? (
        <ErrorMessageRate />
      ) : null}
      {tab ? <Footer page={page} setPage={setPage} /> : null}
    </div>
  )
}

export default App
