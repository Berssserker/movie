import { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'

import FetchMovies from './FetchMovies/FetchMovies'

const customDebounce = (func, wait) => {
  return debounce(func, wait)
}

const useFetchMovies = (text, page, tab, ratedMoviesData) => {
  const [moviesData, setMoviesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setMoviesData([])
    const debouncedFetchMovies = customDebounce(() => {
      FetchMovies(setError, setMoviesData, setLoading, text, page)
    }, 1000)
    if (text) {
      setLoading(true)
      debouncedFetchMovies()
    }
    return () => {
      debouncedFetchMovies.cancel()
    }
  }, [text, page, tab, ratedMoviesData])
  return { moviesData, loading, error, setLoading }
}

export default useFetchMovies
