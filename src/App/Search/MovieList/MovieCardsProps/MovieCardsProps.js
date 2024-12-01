import MovieCard from './MovieCard/MovieCard'

const MovieCardsProps = (moviesData, ratedMoviesData, setRating, setMovieId) =>
  moviesData?.map((item) => {
    const { id, ...itemProps } = ratedMoviesData?.find((item2) => item2.id === item.id) || item
    return <MovieCard movieId={id} key={id} {...itemProps} setRating={setRating} setMovieId={setMovieId} />
  })

export default MovieCardsProps
