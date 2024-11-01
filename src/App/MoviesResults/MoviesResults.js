const MoviesResults = (callback, setData, text, setError) => {
  const timeoutId = setTimeout(() => {
    const FetchMovies = async () => {
      try {
        const data = await callback(text) // Передаем text в callback
        setData(data.results || [])
        if (data.results !== null && data.results.length === 0 && text !== '') {
          setError(true)
        } else {
          setError(false)
        }
      } catch (error) {
        console.log(error)
        setData([])
      }
    }
    FetchMovies()
  }, 1000) // Задержка 500 мс

  return () => clearTimeout(timeoutId) // Очистка таймаута
}

export default MoviesResults
