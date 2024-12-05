import { useState, useEffect } from 'react'

import FetchRatedMovies from './FetchRatedMovies/FetchRatedMovies'

const useFetchRatedMovies = (guestId, tab, rate, movieId) => {
  const [ratedMoviesData, setRatedMoviesData] = useState([])
  const [loadingRated, setLoadingRated] = useState(false)
  const [ratedError, setRatedError] = useState(false)
  useEffect(() => {
    const Fetch = async () => {
      if (!tab && guestId) {
        try {
          setLoadingRated(true)
          const body = await FetchRatedMovies(guestId)
          setRatedMoviesData(body.results || [])
          setLoadingRated(false)
          if (!body.results) {
            setLoadingRated(false)
            setRatedError(true)
          } else {
            setLoadingRated(false)
            setRatedError(false)
          }
        } catch (error) {
          setLoadingRated(false)
          setRatedError(true)
          setRatedMoviesData([])
        }
      }
    }
    Fetch()
  }, [tab, rate, movieId, guestId])
  return { ratedMoviesData, ratedError, loadingRated }
}

export default useFetchRatedMovies
