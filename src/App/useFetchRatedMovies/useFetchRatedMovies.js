import { useState, useEffect } from 'react'

import FetchRatedMovies from './FetchRatedMovies/FetchRatedMovies'

const useFetchRatedMovies = (guestId, tab, rate, movieId) => {
  const [ratedMoviesData, setRatedMoviesData] = useState([])
  const [ratedError, setRatedError] = useState(false)
  const [ratedLoading, setRatingLoading] = useState(false)
  useEffect(() => {
    if (!tab && guestId) {
      setRatingLoading(true)
      FetchRatedMovies(guestId, setRatedMoviesData, setRatedError, setRatingLoading)
    }
  }, [tab, rate, movieId, guestId])
  return { ratedMoviesData, ratedError, ratedLoading }
}

export default useFetchRatedMovies
