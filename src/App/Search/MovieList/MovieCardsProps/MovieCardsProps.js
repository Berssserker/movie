import MovieCard from './MovieCard/MovieCard'

const MovieCardsProps = (property, guestId, updateRatedMovies) =>
  property?.map((item) => {
    const { id, ...itemProps } = item
    return <MovieCard guestId={guestId} movieId={id} key={id} {...itemProps} updateRatedMovies={updateRatedMovies} />
  })

export default MovieCardsProps
