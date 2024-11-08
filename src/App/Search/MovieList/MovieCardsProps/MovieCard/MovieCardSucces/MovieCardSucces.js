import React from 'react'
import { Card, Rate } from 'antd'
import { format } from 'date-fns'

const MovieCardSucces = ({ vote_average, poster_path, overview, title, release_date }) => {
  const { Meta } = Card
  const url = 'https://image.tmdb.org/t/p/original'
  const plug = 'https://i1.sndcdn.com/artworks-Bg54D6aCmjdNZLMh-9lWVgg-t500x500.jpg'
  const fullImageUrl = poster_path ? url + poster_path : plug
  const Rating = (value) => {
    console.log(value)
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
      <Rate count={10} allowHalf onChange={Rating} />
    </Card>
  )
}

export default MovieCardSucces
