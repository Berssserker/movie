import { Alert, Card } from 'antd'

const MovieError = () => {
  return (
    <Card>
      <Alert message="Ooops!" description="Something went wrong." type="warning" showIcon />
    </Card>
  )
}

export default MovieError
