import React, { useState } from 'react'

import 'normalize.css'
import './App.css'

import MovieList from './MovieList/MovieList'
import GetMovie from './GetMovie/GetMovie'
import Movies from './Movies/Movies'
import NetworStatus from './NetworkStatus/NetworkStatus'
import MoviesError from './MoviesError/MoviesError'

const App = () => {
  const [moviesData, setMovies] = useState(null)
  const [isOnline, setIsOnline] = useState(true)
  const [error, setError] = useState(false)

  Movies(GetMovie, setMovies)
  NetworStatus(setIsOnline)
  MoviesError(moviesData, setError)

  return <MovieList moviesData={moviesData} isOnline={isOnline} error={error} />
}

export default App
