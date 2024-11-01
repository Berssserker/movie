import React, { useState, useEffect } from 'react'

import 'normalize.css'
import './App.css'

import Header from './Header/Header'
import MovieList from './MovieList/MovieList'
import GetMovie from './GetMovie/GetMovie'
import MoviesResults from './MoviesResults/MoviesResults'
import NetworStatus from './NetworkStatus/NetworkStatus'

const App = () => {
  const [moviesData, setMoviesData] = useState(null)
  const [isOnline, setIsOnline] = useState(true)
  const [error, setError] = useState(false)
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const searchMovies = (value) => {
    setText(value.trim())
  }
  useEffect(() => {
    MoviesResults(GetMovie, setMoviesData, text, setError, setLoading)
  }, [text])
  useEffect(() => {
    NetworStatus(setIsOnline)
  }, [isOnline])
  return (
    <div className="movie">
      <Header searchMovies={searchMovies} />
      <MovieList loading={loading} moviesData={moviesData} isOnline={isOnline} error={error} />
    </div>
  )
}

export default App
