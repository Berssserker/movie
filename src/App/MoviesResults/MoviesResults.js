const MoviesResults = (callback, setData, text, setError, setLoading) => {
  if (text) {
    setLoading(true)
  }
  const timeoutId = setTimeout(() => {
    const FetchMovies = async () => {
      try {
        const data = await callback(text)
        setData(data.results || [])
        if (data.results !== null && data.results.length === 0 && text) {
          setError(true)
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
        setData([])
      } finally {
        setLoading(false)
      }
    }
    FetchMovies()
  }, 1000)

  return () => clearTimeout(timeoutId)
}

export default MoviesResults
