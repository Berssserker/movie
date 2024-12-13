import React, { useState } from 'react'
import { Card, Rate, Spin } from 'antd'

import './MovieCardSucces.css'

import CardMeta from './CardMeta/CardMeta'
import RateOrDeleteRating from './RateOrDeleteRating/RateOrDeleteRating'

const MovieCardSucces = ({
  genre_ids,
  movieId,
  vote_average,
  poster_path,
  overview,
  title,
  release_date,
  rating,
  guestId,
}) => {
  const [ratingData, setRatingData] = useState(rating || 0)
  const [cardLoading, setCardLoading] = useState(false)

  const url = 'https://image.tmdb.org/t/p/original'
  const plug = 'https://i1.sndcdn.com/artworks-Bg54D6aCmjdNZLMh-9lWVgg-t500x500.jpg'
  const fullImageUrl = poster_path ? url + poster_path : plug

  const ChangeRating = async (e) => {
    setCardLoading(true)
    await RateOrDeleteRating(guestId, movieId, e)
    setCardLoading(false)
    setRatingData(e)
  }

  return (
    <Card cover={<img alt="Poster" src={fullImageUrl} />}>
      <CardMeta
        genre_ids={genre_ids}
        ratingData={ratingData}
        vote_average={vote_average}
        overview={overview}
        title={title}
        release_date={release_date}
      />
      {!cardLoading ? <Rate value={ratingData} count={10} allowHalf onChange={(e) => ChangeRating(e)} /> : <Spin />}
    </Card>
  )
}

export default MovieCardSucces
