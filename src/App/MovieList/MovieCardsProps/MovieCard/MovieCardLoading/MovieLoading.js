import React from 'react'
import { Card, Spin } from 'antd'

const MovieCardLoading = () => {
  return (
    <Card>
      <Spin size="large" />
    </Card>
  )
}

export default MovieCardLoading
