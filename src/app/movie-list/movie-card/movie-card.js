import React from 'react'
import { Card } from 'antd'
import { format } from 'date-fns'

import './movie-card.css'

const MovieCard = (props) => {
  const { Meta } = Card

  return (
    <Card
      cover={
        <img
          alt="nenь"
          src={
            props.poster_path !== null
              ? `https://image.tmdb.org/t/p/original${props.poster_path}`
              : 'https://avatars.mds.yandex.net/get-entity_search/2320096/993364518/S600xU_2x'
          }
        />
      }
    >
      <Meta title={props.title} description={props.overview !== '' ? props.overview : 'nenь'} />
      <span className="date">
        {props.release_date !== '' ? format(new Date(props.release_date), 'MMMM d, yyyy') : 'nenь'}
      </span>
      <div className="genre">
        <span>Action</span>
        <span>Drama</span>
      </div>
    </Card>
  )
}

export default MovieCard
