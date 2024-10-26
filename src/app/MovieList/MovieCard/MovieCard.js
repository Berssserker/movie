import React from 'react'
import { Card } from 'antd'
import { format } from 'date-fns'

import './MovieCard.css'

const MovieCard = ({ poster_path, title, overview, release_date }) => {
  const { Meta } = Card

  return (
    <Card
      cover={
        <img
          alt="nenь"
          src={
            poster_path !== null
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : 'https://avatars.mds.yandex.net/get-entity_search/2320096/993364518/S600xU_2x'
          }
        />
      }
    >
      <Meta title={title} description={overview !== '' ? overview : 'nenь'} />
      <span className="date">{release_date !== '' ? format(new Date(release_date), 'MMMM d, yyyy') : 'nenь'}</span>
      <div className="genre">
        <span>Action</span>
        <span>Drama</span>
      </div>
    </Card>
  )
}

export default MovieCard
