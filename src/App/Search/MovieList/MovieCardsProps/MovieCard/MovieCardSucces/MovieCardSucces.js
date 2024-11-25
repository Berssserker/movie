import React, { useState } from 'react'
import { Card, Rate } from 'antd'
import { format } from 'date-fns'

import RateAndFetchMovies from './RateMovie/RateMovie'
import DeleteRateMovie from './DeleteRateMovie/DeleteRateMovie'

const MovieCardSucces = ({
  movieId,
  guestId,
  vote_average,
  poster_path,
  overview,
  title,
  release_date,
  rating,
  useUpdate,
}) => {
  const [ratings, setRating] = useState(rating ? rating : 0)
  const { Meta } = Card
  const url = 'https://image.tmdb.org/t/p/original'
  const plug = 'https://i1.sndcdn.com/artworks-Bg54D6aCmjdNZLMh-9lWVgg-t500x500.jpg'
  const fullImageUrl = poster_path ? url + poster_path : plug
  const ChangeRating = (e) => {
    e ? RateAndFetchMovies(guestId, movieId, e) : DeleteRateMovie(guestId, movieId)
    setRating(e)
    useUpdate()
  }
  return (
    <Card cover={<img alt="Poster" src={fullImageUrl} />}>
      <Meta
        title={
          <div className="title">
            <span>{title}</span>
            <span>{Math.ceil(vote_average * 10) / 10}</span>
          </div>
        }
        description={
          <div>
            <div className="date">
              {release_date !== '' ? format(new Date(release_date), 'MMMM d, yyyy') : 'Date not found :<'}
            </div>
            <div className="genre">
              <span>Action</span>
              <span>Drama</span>
            </div>
            <div className="description">{overview !== '' ? overview : 'Description not found :<'}</div>
          </div>
        }
      />
      <Rate value={ratings} count={10} allowHalf onChange={(e) => ChangeRating(e)} />
    </Card>
  )
}

export default MovieCardSucces
