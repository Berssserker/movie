import { useState, useEffect } from 'react'

import GetGenres from './GetGenres/GetGenres'

const useFetchGenres = () => {
  const [genresData, setGenresData] = useState([])
  useEffect(() => {
    const Fetch = async () => {
      try {
        const body = await GetGenres()
        console.log(body.genres)
        setGenresData(body.genres || [])
        if (!body.genres) {
          setGenresData([])
        }
      } catch (error) {
        console.log(error)
      }
    }
    Fetch()
  }, [])
  return genresData
}

export default useFetchGenres
