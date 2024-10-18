import React, { Component } from 'react'
import { Card } from 'antd'

import './movie-card.css'

export default class MovieCard extends Component {
  render() {
    const { Meta } = Card
    return (
      <Card cover={<img alt="example" src="https://i.pinimg.com/736x/dc/b1/f2/dcb1f2f6059158b405294f011c691d31.jpg" />}>
        <Meta
          title="Хуй в жопе"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book asdasdasdasfsadgf,sadflmsad;gkasdgmkasdkg"
        />
        <span className="date">March 5, 2020 </span>
        <div>
          <span className="genre">Action</span>
          <span className="genre">Drama</span>
        </div>
      </Card>
    )
  }
}
