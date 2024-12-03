import { Alert } from 'antd'

const ErrorMessageRate = () => {
  return (
    <Alert
      style={{ marginBottom: '45vh' }}
      message="Ooops!"
      description="Failed to create a guest session."
      type="error"
      showIcon
    />
  )
}

export default ErrorMessageRate
