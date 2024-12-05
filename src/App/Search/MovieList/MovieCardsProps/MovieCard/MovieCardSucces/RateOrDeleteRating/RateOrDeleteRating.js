import RateMovie from './RateMovie/RateMovie'
import DeleteRateMovie from './DeleteRateMovie/DeleteRateMovie'

const RateOrDeleteRating = async (guestId, movieId, rating) => {
  if (rating) {
    await RateMovie(guestId, movieId, rating)
  } else {
    await DeleteRateMovie(guestId, movieId)
  }
}

export default RateOrDeleteRating
