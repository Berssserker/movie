import GetMovie from './GetMovie/GetMovie'

const FetchMovies = async (setMoviesData, text, setErrorData, setLoading, page) => {
  setErrorData(false)
  try {
    const data = await GetMovie(text, page)
    setMoviesData(data.results || [])
    if (data.results !== null && data.results.length === 0 && text) {
      setErrorData(true)
    }
  } catch (error) {
    console.log(error)
    setMoviesData([])
  } finally {
    setLoading(false)
  }
}

export default FetchMovies
