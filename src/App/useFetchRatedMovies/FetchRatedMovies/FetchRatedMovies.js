import GetRatedMovies from './GetRatedMovies/GetRatedMovies'

const FetchRatedMovies = async (guestId) => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  await delay(2500)
  const ratedMovies = await GetRatedMovies(guestId)
  return ratedMovies
}

export default FetchRatedMovies
