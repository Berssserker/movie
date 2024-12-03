import GetMovie from './GetMovie/GetMovie'

const FetchMovies = async (setMoviesData, text, setErrorData, setLoading, page) => {
  setErrorData(false)
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  try {
    await delay(2000)
    const data = await GetMovie(text, page)
    setMoviesData(data.results || [])
    console.log(data.results)
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
