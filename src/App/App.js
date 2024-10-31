import React, { useState } from 'react'

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

  MoviesResults(GetMovie, setMoviesData)
  NetworStatus(setIsOnline)
  MoviesError(moviesData, setError)

  return (
    <div className="movie">
      <Header />
      <MovieList moviesData={moviesData} isOnline={isOnline} error={error} />
    </div>
  )
}

export default App
