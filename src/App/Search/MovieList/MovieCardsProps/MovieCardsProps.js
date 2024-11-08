import MovieCard from './MovieCard/MovieCard'

const MovieCardsProps = (property, guestId) =>
  property?.map((item) => {
    const { id, ...itemProps } = item
    return <MovieCard guestId={guestId} key={id} {...itemProps} />
  })

export default MovieCardsProps
