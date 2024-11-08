import { useState, useEffect } from 'react'

import FetchRatedMovies from './FetchMovies/FetchMovies'

const useFetchRatedMovies = () => {
  const [ratedMoviesData, setRatedMoviesData] = useState([])
  useEffect(() => {
    FetchRatedMovies()
  }, [])
  return { ratedMoviesData }
}

export default useFetchRatedMovies
