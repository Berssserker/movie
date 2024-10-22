import React, { Component } from 'react'
import { Card, Spin } from 'antd'
// import { format } from 'date-fns'

import './movie-card.css'

export default class MovieCard extends Component {
  state = {
    loading: true,
  }

  render() {
    // const { Meta } = Card
    return (
      <Card
      // cover={
      //   <img
      //     alt="nenь"
      //     src={
      //       this.props.poster_path !== null
      //         ? `https://image.tmdb.org/t/p/original${this.props.poster_path}`
      //         : 'https://avatars.mds.yandex.net/get-entity_search/2320096/993364518/S600xU_2x'
      //     }
      //   />
      // }
      >
        <Spin size="large" />
        {/* <Meta title={this.props.title} description={this.props.overview !== '' ? this.props.overview : 'nenь'} />
        <span className="date">
          {this.props.release_date !== '' ? format(new Date(this.props.release_date), 'MMMM d, yyyy') : 'nenь'}
        </span>
        <div className="genre">
          <span>Action</span>
          <span>Drama</span>
        </div> */}
      </Card>
    )
  }
}
