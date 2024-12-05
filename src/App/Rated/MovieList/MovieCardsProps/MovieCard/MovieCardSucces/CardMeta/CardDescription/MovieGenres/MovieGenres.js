import { useContext } from 'react'

import './MovieGenres.css'

import { GenresContext } from '../../../../../../../../App'

const MovieGenres = ({ genre_ids }) => {
  const genres = useContext(GenresContext)
  return genre_ids?.map((item) => {
    const genre = genres.find((item2) => item2.id === item) // Используйте find вместо filter
    return genre ? <span key={genre.id}>{genre.name}</span> : null // Проверка на существование
  })
}

export default MovieGenres
