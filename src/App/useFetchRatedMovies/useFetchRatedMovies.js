import { useState, useEffect } from 'react'

import FetchRatedMovies from './FetchRatedMovies/FetchRatedMovies'

const useFetchRatedMovies = (guestId, tab, rate, movieId, setLoading) => {
  const [ratedMoviesData, setRatedMoviesData] = useState([])
  const [ratedMoviesError, setRatedMoviesError] = useState(false)
  useEffect(() => {
    const Fetch = async () => {
      if (!tab && guestId) {
        try {
          setLoading(true)
          const body = await FetchRatedMovies(guestId, setRatedMoviesError)
          setRatedMoviesData(body.results || [])
          setLoading(false)
          if (!body.results) {
            setLoading(false)
            setRatedMoviesError(true)
          } else {
            setLoading(false)
            setRatedMoviesError(false)
          }
        } catch (error) {
          setLoading(false)
          setRatedMoviesError(true)
          setRatedMoviesData([])
        }
      }
    }
    Fetch()
  }, [tab, rate, movieId, guestId])
  return { ratedMoviesData, ratedMoviesError }
}

export default useFetchRatedMovies
