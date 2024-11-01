import React from 'react'
import { Card } from 'antd'
import { format } from 'date-fns'

const MovieCardSucces = ({ poster_path, overview, title, release_date }) => {
  const { Meta } = Card
  const url = 'https://image.tmdb.org/t/p/original'
  const plug = 'https://i1.sndcdn.com/artworks-Bg54D6aCmjdNZLMh-9lWVgg-t500x500.jpg'
  const fullImageUrl = poster_path ? url + poster_path : plug
  return (
    <Card cover={<img alt="Poster" src={fullImageUrl} />}>
      <Meta title={title} description={overview !== '' ? overview : 'Description not found :<'} />
      <div className="date">
        {release_date !== '' ? format(new Date(release_date), 'MMMM d, yyyy') : 'Date not found :<'}
      </div>
      <div className="genre">
        <span>Action</span>
        <span>Drama</span>
      </div>
    </Card>
  )
}

export default MovieCardSucces
