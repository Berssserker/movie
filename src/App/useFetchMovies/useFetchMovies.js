import { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'

import FetchMovies from './FetchMovies/FetchMovies'

const useFetchMovies = (text, page, tab) => {
  const [moviesData, setMoviesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorData, setErrorData] = useState(false)
  useEffect(() => {
    setMoviesData([])
    if (text) {
      setLoading(true)
    }
    const debouncedFetchMovies = debounce(() => {
      FetchMovies(setMoviesData, text, setErrorData, setLoading, page)
    }, 1000)
    debouncedFetchMovies()
    return () => {
      debouncedFetchMovies.cancel()
    }
  }, [text, page, tab])
  return { moviesData, loading, errorData, setLoading }
}

export default useFetchMovies
