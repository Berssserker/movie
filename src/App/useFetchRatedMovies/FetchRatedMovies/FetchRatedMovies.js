import RateMovie from './RateMovie/RateMovie'
import GetRatedMovies from './GetRatedMovies/GetRatedMovies'
import DeleteRateMovie from './DeleteRateMovie/DeleteRateMovie'

const FetchRatedMovies = async (guestId, movieId, rating) => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  try {
    rating ? await RateMovie(guestId, movieId, rating) : DeleteRateMovie(guestId, movieId)
    await delay(2000)
    const ratedMovies = await GetRatedMovies(guestId)
    console.log('Оцененные фильмы:', ratedMovies)
    return ratedMovies
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

export default FetchRatedMovies
