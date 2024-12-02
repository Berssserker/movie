import { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'

import FetchRatedMovies from './FetchRatedMovies/FetchRatedMovies'
import DeleteRateMovie from './DeleteRateMovie/DeleteRateMovie'

const useFetchRatedMovies = (guestId, movieId, rating) => {
  const [ratedMoviesData, setRatedMoviesData] = useState([])
  const [ratedMoviesError, setRatedMoviesError] = useState(false)
  useEffect(() => {
    const debouncedFetch = debounce(async () => {
      if (guestId) {
        try {
          if (ratedMoviesData.length === 1 && rating === 0) {
            setRatedMoviesData([])
            DeleteRateMovie(guestId, movieId)
          } else if (ratedMoviesData.length === 0 && rating === 0) {
            return
          } else {
            const body = await FetchRatedMovies(guestId, movieId, rating)
            setRatedMoviesData(body.results || [])
            if (!body.results) {
              setRatedMoviesError(true)
            } else {
              setRatedMoviesError(false)
            }
          }
        } catch (error) {
          setRatedMoviesData([])
        }
      }
    }, 1000)
    debouncedFetch()
  }, [movieId, rating])
  return { ratedMoviesData, ratedMoviesError }
}

export default useFetchRatedMovies
