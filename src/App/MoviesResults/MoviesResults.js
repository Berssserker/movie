const MoviesResults = (callback, set, text) => {
  const timeoutId = setTimeout(() => {
    const FetchMovies = async () => {
      try {
        const data = await callback(text) // Передаем text в callback
        set(data.results || [])
      } catch (error) {
        console.log(error)
        set([])
      }
    }
    FetchMovies()
  }, 1000) // Задержка 500 мс

  return () => clearTimeout(timeoutId) // Очистка таймаута
}

export default MoviesResults
