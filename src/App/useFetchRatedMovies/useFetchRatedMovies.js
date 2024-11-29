import { useState, useEffect } from 'react'

// import GetRated from './GetRated/GetRated'
import RateAndFetchMovies from './RateMovie/RateMovie'

const useFetchRatedMovies = (guestId, movieId, rating) => {
  const [ratedMoviesData, setRatedMoviesData] = useState([])
  const [ratedMoviesError, setRatedMoviesError] = useState(false)
  useEffect(() => {
    const FetchRatedMovies = async () => {
      if (guestId && movieId && rating) {
        try {
          const body = await RateAndFetchMovies(guestId, movieId, rating)
          setRatedMoviesData(body.results || [])
          if (!body.results) {
            setRatedMoviesError(true)
          } else {
            setRatedMoviesError(false)
          }
        } catch (error) {
          setRatedMoviesData([])
        }
      }
    }
    FetchRatedMovies()
  }, [movieId])
  return { ratedMoviesData, ratedMoviesError }
}

export default useFetchRatedMovies
