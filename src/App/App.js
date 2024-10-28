import React, { useState, useEffect } from 'react'

import 'normalize.css'
import './App.css'

import MovieList from './MovieList/MovieList'
import GetMovie from './GetMovie/GetMovie'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await GetMovie()
        setMovies(data.results || [])
      } catch (error) {
        console.log(error)
        setMovies([])
      }
    }
    fetchMovies()
  }, [])
  return <MovieList movies={movies} />
}

export default App
