import React, { useState, useEffect } from 'react'
import { Card, Spin } from 'antd'
import { format } from 'date-fns'

import './MovieCard.css'

const MovieCard = (props) => {
  const [loading, setLoading] = useState(true)
  const { Meta } = Card
  const url = 'https://image.tmdb.org/t/p/original'
  useEffect(() => {
    if (props) {
      setLoading(false)
    }
  }, [props])
  if (loading) {
    return (
      <Card>
        <Spin size="large" />
      </Card>
    )
  }
  return (
    <Card cover={<img alt="Poster" src={url + props.poster_path} />}>
      <Meta title={props.title} description={props.overview !== '' ? props.overview : 'Description not found :<'} />
      <div className="date">
        {props.release_date !== '' ? format(new Date(props.release_date), 'MMMM d, yyyy') : 'Date not found :<'}
      </div>
      <div className="genre">
        <span>Action</span>
        <span>Drama</span>
      </div>
    </Card>
  )
}

export default MovieCard
