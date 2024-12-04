import React from 'react'
import { format } from 'date-fns'

const CardDescription = ({ overview, release_date }) => {
  return (
    <div className="description">
      <div className="date">
        {release_date !== '' ? format(new Date(release_date), 'MMMM d, yyyy') : 'Date not found :<'}
      </div>
      <div className="genre">
        <span>Action</span>
        <span>Drama</span>
      </div>
      <div className="description-text">{overview !== '' ? overview : 'Description not found :<'}</div>
    </div>
  )
}

export default CardDescription
