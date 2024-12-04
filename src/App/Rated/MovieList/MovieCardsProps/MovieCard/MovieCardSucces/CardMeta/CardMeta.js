import React from 'react'
import { Card } from 'antd'

import CardTitle from './CardTitle/CardTitle'
import CardDescription from './CardDescription/CardDescription'

const CardMeta = ({ ratingData, vote_average, overview, title, release_date }) => {
  const { Meta } = Card
  return (
    <Meta
      title={<CardTitle ratingData={ratingData} title={title} vote_average={vote_average} />}
      description={<CardDescription overview={overview} release_date={release_date} />}
    />
  )
}

export default CardMeta
