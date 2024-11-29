import MovieCard from './MovieCard/MovieCard'

const MovieCardsProps = (moviesData, ratedMoviesData, guestId, setRating, setMovieId) =>
  moviesData?.map((item) => {
    const { id, ...itemProps } = ratedMoviesData?.find((item2) => item2.id === item.id) || item
    return (
      <MovieCard guestId={guestId} movieId={id} key={id} {...itemProps} setRating={setRating} setMovieId={setMovieId} />
    )
  })

export default MovieCardsProps
