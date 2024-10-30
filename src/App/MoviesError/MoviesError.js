import { useEffect } from 'react'

const MoviesError = (data, setError) => {
  useEffect(() => {
    if (data !== null && data.length === 0) {
      setError(true)
    }
  }, [data])
}

export default MoviesError
