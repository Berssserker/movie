import { useEffect } from 'react'

const Movies = (callback, set) => {
  useEffect(() => {
    const FetchMovies = async () => {
      try {
        const data = await callback()
        set(data.results || [])
      } catch (error) {
        console.log(error)
        set([])
      }
    }
    FetchMovies()
  }, [])
}

export default Movies
