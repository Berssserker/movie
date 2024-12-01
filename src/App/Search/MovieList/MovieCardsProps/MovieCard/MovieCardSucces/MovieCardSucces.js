import React, { useState, useEffect } from 'react'
import { Card, Rate } from 'antd'
import { format } from 'date-fns'
import debounce from 'lodash.debounce'

const MovieCardSucces = ({
  movieId,
  vote_average,
  poster_path,
  overview,
  title,
  release_date,
  rating,
  setRating,
  setMovieId,
}) => {
  const [ratingData, setRatingData] = useState(rating || 0)
  const { Meta } = Card
  const url = 'https://image.tmdb.org/t/p/original'
  const plug = 'https://i1.sndcdn.com/artworks-Bg54D6aCmjdNZLMh-9lWVgg-t500x500.jpg'
  const fullImageUrl = poster_path ? url + poster_path : plug

  const debouncedChangeRating = debounce((newRating) => {
    setRating(newRating)
    setRatingData(newRating)
    setMovieId(movieId)
    console.log(movieId)
  }, 300)

  const ChangeRating = (e) => {
    debouncedChangeRating(e)
  }

  useEffect(() => {
    return () => {
      debouncedChangeRating.cancel()
    }
  }, [])
  return (
    <Card cover={<img alt="Poster" src={fullImageUrl} />}>
      <Meta
        title={
          <div className="title">
            <span>{title}</span>
            <span
              style={
                ratingData === 0
                  ? { borderColor: 'silver' }
                  : ratingData <= 3
                    ? { borderColor: '#E90000' }
                    : ratingData <= 5
                      ? { borderColor: '#E97E00' }
                      : ratingData <= 7
                        ? { borderColor: '#E9D100' }
                        : ratingData > 7
                          ? { borderColor: '#66E900' }
                          : null
              }
            >
              {Math.ceil(vote_average * 10) / 10}
            </span>
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
      <Rate value={ratingData} count={10} allowHalf onChange={(e) => ChangeRating(e)} />
    </Card>
  )
}

export default MovieCardSucces
