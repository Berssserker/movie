import { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'

import FetchMovies from './FetchMovies/FetchMovies'

const useFetchMovies = (text, page) => {
  const [moviesData, setMoviesData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    if (text) {
      setLoading(true)
    } else {
      setLoading(false)
    }
    const debouncedFetchMovies = debounce(() => {
      FetchMovies(setMoviesData, text, setError, setLoading, page)
    }, 1000)
    debouncedFetchMovies()
    return () => {
      debouncedFetchMovies.cancel()
    }
  }, [text, page])
  return { moviesData, loading, error }
}

export default useFetchMovies
