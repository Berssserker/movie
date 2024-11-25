import { Alert, Card } from 'antd'

const MovieCardError = () => {
  return (
    <Card>
      <Alert message="Ooops!" description="Something went wrong." type="warning" showIcon />
    </Card>
  )
}

export default MovieCardError
