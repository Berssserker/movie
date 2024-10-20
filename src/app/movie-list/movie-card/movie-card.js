import React, { Component } from 'react'
import { Card } from 'antd'

import './movie-card.css'

export default class MovieCard extends Component {
  render() {
    const { Meta } = Card
    return (
      <Card cover={<img alt="nenь" src={`https://image.tmdb.org/t/p/original${this.props.poster_path}`} />}>
        <Meta title={this.props.title} description={this.props.overview !== '' ? this.props.overview : 'nenь'} />
        <span className="date">March 5, 2020 </span>
        <div className="genre">
          <span>Action</span>
          <span>Drama</span>
        </div>
      </Card>
    )
  }
}
