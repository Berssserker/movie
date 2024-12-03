import MovieCard from './MovieCard/MovieCard'

const MovieCardsProps = (ratedMoviesData, guestId, setRate, setMovieId) =>
  ratedMoviesData?.map((item) => {
    const { id, ...itemProps } = item
    return (
      <MovieCard movieId={id} key={id} {...itemProps} guestId={guestId} setRate={setRate} setMovieId={setMovieId} />
    )
  })

export default MovieCardsProps
