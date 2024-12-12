import GetRatedMovies from './GetRatedMovies/GetRatedMovies'

const FetchRatedMovies = async (guestId, setRatedMoviesData, setLoading, setRatedError) => {
  const fetch = async () => {
    setLoading(true)
    const body = await GetRatedMovies(guestId, setRatedError, setLoading)
    setRatedMoviesData(body.results || [])
  }
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
}

export default FetchRatedMovies
