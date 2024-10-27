import MovieCard from './MovieCard/MovieCard'

const Elements = (property) =>
  property?.map((item) => {
    const { id, ...itemProps } = item

    return <MovieCard key={id} {...itemProps} />
  })

export default Elements
