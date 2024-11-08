import { useState, useEffect } from 'react'

import FetchRatedMovies from './FetchMovies/FetchMovies'

const useFetchRatedMovies = (updateRate) => {
  const [ratedMoviesData, setRatedMoviesData] = useState([])
  useEffect(() => {
    FetchRatedMovies()
  }, [updateRate])
  return { ratedMoviesData }
}

export default useFetchRatedMovies
