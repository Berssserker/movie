import { useState, useEffect } from 'react'

import FetchRatedMovies from './FetchRatedMovies/FetchRatedMovies'

const useFetchRatedMovies = (guestId, tab, rate, movieId, setLoading) => {
  const [ratedMoviesData, setRatedMoviesData] = useState([])
  const [ratedError, setRatedError] = useState(false)
  useEffect(() => {
    if (!tab && guestId) {
      FetchRatedMovies(guestId, setRatedMoviesData, setLoading, setRatedError)
    }
  }, [tab, rate, movieId, guestId])
  return { ratedMoviesData, ratedError }
}

export default useFetchRatedMovies
