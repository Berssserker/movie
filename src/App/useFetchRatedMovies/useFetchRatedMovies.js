import { useState, useEffect } from 'react'

import FetchRatedMovies from './FetchRatedMovies/FetchRatedMovies'

const useFetchRatedMovies = (guestId, tab, rate, movieId, setLoading) => {
  const [ratedMoviesData, setRatedMoviesData] = useState([])
  const [ratedError, setRatedError] = useState(false)
  useEffect(() => {
    const Fetch = async () => {
      if (!tab && guestId) {
        try {
          setLoading(true)
          const body = await FetchRatedMovies(guestId)
          setRatedMoviesData(body.results || [])
          setLoading(false)
          if (!body.results) {
            setLoading(false)
            setRatedError(true)
          } else {
            setLoading(false)
            setRatedError(false)
          }
        } catch (error) {
          setLoading(false)
          setRatedError(true)
          setRatedMoviesData([])
        }
      }
    }
    Fetch()
  }, [tab, rate, movieId, guestId])
  return { ratedMoviesData, ratedError }
}

export default useFetchRatedMovies
