import GetRatedMovies from './GetRatedMovies/GetRatedMovies'

const FetchRatedMovies = async (guestId, setRatedMoviesData, setRatedError, setLoading) => {
  const fetch = async () => {
    const body = await GetRatedMovies(guestId, setRatedError)
    setRatedMoviesData(body.results || [])
  }
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  await fetch()
  setLoading(false)
}

export default FetchRatedMovies
