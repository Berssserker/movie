import GetMovie from './GetMovie/GetMovie'

const FetchMovies = async (setError, setMoviesData, setLoading, text, page) => {
  setError(false)
  const data = await GetMovie(text, page)
  setMoviesData(data.results || [])
  setLoading(false)
  if (data.results.length === 0 && text) {
    setError(true)
  }
}

export default FetchMovies
