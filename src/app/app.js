import React, { useState, useEffect } from 'react'

import 'normalize.css'
import './app.css'

import MovieList from './movie-list/movie-list'
import GetMovie from './movie-API/movie-API'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await GetMovie()
        setMovies(data.results || [])
      } catch (error) {
        console.error('Ошибка при получении данных:', error)
        setMovies([])
      }
    }
    fetchMovies()
  }, [])

  return <MovieList movies={movies} />
}

export default App
