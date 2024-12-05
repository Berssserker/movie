import GetMovie from './GetMovie/GetMovie'

const FetchMovies = async (setMoviesData, text, setError, page) => {
  setError(false)
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  try {
    await delay(3000)
    const data = await GetMovie(text, page)
    setMoviesData(data.results || [])
    if (data.results !== null && data.results.length === 0 && text) {
      setError(true)
    }
  } catch (error) {
    setMoviesData([])
  }
}

export default FetchMovies
