import { useState, useEffect } from 'react'

import GetRated from './GetRated/GetRated'

const useFetchRatedMovies = (guestId, updateRate, tab) => {
  const [ratedMoviesData, setRatedMoviesData] = useState([])
  const [ratedMoviesError, setRatedMoviesError] = useState(false)
  console.log(tab)
  useEffect(() => {
    const FetchRatedMovies = async () => {
      if (!tab) {
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
    }
    FetchRatedMovies()
  }, [updateRate, guestId, tab])
  return { ratedMoviesData, ratedMoviesError }
}

export default useFetchRatedMovies
