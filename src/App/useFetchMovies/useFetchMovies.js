import { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'

import FetchMovies from './FetchMovies/FetchMovies'

const customDebounce = (func, wait) => {
  return debounce(func, wait)
}

const useFetchMovies = (text, page, tab) => {
  const [moviesData, setMoviesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setMoviesData([])
    if (text) {
      setLoading(true)
    }
    const debouncedFetchMovies = customDebounce(() => {
      FetchMovies(setError, setMoviesData, setLoading, text, page)
    }, 1000)
    debouncedFetchMovies()
    return () => {
      debouncedFetchMovies.cancel()
    }
  }, [text, page, tab])
  return { moviesData, loading, error, setLoading }
}

export default useFetchMovies
