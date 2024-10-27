import React, { useState, useEffect } from 'react'
import { Card, Spin } from 'antd'
import { format } from 'date-fns'

import './MovieCard.css'

const MovieCard = ({ poster_path, overview, title, release_date }) => {
  const [loading, setLoading] = useState(true)
  const { Meta } = Card
  const url = 'https://image.tmdb.org/t/p/original'
  useEffect(() => {
    if (poster_path || poster_path === '') {
      setLoading(false)
    }
  }, [poster_path])
  return (
    <Card cover={loading ? <Spin size="large" /> : <img alt="example" src={url + poster_path} />}>
      <Meta title={title} description={overview !== '' ? overview : 'nenь'} />
      <div className="date">{release_date !== '' ? format(new Date(release_date), 'MMMM d, yyyy') : 'nenь'}</div>
      <div className="genre">
        <span>Action</span>
        <span>Drama</span>
      </div>
    </Card>
  )
}

export default MovieCard
