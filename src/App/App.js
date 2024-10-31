import React, { useState, useEffect } from 'react'

import 'normalize.css'
import './App.css'

import Header from './Header/Header'
import MovieList from './MovieList/MovieList'
import GetMovie from './GetMovie/GetMovie'
import MoviesResults from './MoviesResults/MoviesResults'
import NetworStatus from './NetworkStatus/NetworkStatus'
import MoviesError from './MoviesError/MoviesError'

const App = () => {
  const [moviesData, setMoviesData] = useState(null)
  const [isOnline, setIsOnline] = useState(true)
  const [error, setError] = useState(false)
  const [text, setText] = useState('')
  const searchMovies = (value) => {
    setText(value.trim())
  }
  useEffect(() => {
    MoviesResults(GetMovie, setMoviesData, text)
  }, [text, moviesData])

  useEffect(() => {
    NetworStatus(setIsOnline)
  }, [isOnline])

  // const error = useMoviesError(moviesData, text)

  useEffect(() => {
    MoviesError(moviesData, setError, text)
  }, [moviesData, text])
  return (
    <div className="movie">
      <Header searchMovies={searchMovies} />
      <MovieList moviesData={moviesData} isOnline={isOnline} error={error} />
    </div>
  )
}

export default App
