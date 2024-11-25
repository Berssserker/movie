import MovieCard from './MovieCard/MovieCard'

const MovieCardsProps = (property, property2, guestId, useUpdate) =>
  property?.map((item) => {
    const { id, ...itemProps } = property2?.find((item2) => item2.id === item.id) || item
    return <MovieCard guestId={guestId} movieId={id} key={id} {...itemProps} useUpdate={useUpdate} />
  })

export default MovieCardsProps
