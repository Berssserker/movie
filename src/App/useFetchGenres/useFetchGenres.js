import { useState, useEffect } from 'react'

import GetGenres from './GetGenres/GetGenres'

const useFetchGenres = () => {
  const [genres, setGenres] = useState([])
  useEffect(() => {
    const Fetch = async () => {
      try {
        const body = await GetGenres()
        console.log(body.genres)
        setGenres(body.genres || [])
        if (!body.genres) {
          setGenres([])
        }
      } catch (error) {
        console.log(error)
      }
    }
    Fetch()
  }, [])
  return genres
}

export default useFetchGenres
