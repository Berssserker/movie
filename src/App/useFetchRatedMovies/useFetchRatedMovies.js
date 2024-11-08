import { useState, useEffect } from 'react'

import GetRated from './GetRated/GetRated'

const useFetchRatedMovies = (guestId, updateRate) => {
  const [ratedMoviesData, setRatedMoviesData] = useState([])
  const [ratedMoviesError, setRatedMoviesError] = useState(false)
  useEffect(() => {
    const FetchRatedMovies = async () => {
      try {
        const body = await GetRated(guestId)
        setRatedMoviesData(body.results || [])
        if (!body.results) {
          setRatedMoviesError(true)
        } else {
          setRatedMoviesError(false)
        }
      } catch (error) {
        console.log(error)
        setRatedMoviesData([])
      }
    }
    FetchRatedMovies()
  }, [updateRate, guestId])
  return { ratedMoviesData, ratedMoviesError }
}

export default useFetchRatedMovies
