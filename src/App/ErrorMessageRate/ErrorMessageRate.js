import { Alert } from 'antd'

const ErrorMessageRate = () => {
  return (
    <Alert
      style={{ marginBottom: '45vh' }}
      message="Ooops!"
      description="We have not found the films you rated."
      type="error"
      showIcon
    />
  )
}

export default ErrorMessageRate
