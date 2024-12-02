import MovieCard from './MovieCard/MovieCard'

const MovieCardsProps = (ratedMoviesData, setRating, setMovieId) =>
  ratedMoviesData?.map((item) => {
    const { id, ...itemProps } = item
    return <MovieCard movieId={id} key={id} {...itemProps} setRating={setRating} setMovieId={setMovieId} />
  })

export default MovieCardsProps
