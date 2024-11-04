import React, { useState } from 'react'

import 'normalize.css'
import './App.css'

import Header from './Header/Header'
import MovieList from './MovieList/MovieList'
import useFetchMovies from './useFetchMovies/useFetchMovies'
import useNetworStatus from './useNetworkStatus/useNetworkStatus'
import Footer from './Footer/Footer'

const App = () => {
  const [text, setText] = useState('')
  const [page, setPage] = useState('1')
  const searchMovies = (value) => {
    setText(value.trim())
  }
  const updatePage = (number) => {
    setPage(number.toString())
  }
  const { moviesData, error, loading } = useFetchMovies(text, page)
  const { isOnline } = useNetworStatus()
  return (
    <div className="movie">
      <Header page={page} searchMovies={searchMovies} />
      <MovieList loading={loading} moviesData={moviesData} isOnline={isOnline} error={error} />
      <Footer updatePage={updatePage} />
    </div>
  )
}

export default App
